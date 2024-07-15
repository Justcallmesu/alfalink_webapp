import {
  axiosDeleteCar,
  axiosGetCar,
  axiosUpdateStatusCar,
} from "@/lib/axios-config/car/Car";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { CarModel, UpdateCarStatusDto } from "@/lib/models/Car/Car";
import { ResponseModel } from "@/lib/models/base";
import { carKeys } from "@/lib/queryKeys/car/Car";
import { useParams } from "react-router-dom";

function useCarDetailsModels() {
  /**
   * Params
   */
  const { id } = useParams();
  /**
   * Get Car
   */
  const {
    data: carData,
    isFetching: isCarFetching,
    refetch: refetchCar,
  } = useGetAxios<ResponseModel<CarModel>>({
    config: axiosGetCar(id!),
    queryKey: carKeys.byId(id!).queryKey,
  });

  /**
   * Delete Car
   */
  const { mutate: mutateDeleteCar } = useAxiosDelete({
    config: (id) => axiosDeleteCar(id!),
    invalidateQueryKey: carKeys.byId(id!).queryKey,
    invalidateType: "all",
    redirect: "../",
  });

  const { mutate: mutateUpdateCarStatus } =
    useAxiosPostPatch<UpdateCarStatusDto>({
      config: (id) => axiosUpdateStatusCar(id!),
      invalidateQueryKey: carKeys.byId(id!).queryKey,
      invalidateType: "all",
    });

  return {
    carData,
    isCarFetching,
    refetchCar,
    mutateDeleteCar,
    mutateUpdateCarStatus,
  };
}

export default useCarDetailsModels;
