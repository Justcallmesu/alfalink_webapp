import { AxiosRequestConfig } from "axios";

export function axiosGetPenjualan(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/penjualan",
  };
}

export function axiosGetPenjualanById(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/penjualan/${id}`,
  };
}

export function axiosPostPenjualan(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/penjualan",
  };
}

export function axiosUpdatePenjualan(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/penjualan/${id}`,
  };
}

export function axiosUpdatePenjualanStatus(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/penjualan/${id}/status`,
  };
}

export function axiosDeletePenjualan(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/penjualan/${id}`,
  };
}
