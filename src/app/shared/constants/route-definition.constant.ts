import { RouteDefinitionDto } from '../dto/route.dto';

export const ROUTE_DEFINITION: RouteDefinitionDto<string> = {
  APP: {
    POSTS: 'app.posts',
    NOT_FOUND: 'app.not-found',
  },
  POSTS: {
    DETAIL: 'posts.detail',
    CREATE: 'posts.create',
    EDIT: 'posts.edit',
  },
};
