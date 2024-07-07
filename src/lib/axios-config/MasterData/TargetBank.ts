import { AxiosRequestConfig } from "axios";

export function getTargetBanks(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/banktujuan",
  };
}

export function getTargetBank(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/banktujuan/${id}`,
  };
}

export function postTargetBank(): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/banktujuan",
  };
}

export function updateTargetBank(id: string): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/banktujuan/${id}`,
  };
}

export function deleteTargetBank(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/banktujuan/${id}`,
  };
}
