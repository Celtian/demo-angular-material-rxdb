interface APP<T> {
  HOMEPAGE: T;
  NOT_FOUND: T;
}

export interface RouteDefinitionDto<T> {
  APP: APP<T>;
}
