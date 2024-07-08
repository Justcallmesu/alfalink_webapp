import {
  axiosGetCarModel,
  axiosPostCarModel,
  axiosUpdateCarModel,
} from "@/lib/axios-config/MasterData/CarModel";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CarModelModel,
  CreateCarModelDto,
} from "@/lib/models/MasterData/CarModel";
import { ResponseModel } from "@/lib/models/base";
import { carModelKeys } from "@/lib/queryKeys/MasterData/CarModel";
import React from "react";
import { useParams } from "react-router-dom";

function useCarModelFormModel() {
  const { id } = useParams();

  /**
   * Get Data
   */
  const { data: carModelData } = useGetAxios<ResponseModel<CarModelModel>>({
    config: axiosGetCarModel(id!),
    queryKey: carModelKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post Or Update Data
   */
  const { mutate: mutateCarModel } = useAxiosPostPatch<CreateCarModelDto>({
    config: (id) => {
      if (id) return axiosUpdateCarModel(id);
      return axiosPostCarModel();
    },
    invalidateQueryKey: carModelKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    carModelData,
    mutateCarModel,
    id,
  };
}

export default useCarModelFormModel;
