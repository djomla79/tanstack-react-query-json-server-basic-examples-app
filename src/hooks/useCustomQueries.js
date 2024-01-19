import {
  useQuery,
  keepPreviousData,
  useInfiniteQuery,
  useQueries,
} from '@tanstack/react-query';
import {
  fetchUsers,
  fetchUserById,
  fetchNumbers,
  fetchNumbersByPage,
  fetchInfiniteNumbers,
  fetchProductsByProductId,
} from '../api';

export const useGetUsers = () => {
  return useQuery({ queryKey: ['users'], queryFn: fetchUsers });
};

export const useGetNumbers = () => {
  return useQuery({ queryKey: ['numbers'], queryFn: fetchNumbers });
};

export const useGetUserById = (userId) => {
  return useQuery({
    queryKey: ['user', { userId }],
    queryFn: async () => await fetchUserById(userId),
  });
};

export const useGetNumbersByPage = (page) => {
  return useQuery({
    queryKey: ['numbers', page],
    queryFn: async () => await fetchNumbersByPage(page),
    placeholderData: keepPreviousData,
  });
};

export const useGetInfiniteNumbers = () => {
  return useInfiniteQuery({
    queryKey: ['numbers'],
    queryFn: fetchInfiniteNumbers,
    initialPageParam: 0,

    maxPages: 2,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage?.data?.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
};

export const useGetDynamicParallelQueries = (userIds) => {
  return useQueries({
    queries: (userIds ?? []).map((id) => {
      return {
        queryKey: ['user', id],
        queryFn: () => fetchUserById(id),
      };
    }),
  });
};

export const useGetProductsByProductId = (productId) => {
  return useQuery({
    queryKey: ['products', productId],
    queryFn: () => fetchProductsByProductId(productId),
    enabled: !!productId,
  });
};
