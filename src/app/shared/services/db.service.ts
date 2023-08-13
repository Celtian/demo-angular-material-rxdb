import { Injectable, isDevMode } from '@angular/core';
import { RxDatabase, RxJsonSchema, addRxPlugin, createRxDatabase } from 'rxdb';
import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { BehaviorSubject } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dbSchema: RxJsonSchema<any> | any = {
  title: 'posts schema',
  version: 0,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      primary: true,
      maxLength: 100,
    },
    title: {
      type: 'string',
    },
    body: {
      type: 'string',
    },
  },
};

async function loadRxDBPlugins(): Promise<void> {
  addRxPlugin(RxDBAttachmentsPlugin);
  addRxPlugin(RxDBUpdatePlugin);

  if (isDevMode()) {
    addRxPlugin(RxDBDevModePlugin);
  }
}

loadRxDBPlugins();

@Injectable({
  providedIn: 'root',
})
export class RxdbProvider {
  private rxDatabase!: RxDatabase;
  private dataBaseReadySubj = new BehaviorSubject<boolean>(false);
  public dataBaseReady$ = this.dataBaseReadySubj.asObservable();

  public getDatabaseCollection(collectionName: string) {
    if (!this.rxDatabase) {
      throw new Error(
        'Database is not initialized. Please make sure the database is initialized before getting the collection',
      );
    }
    return this.rxDatabase[collectionName];
  }

  public async initDB(databaseName: string): Promise<RxDatabase> {
    if (this.rxDatabase && this.rxDatabase.name === databaseName && !this.rxDatabase.destroyed) {
      return this.rxDatabase;
    }

    this.rxDatabase = await createRxDatabase({
      name: databaseName,
      storage: getRxStorageDexie(),
      password: 'myLongAndStupidPassword',
    });

    await this.rxDatabase.addCollections({
      posts: {
        schema: dbSchema,
      },
    });

    this.dataBaseReadySubj.next(true);

    return this.rxDatabase;
  }
}
