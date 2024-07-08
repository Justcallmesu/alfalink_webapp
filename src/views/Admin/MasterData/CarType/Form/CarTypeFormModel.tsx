import {
  axiosGetCarType,
  axiosPostCarType,
  axiosUpdateCarType,
} from "@/lib/axios-config/MasterData/CarType";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CarTypeModel,
  CreateCarTypeDto,
} from "@/lib/models/MasterData/CarType";
import { ResponseModel } from "@/lib/models/base";
import { carTypeKeys } from "@/lib/queryKeys/MasterData/CarType";
import React from "react";
import { useParams } from "react-router-dom";

function useCarTypeFormModel() {
  const { id } = useParams();

  /**
   * Get Data
   */
  const { data: carTypeData } = useGetAxios<ResponseModel<CarTypeModel>>({
    config: axiosGetCarType(id!),
    queryKey: carTypeKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post Or Update Data
   */
  const { mutate: mutateCarType } = useAxiosPostPatch<CreateCarTypeDto>({
    config: (id) => {
      if (id) return axiosUpdateCarType(id);
      return axiosPostCarType();
    },
    invalidateQueryKey: carTypeKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    carTypeData,
    mutateCarType,
    id,
  };
}

export default useCarTypeFormModel;
