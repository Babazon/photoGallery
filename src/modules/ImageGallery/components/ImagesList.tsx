import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImageDto} from '../../../constants/types';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');
const itemWidth = width;
const itemHeight = width / 2;

const ItemContainer = styled(View)`
  width: ${itemWidth}px;
  height: ${itemHeight}px;
  margin-bottom: 16px;
`;

const StyledImage = styled(Image)`
  flex: 1;
  resize-mode: cover;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-vertical: 8px;
`;

const Description = styled(Text)`
  font-size: 14px;
  margin-bottom: 8px;
`;

interface ImageItemProps {
  item: ImageDto;
  onPress: (img: ImageDto) => void;
}

const ImageItem = ({item, onPress}: ImageItemProps) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <ItemContainer>
      <StyledImage source={{uri: item.url}} />
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </ItemContainer>
  </TouchableOpacity>
);

interface ImagesListProps {
  data: ImageDto[];
  onPress: (img: ImageDto) => void;
  onEndReached: () => void;
  onEndReachedThreshold: number;
  refreshing: boolean;
  onRefresh: () => void;
}

export const ImagesList = ({
  data,
  onPress,
  onEndReached,
  onEndReachedThreshold,
  refreshing,
  onRefresh,
}: ImagesListProps) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => `${item.id}_${index}`}
    renderItem={({item}) => <ImageItem item={item} onPress={onPress} />}
    onEndReached={onEndReached}
    onEndReachedThreshold={onEndReachedThreshold}
    refreshing={refreshing}
    onRefresh={onRefresh}
    contentContainerStyle={styles.contentContainerStyle}
  />
);

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
