import { AxiosRequestConfig } from "axios";

export function axiosGetColors(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/warnamobil",
  };
}

export function axiosGetColor(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/warnamobil/${id}`,
  };
}

export function axiosPostColor(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/warnamobil",
  };
}

export function axiosUpdateColor(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/warnamobil/${id}`,
  };
}

export function axiosDeleteColor(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/warnamobil/${id}`,
  };
}
