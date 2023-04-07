interface APP<T> {
  POSTS: T;
  NOT_FOUND: T;
}

interface POSTS<T> {
  DETAIL: T;
  CREATE: T;
  EDIT: T;
}

export interface RouteDefinitionDto<T> {
  APP: APP<T>;
  POSTS: POSTS<T>;
}
