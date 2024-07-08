import { AxiosRequestConfig } from "axios";

export function axiosGetTargetBanks(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/banktujuan",
  };
}

export function axiosGetTargetBank(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/banktujuan/${id}`,
  };
}

export function axiosPostTargetBank(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/banktujuan",
  };
}

export function axiosUpdateTargetBank(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/banktujuan/${id}`,
  };
}

export function axiosDeleteTargetBank(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/banktujuan/${id}`,
  };
}
