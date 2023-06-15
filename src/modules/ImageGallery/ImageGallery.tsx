import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native"
import { AppImage } from "../../constants/api-types"
import { useGetImagesQuery } from "../../services/queries";
import { useEffect, useState } from "react";

export const ImageGallery: React.FC = () => {
    const [page, setPage] = useState(0);
    const { data, isLoading, isError, error, isFetching } = useGetImagesQuery(page);

    useEffect(() => {
        setPage(1)
    }, [])

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    if (isLoading) {
        return <View><ActivityIndicator size={'large'} color={'red'} /></View>;
    }

    if (isError) {
        return <View><Text>{error?.message}</Text></View>;
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Image source={{ uri: item.fullImageUrl }} style={styles.image} />
                </View>
            )}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            refreshing={isFetching}
            onRefresh={() => setPage(1)}
            contentContainerStyle={styles.flatListContent}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: 'red',
    },
    itemContainer: {
        marginBottom: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    flatListContent: {
        flexGrow: 1,
        padding: 16,
    },
});