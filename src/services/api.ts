import { AppImage, ImageComment } from '../constants/api-types';
import mockResponse from '../constants/imageData';

const {data: imagesData } = mockResponse;


const PAGE_SIZE = 10;

export const getImages = async (page: number): Promise<AppImage[]> => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedImages = imagesData.slice(startIndex, endIndex);
  return paginatedImages;
};

export const addComment = async (imageId: string, comment: string): Promise<ImageComment | undefined> => {
    const image = imagesData.find((image:AppImage) => image.id === imageId);
  
    if (image) {
      const newComment: ImageComment = {
        id: Math.random().toString(),
        comment,
        date: new Date().toISOString(),
      };
  
      image.comments.push(newComment);
      return newComment;
    }
  
    return undefined;
  };
  
  export const editComment = async (imageId: string, commentId: string, updatedComment: string): Promise<ImageComment | undefined> => {
    const image = imagesData.find((image:AppImage) => image.id === imageId);
    if (image) {
      const comment = image.comments.find((comment:ImageComment) => comment.id === commentId);
      if (comment) {
        comment.comment = updatedComment;
        return comment;
      }
    }
  
    return undefined;
  };
  
  export const deleteComment = async (imageId: string, commentId: string): Promise<void> => {
    const image = imagesData.find((image: AppImage) => image.id === imageId);
    if (image) {
      const commentIndex = image.comments.findIndex((comment: ImageComment) => comment.id === commentId);
      if (commentIndex !== -1) {
        image.comments.splice(commentIndex, 1);
      }
    }
  };
  