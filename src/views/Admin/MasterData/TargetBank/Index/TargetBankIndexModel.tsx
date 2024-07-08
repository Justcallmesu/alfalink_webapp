import {
  axiosDeleteTargetBank,
  axiosGetTargetBanks,
} from "@/lib/axios-config/MasterData/TargetBank";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import {
  TargetBankModel,
  TargetBankQueryDto,
} from "@/lib/models/MasterData/TargetBank";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { targetBankKeys } from "@/lib/queryKeys/MasterData/TargetBank";
import React, { useState } from "react";

function useTargetBankIndexModel() {
  const [targetBankQuery, settargetBankQuery] = useState<TargetBankQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: targetBankData,
    isFetching: isTargetBankFetching,
    refetch: targetBankRefetch,
  } = useGetAxios<PaginationModel<TargetBankModel>>({
    config: axiosGetTargetBanks(),
    queryKey: targetBankKeys.lists(targetBankQuery).queryKey,
    queryParams: targetBankQuery,
  });

  const { mutate: mutateDeleteTargetBank } = useAxiosDelete({
    config: (id?: string) => axiosDeleteTargetBank(id!),
    invalidateQueryKey: targetBankKeys.lists(targetBankQuery).queryKey,
    invalidateType: "all",
  });

  return {
    targetBankQuery,
    settargetBankQuery,
    targetBankData,
    isTargetBankFetching,
    targetBankRefetch,
    mutateDeleteTargetBank,
  };
}

export default useTargetBankIndexModel;
