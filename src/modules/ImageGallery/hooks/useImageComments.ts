import {useState} from 'react';
import {CommentDto, ImageDto} from '../../../constants/types';
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
} from '../../../services/queries';

interface UseImageCommentsProps {
  selectedImage?: ImageDto;
}

interface UseImageCommentsResult {
  newComment: string;
  setNewComment: React.Dispatch<React.SetStateAction<string>>;
  editComment: string;
  setEditComment: React.Dispatch<React.SetStateAction<string>>;
  selectedComment: CommentDto | null;
  setSelectedComment: React.Dispatch<React.SetStateAction<CommentDto | null>>;
  handleSubmitAddComment: () => Promise<void>;
  handleSubmitEditComment: (
    commentId: number,
    updatedComment: string,
  ) => Promise<void>;
  handleSubmitDeleteComment: (commentId: number) => Promise<void>;
}

export const useImageComments = ({
  selectedImage,
}: UseImageCommentsProps): UseImageCommentsResult => {
  const [newComment, setNewComment] = useState('');
  const [editComment, setEditComment] = useState('');
  const [selectedComment, setSelectedComment] = useState<CommentDto | null>(
    null,
  );

  const addCommentMutation = useAddCommentMutation();
  const editCommentMutation = useEditCommentMutation();
  const deleteCommentMutation = useDeleteCommentMutation();

  const handleSubmitAddComment = async (): Promise<void> => {
    if (newComment && selectedImage) {
      try {
        await addCommentMutation.mutateAsync({
          imageId: selectedImage.id,
          comment: newComment,
        });
        setNewComment('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSubmitEditComment = async (
    commentId: number,
    updatedComment: string,
  ): Promise<void> => {
    if (selectedImage) {
      try {
        await editCommentMutation.mutateAsync({
          imageId: selectedImage.id,
          commentId,
          updatedComment,
        });

        setSelectedComment(null);
        setEditComment('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSubmitDeleteComment = async (
    commentId: number,
  ): Promise<void> => {
    if (selectedImage) {
      try {
        await deleteCommentMutation.mutateAsync({
          imageId: selectedImage.id,
          commentId,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    newComment,
    setNewComment,
    editComment,
    setEditComment,
    selectedComment,
    setSelectedComment,
    handleSubmitAddComment,
    handleSubmitEditComment,
    handleSubmitDeleteComment,
  };
};
