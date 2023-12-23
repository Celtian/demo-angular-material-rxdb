import { ParamMap } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';

export const getParamId = (): OperatorFunction<ParamMap, string> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        return params.get('id') || '';
      }),
    );
  };
};
