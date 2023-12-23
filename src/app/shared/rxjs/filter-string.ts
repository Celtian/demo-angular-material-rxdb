import { MonoTypeOperatorFunction, filter } from 'rxjs';

export const filterString = (): MonoTypeOperatorFunction<string> => {
  return (input$) => {
    return input$.pipe(filter((id) => !!id));
  };
};
