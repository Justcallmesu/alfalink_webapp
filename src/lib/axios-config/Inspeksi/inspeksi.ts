import { AxiosRequestConfig } from "axios";

export function axiosGetInspections(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/inspeksi",
  };
}

export function axiosGetInspectionById(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/inspeksi/${id}`,
  };
}

export function axiosPostInspection(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/inspeksi",
  };
}

export function axiosPutInspection(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/inspeksi/${id}`,
  };
}

export function axiosDeleteInspection(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/inspeksi/${id}`,
  };
}
