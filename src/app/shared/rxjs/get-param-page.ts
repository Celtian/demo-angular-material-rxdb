import { ParamMap } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';

interface GetParamPage {
  pageIndex: number;
  pageSize: number;
}

export const getParamPage = (): OperatorFunction<ParamMap, GetParamPage> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        const pageIndex = params.get('pageIndex');
        const pageSize = params.get('pageSize');
        return {
          pageIndex: pageIndex ? +pageIndex : 1,
          pageSize: pageSize ? +pageSize : 5,
        };
      }),
    );
  };
};
