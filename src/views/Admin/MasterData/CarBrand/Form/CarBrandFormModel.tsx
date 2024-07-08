import {
  axiosGetCarBrand,
  axiosPostCarBrand,
  axiosUpdateCarBrand,
} from "@/lib/axios-config/MasterData/CarBrand";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CarBrandModel,
  CreateCarBrandDto,
} from "@/lib/models/MasterData/CarBrand";
import { ResponseModel } from "@/lib/models/base";
import { carBrandKeys } from "@/lib/queryKeys/MasterData/CarBrand";
import React from "react";
import { useParams } from "react-router-dom";

function useCarBrandFormModel() {
  const { id } = useParams();

  /**
   * Get Car Brand
   */
  const { data: carBrandData } = useGetAxios<ResponseModel<CarBrandModel>>({
    config: axiosGetCarBrand(id!),
    queryKey: carBrandKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post Patch Car Brand
   */
  const { mutate: mutateCarBrand } = useAxiosPostPatch<CreateCarBrandDto>({
    config: (id) => {
      if (id) return axiosUpdateCarBrand(id);
      return axiosPostCarBrand();
    },
    invalidateQueryKey: carBrandKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    carBrandData,
    mutateCarBrand,
  };
}

export default useCarBrandFormModel;
