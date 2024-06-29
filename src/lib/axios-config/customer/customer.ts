import { AxiosRequestConfig } from "axios";

export function getAllCustomers(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/customer",
  };
}

export function getAllCustomer(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/customer/${id}`,
  };
}
