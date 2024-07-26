import { AxiosRequestConfig } from "axios";

export function axiosUpdatePassword(): AxiosRequestConfig {
  return {
    method: "PATCH",
    url: "/auth/update-password",
  };
}

export function axiosUpdateMe(): AxiosRequestConfig {
  return {
    method: "PUT",
    url: "/auth/updateme",
  };
}
