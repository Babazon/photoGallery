import {QueryClient, useMutation, useQuery, useQueryClient} from 'react-query';
import {ImageDto, CommentDto} from '../constants/types';
import {addComment, deleteComment, editComment, getImages} from './api';

const CACHE_STALE_TIME = 300000;

export const useGetImagesQuery = (page: number) => {
  return useQuery<ImageDto[], Error>(['images', page], () => getImages(page), {
    keepPreviousData: true,
    staleTime: CACHE_STALE_TIME,
  });
};

export const useAddCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    CommentDto | undefined,
    Error,
    {imageId: string; comment: string}
  >(({imageId, comment}) => addComment(imageId, comment), {
    onSuccess: () => {
      queryClient.invalidateQueries('images');
    },
  });
};

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    CommentDto | undefined,
    Error,
    {imageId: string; commentId: string; updatedComment: string}
  >(
    ({imageId, commentId, updatedComment}) =>
      editComment(imageId, commentId, updatedComment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('images');
      },
    },
  );
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, {imageId: string; commentId: string}>(
    ({imageId, commentId}) => deleteComment(imageId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('images');
      },
    },
  );
};

export const client = new QueryClient();
