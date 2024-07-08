import {
  axiosDeleteCarBrand,
  axiosGetCarBrands,
} from "@/lib/axios-config/MasterData/CarBrand";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import {
  CarBrandModel,
  CarBrandQueryDto,
} from "@/lib/models/MasterData/CarBrand";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { carBrandKeys } from "@/lib/queryKeys/MasterData/CarBrand";
import React, { useState } from "react";

function useCarBrandIndexModel() {
  const [carBrandQuery, setCarBrandQuery] = useState<CarBrandQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Get Car Brands
   */
  const {
    data: carBrandData,
    refetch: refetchCarBrand,
    isFetching: isCarBrandFetching,
  } = useGetAxios<PaginationModel<CarBrandModel>>({
    config: axiosGetCarBrands(),
    queryKey: carBrandKeys.lists(carBrandQuery).queryKey,
    queryParams: carBrandQuery,
  });

  /**
   * Mutate Delete Car Brand
   */
  const { mutate: mutateDeleteCarBrand } = useAxiosDelete({
    config: (id) => axiosDeleteCarBrand(id!),
    invalidateQueryKey: carBrandKeys.lists(carBrandQuery).queryKey,
    invalidateType: "all",
  });

  return {
    carBrandData,
    refetchCarBrand,
    isCarBrandFetching,
    setCarBrandQuery,
    mutateDeleteCarBrand,
  };
}

export default useCarBrandIndexModel;
