import { AxiosRequestConfig } from "axios";

export function axiosGetPermissions(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/permissions",
  };
}
