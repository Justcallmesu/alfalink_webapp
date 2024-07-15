import { AxiosRequestConfig } from "axios";

export function axiosGetCarBrands(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "merkmobil",
  };
}

export function axiosGetCarBrand(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `merkmobil/${id}`,
  };
}

export function axiosPostCarBrand(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "merkmobil",
  };
}

export function axiosUpdateCarBrand(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `merkmobil/${id}`,
  };
}

export function axiosDeleteCarBrand(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `merkmobil/${id}`,
  };
}
