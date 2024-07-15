import { AxiosRequestConfig } from "axios";

export function axiosGetCarModels(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "modelmobil",
  };
}

export function axiosGetCarModel(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `modelmobil/${id}`,
  };
}

export function axiosPostCarModel(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "modelmobil",
  };
}

export function axiosUpdateCarModel(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `modelmobil/${id}`,
  };
}

export function axiosDeleteCarModel(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `modelmobil/${id}`,
  };
}
