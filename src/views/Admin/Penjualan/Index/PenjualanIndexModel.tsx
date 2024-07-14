import {
  axiosDeletePenjualan,
  axiosGetPenjualan,
  axiosUpdatePenjualanStatus,
} from "@/lib/axios-config/penjualan/Penjualan";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import {
  PenjualanModel,
  PenjualanQueryDto,
} from "@/lib/models/penjualan/Penjualan";
import { penjualanKeys } from "@/lib/queryKeys/Penjualan/Penjualan";
import React, { useState } from "react";

function usePenjualanIndexModel() {
  const [penjualanQuery, setPenjualanQuery] = useState<PenjualanQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: penjualanData,
    isFetching: isPenjualanFetching,
    refetch: refetchPenjualan,
  } = useGetAxios<PaginationModel<PenjualanModel>>({
    config: axiosGetPenjualan(),
    queryKey: penjualanKeys.lists(penjualanQuery).queryKey,
    queryParams: penjualanQuery,
  });

  const { mutate: mutateDeletePenjualan } = useAxiosDelete({
    config: (id) => axiosDeletePenjualan(id!),
    invalidateQueryKey: penjualanKeys.lists(penjualanQuery).queryKey,
    invalidateType: "all",
  });

  const { mutate: mutateUpdatePenjualanStatus } = useAxiosPostPatch({
    config: (id) => axiosUpdatePenjualanStatus(id!),
    invalidateQueryKey: penjualanKeys.lists(penjualanQuery).queryKey,
    invalidateType: "all",
  });

  return {
    penjualanQuery,
    setPenjualanQuery,
    penjualanData,
    isPenjualanFetching,
    refetchPenjualan,
    mutateDeletePenjualan,
    mutateUpdatePenjualanStatus,
  };
}

export default usePenjualanIndexModel;
