import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const MainAxiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_API_URL as string,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
};

const api: AxiosInstance = axios.create(MainAxiosRequestConfig);

export default api;
