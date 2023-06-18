import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View, Dimensions, ImageBackground, Button } from 'react-native';
import { useGetImages } from './hooks/useGetImages';
import { ImageDto } from '../../constants/types';
import React, { useMemo } from 'react';

const { width } = Dimensions.get('window');
const itemWidth = width;
const itemHeight = width / 2;
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
  
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
  
    if (isError) {
      return (
        <View style={styles.errorContainer}>
          <Text>{error?.message}</Text>
        </View>
      );
    }
  
    return (
      <FlatList
        data={combinedData}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.title}>{item.id}. {item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={isFetching}
        onRefresh={handleRefresh}
        contentContainerStyle={styles.flatListContent}
      />
    );
  };
  
  const styles = StyleSheet.create({
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemContainer: {
      width: itemWidth,
      height: itemHeight,
      marginBottom: 16,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    description: {
      fontSize: 14,
      marginBottom: 8,
    },
    flatListContent: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 16,
    },
  });