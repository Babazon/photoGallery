import {useState} from 'react';
import {ImageDto} from '../../../constants/types';
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
} from '../../../services/queries';

export const useImageComments = ({
  selectedImage,
}: {
  selectedImage?: ImageDto;
}) => {
  const [newComment, setNewComment] = useState('');
  const [editComment, setEditComment] = useState('');

  const addCommentMutation = useAddCommentMutation();
  const editCommentMutation = useEditCommentMutation();
  const deleteCommentMutation = useDeleteCommentMutation();

  const handleSubmitAddComment = async () => {
    if (newComment && selectedImage) {
      try {
        await addCommentMutation.mutateAsync({
          imageId: selectedImage.id,
          comment: newComment,
        });
        setNewComment('');
      } catch (error) {
        // Handle error
      }
    }
  };

  const handleSubmitEditComment = async (
    commentId: string,
    updatedComment: string,
  ) => {
    if (selectedImage) {
      try {
        await editCommentMutation.mutateAsync({
          imageId: selectedImage.id,
          commentId,
          updatedComment,
        });
      } catch (error) {
        // Handle error
      }
    }
  };

  const handleSubmitDeleteComment = async (commentId: string) => {
    if (selectedImage) {
      try {
        await deleteCommentMutation.mutateAsync({
          imageId: selectedImage.id,
          commentId,
        });
      } catch (error) {
        // Handle error
      }
    }
  };

  return {
    newComment,
    setNewComment,
    editComment,
    setEditComment,
    handleSubmitAddComment,
    handleSubmitEditComment,
    handleSubmitDeleteComment,
  };
};
