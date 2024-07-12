import {
  axiosDeleteCar,
  axiosGetCars,
  axiosUpdateCar,
  axiosUpdateStatusCar,
} from "@/lib/axios-config/car/Car";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CarModel,
  CarQueryDto,
  UpdateCarStatusDto,
} from "@/lib/models/Car/Car";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { carKeys } from "@/lib/queryKeys/car/Car";
import { useState } from "react";

export function useCarIndexModel() {
  const [carQuery, setCarQuery] = useState<CarQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: carData,
    refetch: carRefetech,
    isFetching: isCarFetching,
  } = useGetAxios<PaginationModel<CarModel>>({
    config: axiosGetCars(),
    queryKey: carKeys.lists(carQuery).queryKey,
    queryParams: carQuery,
  });

  const { mutate: mutateDeleteCar } = useAxiosDelete({
    config(id) {
      return axiosDeleteCar(id!);
    },
    invalidateQueryKey: carKeys.lists(carQuery).queryKey,
    invalidateType: "all",
  });

  const { mutate: mutateUpdateCarStatus } =
    useAxiosPostPatch<UpdateCarStatusDto>({
      config: (id) => axiosUpdateStatusCar(id!),
      invalidateQueryKey: carKeys.lists(carQuery).queryKey,
      invalidateType: "all",
    });

  return {
    setCarQuery,
    carData,
    carRefetech,
    isCarFetching,
    mutateDeleteCar,
    mutateUpdateCarStatus,
  };
}
