import {axiosPostBodyStyle, 
  axiosGetBodyStyle,
  axiosUpdateBodyStyle,
} from "@/lib/axios-config/MasterData/BodyStyle";
import {
  axiosGetCarType,
  axiosPostCarType,
  axiosUpdateCarType,
} from "@/lib/axios-config/MasterData/CarType";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  BodyStyleModel,
  CreateBodyStyleDto,
} from "@/lib/models/MasterData/BodyStyle";
import {
  CarTypeModel,
  CreateCarTypeDto,
} from "@/lib/models/MasterData/CarType";
import { ResponseModel } from "@/lib/models/base";
import { bodyStyleKeys } from "@/lib/queryKeys/MasterData/BodyStyle";
import React from "react";
import { useParams } from "react-router-dom";

function useBodyStyleFormModel() {
  const { id } = useParams();

  /**
   * Get Data
   */
  const { data: bodyStyleData } = useGetAxios<ResponseModel<BodyStyleModel>>({
    config: axiosGetBodyStyle(id!),
    queryKey: bodyStyleKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post Or Update Data
   */
  const { mutate: mutateBodyStyle } = useAxiosPostPatch<CreateBodyStyleDto>({
    config: (id) => {
      if (id) return axiosUpdateBodyStyle(id);
      return axiosPostBodyStyle();
    },
    invalidateQueryKey: bodyStyleKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    bodyStyleData,
    mutateBodyStyle,
    id,
  };
}

export default useBodyStyleFormModel;
