import { ParamMap } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';
import { PostDto } from '../dto/post.dto';

interface GetParamSort {
  sortBy: keyof PostDto;
  sortDirection: 'asc' | 'desc';
}

export const getParamSort = (): OperatorFunction<ParamMap, GetParamSort> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        return {
          sortBy: (params.get('sortBy') || 'id') as keyof PostDto,
          sortDirection: (params.get('sortDirection') || 'asc') as 'asc' | 'desc',
        };
      }),
    );
  };
};
