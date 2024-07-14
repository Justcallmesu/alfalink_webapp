import {
  axiosDeleteFuelType,
  axiosGetFuelTypes,
} from "@/lib/axios-config/MasterData/FuelType";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import {
  FuelTypeModel,
  FuelTypeQueryDto,
} from "@/lib/models/MasterData/FuelType";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { fuelTypeKeys } from "@/lib/queryKeys/MasterData/FuelType";
import { useState } from "react";

function useFuelTypeIndexModel() {
  const [fuelTypeQuery, setFuelTypeQuery] = useState<FuelTypeQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: fuelTypeData,
    isFetching: isFuelTypeFetching,
    refetch: fuelTypeRefetch,
  } = useGetAxios<PaginationModel<FuelTypeModel>>({
    config: axiosGetFuelTypes(),
    queryKey: fuelTypeKeys.lists(fuelTypeQuery).queryKey,
    queryParams: fuelTypeQuery,
  });

  const { mutate: mutateDeleteFuelType } = useAxiosDelete({
    config: (id?: string) => axiosDeleteFuelType(id!),
    invalidateQueryKey: fuelTypeKeys.lists(fuelTypeQuery).queryKey,
    invalidateType: "all",
  });

  return {
    fuelTypeQuery,
    setFuelTypeQuery,
    fuelTypeData,
    isFuelTypeFetching,
    fuelTypeRefetch,
    mutateDeleteFuelType,
  };
}

export default useFuelTypeIndexModel;
