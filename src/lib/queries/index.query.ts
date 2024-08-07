import { QueryKey, useQuery } from "@tanstack/react-query";
import api from "../instances/axios";

export const useGet = <T>(queryKey: QueryKey, url: string) => {
  return useQuery({
    queryKey,
    async queryFn() {
      return await api.get<T>(url);
    },
  });
};
