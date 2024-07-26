import { AxiosRequestConfig } from "axios";

export function axiosGetCars(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "mobil",
  };
}

export function axiosGetCar(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `mobil/${id}`,
  };
}

export function axiosPostCar(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "mobil",
  };
}

export function axiosUpdateCar(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `mobil/${id}`,
  };
}

export function axiosUpdateStatusCar(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `mobil/${id}/status`,
  };
}

export function axiosDeleteCar(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `mobil/${id}`,
  };
}
