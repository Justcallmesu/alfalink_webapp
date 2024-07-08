import { AxiosRequestConfig } from "axios";

export function axiosGetCarTypes(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/tipemobil",
  };
}

export function axiosGetCarType(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/tipemobil/${id}`,
  };
}

export function axiosPostCarType(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/tipemobil",
  };
}

export function axiosUpdateCarType(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/tipemobil/${id}`,
  };
}

export function axiosDeleteCarType(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/tipemobil/${id}`,
  };
}
