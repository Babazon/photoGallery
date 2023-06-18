export type Maybe<T> = T | undefined |null;

export interface CommentDto {
    id:string;
    comment: string;
    date: string;
    imageId: string;
}

export interface ImageDto {
    url:string
    id: string;
    title: Maybe<string>;
    description: Maybe<string>;
    comments: CommentDto[];
}   