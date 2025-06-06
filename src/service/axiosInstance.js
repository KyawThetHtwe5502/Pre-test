import axios from "axios";
import { getAccessToken, getRefreshToken } from "../utils/tokenUtils";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_URL,
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
withCredentials : true
});

axiosInstance.interceptors.request.use((config) => {
    const token = getAccessToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                                const refreshToken = getRefreshToken();
                const res = await axiosInstance.post(`/v3/user/refresh_token`,{ accessToken: refreshToken },{withCredentials : true});
                const newAccessToken = res.data.accessToken;
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);

            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;