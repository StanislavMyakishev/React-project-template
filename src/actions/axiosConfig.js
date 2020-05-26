import { default as axiosBase } from 'axios';

export const axios = axiosBase.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 20000,
});
