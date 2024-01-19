import { request } from '../utils/axios-utils';
import { USERS_PATH, NUMBERS_PATH, PRODUCTS_PATH } from '../constants';

export const fetchUsers = async () => {
  return await request({ url: `/${USERS_PATH}` });
};

export const fetchNumbers = async () => {
  return await request({ url: `/${NUMBERS_PATH}` });
};

export const fetchUserById = async (userId) => {
  return await request({ url: `/${USERS_PATH}/${userId}` });
};

export const addUser = async (user) => {
  return await request({ url: `/${USERS_PATH}`, method: 'post', data: user });
};

export const fetchNumbersByPage = async (page = 0) => {
  return await request({ url: `/${NUMBERS_PATH}?_page=${page}&_limit=2` });
};

export const fetchInfiniteNumbers = async ({ pageParam }) => {
  return await request({
    url: `/${NUMBERS_PATH}?_page=${pageParam + 1}&_limit=2`,
  });
};

export const fetchProductsByProductId = async (productId) => {
  return await request({ url: `${PRODUCTS_PATH}/${productId}` });
};
