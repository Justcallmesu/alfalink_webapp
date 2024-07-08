import {
  axiosDeleteCarType,
  axiosGetCarTypes,
} from "@/lib/axios-config/MasterData/CarType";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { CarTypeModel, CarTypeQueryDto } from "@/lib/models/MasterData/CarType";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { carTypeKeys } from "@/lib/queryKeys/MasterData/CarType";
import React, { useState } from "react";

function useCarTypeIndexModel() {
  const [carTypeQuery, setCarTypeQuery] = useState<CarTypeQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: carTypeData,
    isFetching: isCarTypeFetching,
    refetch: carTypeRefetch,
  } = useGetAxios<PaginationModel<CarTypeModel>>({
    config: axiosGetCarTypes(),
    queryKey: carTypeKeys.lists(carTypeQuery).queryKey,
    queryParams: carTypeQuery,
  });

  const { mutate: mutateDeleteCarType } = useAxiosDelete({
    config: (id?: string) => axiosDeleteCarType(id!),
    invalidateQueryKey: carTypeKeys.lists(carTypeQuery).queryKey,
    invalidateType: "all",
  });

  return {
    carTypeQuery,
    setCarTypeQuery,
    carTypeData,
    isCarTypeFetching,
    carTypeRefetch,
    mutateDeleteCarType,
  };
}

export default useCarTypeIndexModel;
