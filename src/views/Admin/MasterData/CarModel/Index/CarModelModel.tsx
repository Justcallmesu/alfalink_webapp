import {
  axiosDeleteCarModel,
  axiosGetCarModels,
} from "@/lib/axios-config/MasterData/CarModel";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import {
  CarModelModel,
  CarModelQueryDto,
} from "@/lib/models/MasterData/CarModel";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { carModelKeys } from "@/lib/queryKeys/MasterData/CarModel";
import { useState } from "react";

function useCarModelModel() {
  const [carModelQuery, setCarModelQuery] = useState<CarModelQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: carModelData,
    isFetching: isCarModelFetching,
    refetch: carModelRefetch,
  } = useGetAxios<PaginationModel<CarModelModel>>({
    config: axiosGetCarModels(),
    queryKey: carModelKeys.lists(carModelQuery).queryKey,
    queryParams: carModelQuery,
  });

  const { mutate: mutateDeleteCarModel } = useAxiosDelete({
    config: (id?: string) => axiosDeleteCarModel(id!),
    invalidateQueryKey: carModelKeys.lists(carModelQuery).queryKey,
    invalidateType: "all",
  });

  return {
    carModelQuery,
    setCarModelQuery,
    carModelData,
    isCarModelFetching,
    carModelRefetch,
    mutateDeleteCarModel,
  };
}

export default useCarModelModel;
