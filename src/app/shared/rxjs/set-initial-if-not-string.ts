import { MonoTypeOperatorFunction, tap } from 'rxjs';
import { DataSource } from '../classes/data-source';

export const setInitialIfNotString = <T>(dataSource: DataSource<T>): MonoTypeOperatorFunction<string> => {
  return (input$) => {
    return input$.pipe(
      tap((id) => {
        if (!id) {
          dataSource.setData();
        }
      }),
    );
  };
};
