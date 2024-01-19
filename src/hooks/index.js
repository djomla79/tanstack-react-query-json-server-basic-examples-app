import {
  useGetUsers,
  useGetUserById,
  useGetNumbers,
  useGetNumbersByPage,
  useGetInfiniteNumbers,
  useGetDynamicParallelQueries,
  useGetProductsByProductId,
} from '../hooks/useCustomQueries';
import { useAddUser } from '../hooks/useCustomMutations';
import useInput from './useInput';

export default useInput;
export {
  useAddUser,
  useGetUsers,
  useGetUserById,
  useGetNumbers,
  useGetNumbersByPage,
  useGetInfiniteNumbers,
  useGetDynamicParallelQueries,
  useGetProductsByProductId,
};
