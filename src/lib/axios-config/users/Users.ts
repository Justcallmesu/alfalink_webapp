import { AxiosRequestConfig } from "axios";

export function axiosGetUsers(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/users",
  };
}

export function axiosGetUserById(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/users/${id}`,
  };
}

export function axiosCreateUser(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/users",
  };
}

export function axiosUpdateUser(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/users/${id}`,
  };
}

export function axiosDeleteUser(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/users/${id}`,
  };
}
