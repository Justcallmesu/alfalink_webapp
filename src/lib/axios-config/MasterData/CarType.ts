import { AxiosRequestConfig } from "axios";

export function getCarTypes(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/tipemobil",
  };
}

export function getCarType(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/tipemobil/${id}`,
  };
}

export function postCarType(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/tipemobil",
  };
}

export function updateCarType(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/tipemobil/${id}`,
  };
}

export function deleteCarType(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/tipemobil/${id}`,
  };
}
