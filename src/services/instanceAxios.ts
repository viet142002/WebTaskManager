import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_PUBLIC_API_URL;

const instance = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
}); 

instance.interceptors.response.use(undefined, (error) => {
    // TODO: SỬ check lỗi global ở đay như token hết hạn, reset token,...
    return error;
})


export default instance;