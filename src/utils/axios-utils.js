import axios from 'axios';

const client = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const request = async ({
  url,
  // method,
  // token,
  // data,
  // params,
  ...otherOptions
}) => {
  // if (token) {
  //   client.defaults.headers.common.Authorization = `Bearer ${token}`;
  // }

  try {
    const response = await client({
      url,
      // method,
      // data,
      // params,
      ...otherOptions,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
