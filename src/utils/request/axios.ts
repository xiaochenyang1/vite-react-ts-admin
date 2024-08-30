// 封装axios

import axios from 'axios';
import { GlobalHOSTURL } from '@/utils/variable';
// console.log(GlobalHOSTURL.host, 'cnm');

const axiosInstance = axios.create({
    baseURL: GlobalHOSTURL.host, // 使用封装的 host 作为基础 URL
    timeout: 10000, // 设置超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 在发送请求之前做一些事情，比如添加 token
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data;
    },
    error => {
        // 处理响应错误
        return Promise.reject(error);
    }
);

export default axiosInstance;