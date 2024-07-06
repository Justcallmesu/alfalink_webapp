import { AxiosRequestConfig } from "axios";

export function getAllCustomers(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/customer",
  };
}

export function getCustomer(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/customer/${id}`,
  };
}

export function postCustomer(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/customer",
  };
}

export function updateCustomer(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/customer/${id}`,
  };
}

export function deleteCustomer(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/customer/${id}`,
  };
}
