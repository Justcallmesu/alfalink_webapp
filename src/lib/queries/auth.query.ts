import {
  QueryKey,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { getMe, login } from "@/lib/services/Auth/auth.service";
import { AuthLoginDto, UserModel } from "../models/Auth/auth";

export const useLoginQuery = () => {
  return useMutation({
    mutationFn: async (data: AuthLoginDto) => {
      const response = await login(data);
      return response.data;
    },
  });
};

export const useGetMe = (
  queryKey: QueryKey,
  enabled: boolean
): UseQueryResult<UserModel> => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await getMe();
      return response.data;
    },
    enabled,
  });
};
