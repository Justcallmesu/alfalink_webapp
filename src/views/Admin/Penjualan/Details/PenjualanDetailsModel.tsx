import {
  axiosDeletePenjualan,
  axiosGetPenjualanById,
  axiosUpdatePenjualanStatus,
} from "@/lib/axios-config/penjualan/Penjualan";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { ResponseData } from "@/lib/models/globals/ResponseModel";
import { PenjualanModel } from "@/lib/models/penjualan/Penjualan";
import { penjualanKeys } from "@/lib/queryKeys/Penjualan/Penjualan";
import { useParams } from "react-router-dom";

function usePenjualanDetailsModel() {
  const { id } = useParams();

  /**
   * Get Customer
   */
  const { data: penjualanData, isFetching: isPenjualanFetching } = useGetAxios<
    ResponseData<PenjualanModel>
  >({
    config: axiosGetPenjualanById(id!),
    queryKey: penjualanKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Delete Customer
   */
  const { mutate: mutateDeletePenjualan } = useAxiosDelete({
    config: (id) => axiosDeletePenjualan(id!),
    invalidateQueryKey: penjualanKeys.byId(id!).queryKey,
    invalidateType: "all",
    redirect: "../",
  });

  const { mutate: mutateUpdatePenjualanStatus } = useAxiosPostPatch({
    config: (id) => axiosUpdatePenjualanStatus(id!),
    invalidateQueryKey: penjualanKeys.byId(id!).queryKey,
    invalidateType: "all",
  });

  return {
    penjualanData,
    isPenjualanFetching,
    mutateDeletePenjualan,
    mutateUpdatePenjualanStatus,
  };
}

export default usePenjualanDetailsModel;
