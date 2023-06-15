export type Maybe<T> = T | undefined |null;

export interface ImageComment {
    id:string;
    comment: string;
    date: string;
}

export interface AppImage {
    fullImageUrl: string;
    thumbnailUrl: string;
    id: string;
    title: Maybe<string>;
    description: Maybe<string>;
    comments: ImageComment[];
}   