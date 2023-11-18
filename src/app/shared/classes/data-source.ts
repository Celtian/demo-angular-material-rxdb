import { signal } from '@angular/core';
import { isEqual } from 'lodash-es';
import { DEFAULT_DATASOURCE_STATE } from '../constants/data-source.constant';
import { DataSourceState } from '../dto/data-source.dto';

export class DataSource<T> {
  public state = signal<DataSourceState>(DEFAULT_DATASOURCE_STATE);
  public error = signal('');
  public data = signal<T>(this.initialData);

  constructor(private initialData: T) {}

  public updateState(): void {
    if (this.error()) {
      this.state.set('error');
    } else if (isEqual(this.data(), this.initialData)) {
      this.state.set('empty');
    } else {
      this.state.set('data');
    }
  }

  public setError(message: string): void {
    this.error.set(message);
    this.data.set(this.initialData);
    this.updateState();
  }

  public setData(data: T): void {
    this.data.set(data);
    this.updateState();
  }
}
