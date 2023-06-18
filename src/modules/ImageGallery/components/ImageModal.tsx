import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {forwardRef} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import {ImageDto} from '../../../constants/types';
import {formatDate} from '../../../utils/formatDate';
import {translations} from '../../../constants/translations.en';

interface ImageModalProps {
  ref: React.RefObject<any>;
  snapPoints: string[];
  selectedImage: ImageDto | undefined;
  newComment: string;
  setNewComment: (comment: string) => void;
  editComment: string;
  setEditComment: (comment: string) => void;
  handleSubmitAddComment: () => void;
  handleSubmitEditComment: (id: string, comment: string) => void;
  handleSubmitDeleteComment: (id: string) => void;
}

export const ImageModal = forwardRef<any, ImageModalProps>(
  (
    {
      snapPoints,
      selectedImage,
      newComment,
      setNewComment,
      handleSubmitAddComment,
      handleSubmitEditComment,
      handleSubmitDeleteComment,
    },
    ref,
  ) => (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      style={styles.modalStyle}>
      <ImageBackground
        source={{uri: selectedImage?.url ?? ''}}
        style={styles.imageBackground}>
        <ModalTitle>{selectedImage?.title ?? ''}</ModalTitle>
        <CommentContainer>
          <CommentInput
            placeholder="Enter a comment"
            placeholderTextColor="white"
            value={newComment}
            onChangeText={setNewComment}
          />
          <AddButton onPress={handleSubmitAddComment}>
            <AddButtonText>{translations.addComment}</AddButtonText>
          </AddButton>
        </CommentContainer>
        <CommentList>
          {selectedImage?.comments.map((comment, index) => (
            <CommentItem key={index}>
              <CommentText>{comment.comment}</CommentText>
              <CommentDate>{formatDate(comment.date)}</CommentDate>
              <CommentActions>
                <TouchableOpacity
                  onPress={() => handleSubmitEditComment(comment.id, 'baba')}
                  style={styles.buttonMargin}>
                  <CommentActionText>
                    {translations.editComment}
                  </CommentActionText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleSubmitDeleteComment(comment.id)}>
                  <CommentActionText>
                    {translations.deleteComment}
                  </CommentActionText>
                </TouchableOpacity>
              </CommentActions>
            </CommentItem>
          ))}
        </CommentList>
      </ImageBackground>
    </BottomSheetModal>
  ),
);

const ModalTitle = styled(Text)`
  color: white;
`;

const CommentContainer = styled(View)`
  background-color: rgba(0, 0, 0, 0.2);
  margin: 8px;
`;

const CommentInput = styled(TextInput)`
  color: #fff;
  padding-horizontal: 8px;
  border-style: solid;
  border-color: white;
  border-width: 1px;
`;

const AddButton = styled(TouchableOpacity)`
  align-self: flex-end;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`;

const AddButtonText = styled(Text)`
  color: #fff;
`;

const CommentList = styled(View)`
  flex: 1;
`;

const CommentItem = styled(View)`
  margin-bottom: 8px;
`;

const CommentText = styled(Text)`
  color: white;
`;

const CommentDate = styled(Text)`
  color: white;
`;

const CommentActions = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;

const CommentActionText = styled(Text)`
  color: white;
`;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 8,
  },
  modalStyle: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  buttonMargin: {marginRight: 8},
});
