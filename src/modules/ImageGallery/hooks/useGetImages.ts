import {useEffect, useState} from 'react';
import {ImageDto} from '../../../constants/types';
import {useGetImagesQuery} from '../../../services/queries';

interface UseGetImagesResult {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  combinedData: ImageDto[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  isFetching: boolean;
  isRefreshing: boolean;
  handleLoadMore: () => void;
  handleRefresh: () => void;
}

export const useGetImages = (): UseGetImagesResult => {
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

  const handleLoadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const handleRefresh = (): void => {
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
