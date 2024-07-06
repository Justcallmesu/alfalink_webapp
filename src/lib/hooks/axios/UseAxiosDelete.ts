import api from "@/lib/instances/axios";
import { UseAxiosDeleteProps } from "@/lib/models/globals/AxiosProps";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteDto } from "@/lib/models/globals/AxiosProps";
import { useNavigate } from "react-router-dom";

export function useAxiosDelete(props: UseAxiosDeleteProps) {
  const {
    config,
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

  const axiosDelete = async ({ id, id2 }: DeleteDto) => {
    let finalConfig = config();

    if (id) finalConfig = config(id);
    if (id2) finalConfig = config(id, id2);

    const response = await api({
      ...finalConfig,
      params: queryParams,
    });

    return response.data;
  };

  const onSuccessHandler = () => {
    if (removeQueryKey) {
      queryClient.removeQueries({ queryKey: removeQueryKey, type: removeType });
    }

    if (invalidateQueryKey) {
      queryClient.invalidateQueries({
        queryKey: invalidateQueryKey,
        type: invalidateType,
      });
    }

    if (redirect) navigate(redirect);
  };

  const mutation = useMutation({
    mutationFn: ({ id2, id }: DeleteDto) => {
      return axiosDelete({ id, id2 });
    },
    onSuccess: onSuccessHandler,
  });

  return { ...mutation };
}
