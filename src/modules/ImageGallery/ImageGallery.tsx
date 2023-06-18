import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useMemo, useRef, useState} from 'react';
import {ImageDto} from '../../constants/types';
import {Error, ErrorContainer} from './components/Error';
import {ImageModal} from './components/ImageModal';
import {ImagesList} from './components/ImagesList';
import {Loader, LoaderContainer} from './components/Loader';
import {useGetImages} from './hooks/useGetImages';
import {useImageComments} from './hooks/useImageComments';

export const ImageGallery: React.FC = () => {
  const {
    combinedData,
    isLoading,
    isError,
    error,
    isFetching,
    handleLoadMore,
    handleRefresh,
  } = useGetImages();

  const [selectedImage, setSelectedImage] = useState<ImageDto>();

  const {
    newComment,
    setNewComment,
    editComment,
    setEditComment,
    selectedComment,
    setSelectedComment,
    handleSubmitAddComment,
    handleSubmitEditComment,
    handleSubmitDeleteComment,
  } = useImageComments({selectedImage});

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['90%'], []);

  const openModal = () => {
    // TS Ignore necessary for bottomSheet ref method
    // @ts-ignore
    bottomSheetModalRef?.current?.present &&
      // @ts-ignore
      bottomSheetModalRef.current.present();
  };

  const handleImagePress = (img: ImageDto) => {
    setSelectedImage(img);
    openModal();
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size="large" color="gray" />
      </LoaderContainer>
    );
  }

  if (isError) {
    return (
      <ErrorContainer>
        <Error message={error?.message} />
      </ErrorContainer>
    );
  }

  return (
    <BottomSheetModalProvider>
      <ImagesList
        data={combinedData}
        onPress={handleImagePress}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={isFetching}
        onRefresh={handleRefresh}
      />
      <ImageModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        selectedImage={selectedImage}
        selectedComment={selectedComment}
        setSelectedComment={setSelectedComment}
        newComment={newComment}
        setNewComment={setNewComment}
        editComment={editComment}
        setEditComment={setEditComment}
        handleSubmitAddComment={handleSubmitAddComment}
        handleSubmitEditComment={handleSubmitEditComment}
        handleSubmitDeleteComment={handleSubmitDeleteComment}
      />
    </BottomSheetModalProvider>
  );
};
