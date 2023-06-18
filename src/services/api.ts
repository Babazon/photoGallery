import axios from 'axios';
import {ImageDto, CommentDto, Maybe} from '../constants/types';

const API_URL = 'http://localhost:3000';

const PAGE_SIZE = 10;

export const getImages = async (page: number): Promise<ImageDto[]> => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const response = await axios.get(
    `${API_URL}/images?_start=${startIndex}&_end=${endIndex}`,
  );
  return response.data;
};

export const addComment = async (
  imageId: string,
  comment: string,
): Promise<Maybe<CommentDto>> => {
  try {
    const response = await axios.post(`${API_URL}/images/${imageId}/comments`, {
      comment,
      date: new Date().toISOString(),
    });
    return response.data;
  } catch (error) {
    console.error('Failed to add comment:', error);
    return undefined;
  }
};

export const editComment = async (
  imageId: string,
  commentId: string,
  updatedComment: string,
): Promise<Maybe<CommentDto>> => {
  try {
    const response = await axios.put(
      `${API_URL}/images/${imageId}/comments/${commentId}`,
      {
        comment: updatedComment,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Failed to edit comment:', error);
    return undefined;
  }
};

export const deleteComment = async (
  imageId: string,
  commentId: string,
): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/images/${imageId}/comments/${commentId}`);
  } catch (error) {
    console.error('Failed to delete comment:', error);
  }
};
