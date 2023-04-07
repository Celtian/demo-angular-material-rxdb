export interface PostDto {
  id: string;
  title: string;
  body: string;
}

export type PostInputDto = Omit<PostDto, 'id'>;
