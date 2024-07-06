import api from "@/lib/instances/axios";
import {
  UseAxiosPostPatchProps,
  PostPatchDto,
} from "@/lib/models/globals/AxiosProps";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useAxiosPostPatch<T extends any>(
  props: UseAxiosPostPatchProps<T>
) {
  const {
    config,
    data,
    invalidateQueryKey,
    invalidateType,
    onSuccess,
    queryParams,
    removeQueryKey,
    removeType,
    redirect,
  } = props;

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const axiosPostPatch = async ({ data, id, id2 }: PostPatchDto<T>) => {
    let finalConfig = config();

    if (id) finalConfig = config(id);
    if (id2) finalConfig = config(id, id2);

    const response = await api<T>({
      ...finalConfig,
      data,
      params: queryParams,
    });

    return response.data;
  };

  const successFunction = async (data: any) => {
    if (removeQueryKey)
      queryClient.removeQueries({ queryKey: removeQueryKey, type: removeType });

    if (invalidateQueryKey)
      queryClient.invalidateQueries({
        queryKey: invalidateQueryKey,
        type: invalidateType,
      });

    if (redirect) navigate(redirect);
  };

  const mutation = useMutation({
    mutationFn: ({ data, id, id2 }: PostPatchDto<T>) => {
      return axiosPostPatch({ data, id, id2 });
    },
    onSuccess: (data) => successFunction(data),
  });

  return { ...mutation };
}
