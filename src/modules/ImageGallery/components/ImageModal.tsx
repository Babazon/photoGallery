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
import {CommentDto, ImageDto, Maybe} from '../../../constants/types';
import {formatDate} from '../../../utils/formatDate';
import {translations} from '../../../constants/translations.en';

interface ImageModalProps {
  snapPoints: string[];
  selectedImage: Maybe<ImageDto>;
  selectedComment: Maybe<CommentDto>;
  setSelectedComment: (comment: CommentDto | null) => void;
  newComment: string;
  setNewComment: (comment: string) => void;
  editComment: string;
  setEditComment: (comment: string) => void;
  handleSubmitAddComment: () => void;
  handleSubmitEditComment: (id: number, comment: string) => void;
  handleSubmitDeleteComment: (id: number) => void;
}

export const ImageModal = forwardRef<any, ImageModalProps>(
  (
    {
      snapPoints,
      selectedImage,
      selectedComment,
      setSelectedComment,
      newComment,
      setNewComment,
      editComment,
      setEditComment,
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
            placeholder={translations.commentPlaceholder}
            placeholderTextColor="white"
            value={newComment}
            onChangeText={setNewComment}
          />
          <AddButton onPress={handleSubmitAddComment}>
            <AddButtonText>{translations.addComment}</AddButtonText>
          </AddButton>
        </CommentContainer>
        <CommentList>
          {selectedImage?.comments.map((comment: CommentDto) => (
            <CommentItem key={`${comment.id}`}>
              {selectedComment && selectedComment.id === comment.id ? (
                <CommentContainer>
                  <CommentInput
                    placeholderTextColor="white"
                    value={editComment}
                    onChangeText={setEditComment}
                  />
                  <CommentActions>
                    <TouchableOpacity
                      onPress={() =>
                        handleSubmitEditComment(comment.id, editComment ?? '')
                      }
                      style={styles.buttonMargin}>
                      <CommentActionText>
                        {translations.submitEditComment}
                      </CommentActionText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedComment(null)}>
                      <CommentActionText>
                        {translations.cancelEditComment}
                      </CommentActionText>
                    </TouchableOpacity>
                  </CommentActions>
                </CommentContainer>
              ) : (
                <>
                  <CommentText>{comment.comment}</CommentText>
                  <CommentDate>{formatDate(comment.date)}</CommentDate>
                  <CommentActions>
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedComment(comment);
                        setEditComment(comment.comment);
                      }}
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
                </>
              )}
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
  margin-vertical: 16px;
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
