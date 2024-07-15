import { AxiosRequestConfig } from "axios";

export function axiosGetRoles(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/roles",
  };
}

export function axiosGetRoleById(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/roles/${id}`,
  };
}

export function axiosCreateRole(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/roles",
  };
}

export function axiosUpdateRole(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/roles/${id}`,
  };
}

export function axiosDeleteRole(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/roles/${id}`,
  };
}
