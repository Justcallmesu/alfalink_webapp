import { AxiosRequestConfig } from "axios";

export function getColors(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/warnamobil",
  };
}

export function getColor(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/warnamobil/${id}`,
  };
}

export function postColor(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/warnamobil",
  };
}

export function updateColor(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/warnamobil/${id}`,
  };
}

export function deleteColor(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/warnamobil/${id}`,
  };
}
