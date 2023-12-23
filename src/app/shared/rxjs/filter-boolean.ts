import { MonoTypeOperatorFunction, filter } from 'rxjs';

export const filterBoolean = (): MonoTypeOperatorFunction<boolean> => {
  return (input$) => {
    return input$.pipe(filter((value) => value === true));
  };
};
