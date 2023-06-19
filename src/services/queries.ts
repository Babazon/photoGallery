import {QueryClient, useMutation, useQuery, useQueryClient} from 'react-query';
import {ImageDto, CommentDto, Maybe} from '../constants/types';
import {api} from './api';
import {CACHE_STALE_TIME} from '../constants/constants';

const {addComment, deleteComment, editComment, getImages} = api;

export const useGetImagesQuery = (page: number) => {
  return useQuery<ImageDto[], Error>(['images', page], () => getImages(page), {
    keepPreviousData: true,
    staleTime: CACHE_STALE_TIME,
  });
};

export const useAddCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Maybe<CommentDto>,
    Error,
    {imageId: number; comment: string}
  >(({imageId, comment}) => addComment(imageId, comment), {
    onSuccess: () => {
      queryClient.invalidateQueries('images');
    },
  });
};

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Maybe<CommentDto>,
    Error,
    {imageId: number; commentId: number; updatedComment: string}
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

  return useMutation<void, Error, {imageId: number; commentId: number}>(
    ({imageId, commentId}) => deleteComment(imageId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('images');
      },
    },
  );
};

export const client = new QueryClient();
