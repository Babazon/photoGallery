import {PAGE_SIZE, API_URL, IS_DEV} from '../constants/constants';
import {ImageDto, CommentDto, Maybe} from '../constants/types';
import axios from 'axios';

import {
  getImagesMock,
  addCommentMock,
  editCommentMock,
  deleteCommentMock,
} from './mockApi/mockApi';

export const getImages = async (page: number): Promise<ImageDto[]> => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const response = await axios.get(
    `${API_URL}/images?_start=${startIndex}&_end=${endIndex}`,
  );
  return response.data;
};

export const addComment = async (
  imageId: number,
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
  imageId: number,
  commentId: number,
  updatedComment: string,
): Promise<Maybe<CommentDto>> => {
  try {
    const response = await axios.patch(
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
  imageId: number,
  commentId: number,
): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/images/${imageId}/comments/${commentId}`);
  } catch (error) {
    console.error('Failed to delete comment:', error);
  }
};

export const api = {
  getImages: IS_DEV ? getImagesMock : getImages,
  addComment: IS_DEV ? addCommentMock : addComment,
  editComment: IS_DEV ? editCommentMock : editComment,
  deleteComment: IS_DEV ? deleteCommentMock : deleteComment,
};
