import api from "@/lib/instances/axios";
import {
  UseAxiosPostPatchProps,
  PostPatchDto,
} from "@/lib/models/globals/AxiosProps";
import {
  ErrorResponse,
  ResponseData,
} from "@/lib/models/globals/ResponseModel";
import { notificationSystem } from "@/lib/notification-system/NotificationSystem";
import { NotificationSystemType } from "@/lib/notification-system/enum/NotificationSystemType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export function useAxiosPostPatch<T extends any>(
  props: UseAxiosPostPatchProps<T>
) {
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

  const successFunction = async (data: ResponseData<T>) => {
    if (removeQueryKey)
      queryClient.removeQueries({ queryKey: removeQueryKey, type: removeType });

    notificationSystem({
      message: data.message,
      notificationType: NotificationSystemType.SUCCESS,
      title: "Success",
    });

    if (invalidateQueryKey)
      queryClient.invalidateQueries({
        queryKey: invalidateQueryKey,
        type: invalidateType,
      });

    onSuccess?.();

    if (redirect) navigate(redirect);
  };

  const mutation = useMutation({
    mutationFn: ({ data, id, id2 }: PostPatchDto<T>) => {
      return axiosPostPatch({ data, id, id2 });
    },
    onSuccess: (data) => successFunction(data as ResponseData<T>),
    onError: (error: AxiosError) => {
      const errorResponse: ErrorResponse = error.response
        ?.data as ErrorResponse;
      errorFunction(errorResponse);
    },
  });

  return { ...mutation };
}
