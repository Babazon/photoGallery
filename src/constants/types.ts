export type Maybe<T> = T | undefined;

export interface CommentDto {
  id: number;
  comment: string;
  date: string;
  imageId: number;
}

export interface ImageDto {
  url: string;
  id: number;
  title: Maybe<string>;
  description: Maybe<string>;
  comments: CommentDto[];
}
