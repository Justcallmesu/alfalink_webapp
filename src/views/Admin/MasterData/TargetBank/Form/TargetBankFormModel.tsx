import {
  axiosGetTargetBank,
  axiosPostTargetBank,
  axiosUpdateTargetBank,
} from "@/lib/axios-config/MasterData/TargetBank";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CreateTargetBankDto,
  TargetBankModel,
} from "@/lib/models/MasterData/TargetBank";
import { ResponseModel } from "@/lib/models/base";
import { targetBankKeys } from "@/lib/queryKeys/MasterData/TargetBank";
import React from "react";
import { useParams } from "react-router-dom";

function useTargetBankFormModel() {
  const { id } = useParams();

  /**
   * Get Data
   */
  const { data: targetBankData } = useGetAxios<ResponseModel<TargetBankModel>>({
    config: axiosGetTargetBank(id!),
    queryKey: targetBankKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post Or Update Data
   */
  const { mutate: mutateTargetBank } = useAxiosPostPatch<CreateTargetBankDto>({
    config: (id) => {
      if (id) return axiosUpdateTargetBank(id);
      return axiosPostTargetBank();
    },
    invalidateQueryKey: targetBankKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    targetBankData,
    mutateTargetBank,
    id,
  };
}

export default useTargetBankFormModel;
