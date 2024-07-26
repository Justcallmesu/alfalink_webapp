import { AxiosRequestConfig } from "axios";

export function axiosGetBodyStyles(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "bodystyle",
  };
}

export function axiosGetBodyStyle(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `bodystyle/${id}`,
  };
}

export function axiosPostBodyStyle(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "bodystyle",
  };
}

export function axiosUpdateBodyStyle(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `bodystyle/${id}`,
  };
}

export function axiosDeleteBodyStyle(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `bodystyle/${id}`,
  };
}
