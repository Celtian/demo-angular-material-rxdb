import { isEqual } from 'lodash-es';
import { DEFAULT_DATASOURCE_STATE } from '../constants/data-source.constant';
import { DataSourceState } from '../dto/data-source.dto';

export class DataSource<T> {
  public data!: T;
  public initialData!: T;
  public error = '';
  public state: DataSourceState = DEFAULT_DATASOURCE_STATE;

  constructor(initialData: T) {
    this.data = initialData;
    this.initialData = initialData;
  }

  public updateState(): void {
    if (this.error) {
      this.state = 'error';
    } else if (isEqual(this.data, this.initialData)) {
      this.state = 'empty';
    } else {
      this.state = 'data';
    }
  }

  public setError(message: string): void {
    this.error = message;
    this.data = this.initialData;
    this.updateState();
  }

  public setData(data: T): void {
    this.data = data;
    this.updateState();
  }
}
