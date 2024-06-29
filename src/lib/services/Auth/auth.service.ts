import api from "../../instances/axios";
import { AuthLoginDto, UserModel } from "../../models/Auth/auth";
import { ResponseModel } from "../../models/base";

export const login = async (loginData: AuthLoginDto) => {
  const response = await api.post<any>("/auth/login", loginData);
  return response.data;
};

export const getMe = async (): Promise<ResponseModel<UserModel>> => {
  const response = await api.get<any>("/auth/me");
  return response.data;
};

export const logout = async () => {
  const response = await api.get<any>("/auth/logout");
  return response.data;
};
