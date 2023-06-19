import {ImageDto, CommentDto, Maybe} from '../../constants/types';
import db from './db.json';

export const getImagesMock = async (page: number): Promise<ImageDto[]> => {
  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const images = db.images.slice(startIndex, endIndex);
  return images;
};

export const addCommentMock = async (
  imageId: number,
  comment: string,
): Promise<Maybe<CommentDto>> => {
  const image = db.images.find((img: ImageDto) => img.id === imageId);
  if (image) {
    const newComment: CommentDto = {
      id: Date.now(),
      comment,
      date: new Date().toISOString(),
      imageId,
    };
    image.comments.push(newComment);
    return newComment;
  }
  return undefined;
};

export const editCommentMock = async (
  imageId: number,
  commentId: number,
  updatedComment: string,
): Promise<Maybe<CommentDto>> => {
  const image = db.images.find((img: ImageDto) => img.id === imageId);
  if (image) {
    const comment = image.comments.find((c: CommentDto) => c.id === commentId);
    if (comment) {
      comment.comment = updatedComment;
      comment.date = new Date().toISOString();
      return comment;
    }
  }
  return undefined;
};

export const deleteCommentMock = async (
  imageId: number,
  commentId: number,
): Promise<void> => {
  const image = db.images.find((img: ImageDto) => img.id === imageId);
  if (image) {
    const commentIndex = image.comments.findIndex(
      (c: CommentDto) => c.id === commentId,
    );
    if (commentIndex !== -1) {
      image.comments.splice(commentIndex, 1);
    }
  }
};
