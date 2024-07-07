import { AxiosRequestConfig } from "axios";

export function axiosGetFuelTypes(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/jenisbahanbakar",
  };
}

export function axiosGetFuelType(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/jenisbahanbakar/${id}`,
  };
}

export function axiosPostFuelType(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/jenisbahanbakar",
  };
}

export function axiosUpdateFuelType(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/jenisbahanbakar/${id}`,
  };
}

export function axiosDeleteFuelType(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/jenisbahanbakar/${id}`,
  };
}
