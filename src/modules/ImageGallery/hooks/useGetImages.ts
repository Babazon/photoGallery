import {useEffect, useState} from 'react';
import {ImageDto} from '../../../constants/types';
import {useGetImagesQuery} from '../../../services/queries';

export const useGetImages = () => {
  const [page, setPage] = useState(1);
  const {data, isLoading, isError, error, isFetching} = useGetImagesQuery(page);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [combinedData, setCombinedData] = useState<ImageDto[]>([]);

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    if (data) {
      if (page === 1) {
        setCombinedData(data);
      } else {
        setCombinedData(prevData => [...prevData, ...data]);
      }
    }
  }, [data, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setPage(1);
  };

  useEffect(() => {
    if (!isFetching && isRefreshing) {
      setIsRefreshing(false);
    }
  }, [isFetching, isRefreshing]);

  return {
    page,
    setPage,
    combinedData,
    isLoading,
    isError,
    error,
    isFetching,
    isRefreshing,
    handleLoadMore,
    handleRefresh,
  };
};
