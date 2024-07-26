import api from "@/lib/instances/axios";
import { UseAxiosDeleteProps } from "@/lib/models/globals/AxiosProps";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteDto } from "@/lib/models/globals/AxiosProps";
import { useNavigate } from "react-router-dom";
import { notificationSystem } from "@/lib/notification-system/NotificationSystem";
import { NotificationSystemType } from "@/lib/notification-system/enum/NotificationSystemType";
import { ErrorResponse } from "@/lib/models/globals/ResponseModel";
import { AxiosError } from "axios";

export function useAxiosDelete(props: UseAxiosDeleteProps) {
  const {
    config,
    invalidateQueryKey,
    invalidateType,
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

  const errorFunction = (error: ErrorResponse) => {
    console.log(error);
    if (Array.isArray(error.message)) {
      error.message.forEach((message) => {
        notificationSystem({
          message: message,
          notificationType: NotificationSystemType.ERROR,
          title: "Error",
        });
      });
      return;
    }

    notificationSystem({
      message: error.message,
      notificationType: NotificationSystemType.ERROR,
      title: "Error",
    });
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

    notificationSystem({
      message: "Success",
      notificationType: NotificationSystemType.SUCCESS,
      title: "Data Berhasil Dihapus",
    });

    if (redirect) navigate(redirect);
  };

  const mutation = useMutation({
    mutationFn: ({ id2, id }: DeleteDto) => {
      return axiosDelete({ id, id2 });
    },
    onSuccess: onSuccessHandler,
    onError: (error: AxiosError) => {
      const errorResponse: ErrorResponse = error.response
        ?.data as ErrorResponse;
      errorFunction(errorResponse);
    },
  });

  return { ...mutation };
}
