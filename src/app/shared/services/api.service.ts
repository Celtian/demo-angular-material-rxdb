import { Injectable } from '@angular/core';
import { combineLatest, from, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { PostDto } from '../dto/post.dto';
import { RxdbProvider } from './db.service';

interface PostListInput {
  page: number;
  limit: number;
  sort: keyof PostDto;
  order: 'asc' | 'desc';
  query: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  constructor(private rxdbProvider: RxdbProvider) {}

  private get collection() {
    return this.rxdbProvider.getDatabaseCollection('posts');
  }

  public create(body: Partial<T>) {
    return from(
      this.collection.insert({
        id: uuidv4(),
        ...body,
      }),
    ).pipe(map((doc) => doc._data));
  }

  public patch(id: string, body: Partial<T>) {
    return from(this.collection.findOne({ selector: { id } }).update({ id, ...body })).pipe(
      map((doc) => ({ ...doc._data, ...body })),
    );
  }

  public put(id: string, body: T) {
    return from(this.collection.upsert({ id, ...body })).pipe(map((doc) => ({ ...doc._data, ...body })));
  }

  public detail(id: string) {
    return from(this.collection.findOne({ selector: { id } }).exec()).pipe(map((doc) => doc._data));
  }

  public delete(id: string) {
    return from(this.collection.findOne({ selector: { id } }).remove()).pipe(map((doc) => doc._data));
  }

  public list(input: PostListInput) {
    const selector = input.query ? { title: { $regex: new RegExp(input.query, 'i') } } : undefined;
    return from(
      this.collection
        .find({
          skip: input.page - 1,
          limit: input.limit,
          selector,
          sort: [
            {
              [input.sort]: input.order,
            },
          ],
        })
        .exec(),
    ).pipe(map((docs) => docs.map((doc) => doc._data)));
  }

  public count() {
    return from(this.collection.count().exec());
  }

  public listAndCount(input: PostListInput) {
    return combineLatest([this.list(input), this.count()]).pipe(
      map(([items, totalCount]) => ({
        items,
        totalCount,
      })),
    );
  }
}
