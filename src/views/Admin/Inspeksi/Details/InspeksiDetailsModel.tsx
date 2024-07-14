import {
  axiosDeleteInspection,
  axiosGetInspectionById,
  axiosPutInspectionStatus,
} from "@/lib/axios-config/Inspeksi/inspeksi";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { InspeksiModel } from "@/lib/models/Inspeksi/inspeksi";
import { ResponseData } from "@/lib/models/globals/ResponseModel";
import { inspeksiKeys } from "@/lib/queryKeys/inspeksi/InspeksiKeys";
import { Params, useParams } from "react-router-dom";

function useInspeksiDetailsModel() {
  const { id }: Params = useParams();

  /**
   * Get Inspection
   */
  const { data: inspectionData } = useGetAxios<ResponseData<InspeksiModel>>({
    config: axiosGetInspectionById(id!),
    queryKey: inspeksiKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  const { mutate: mutateDeleteInspection } = useAxiosDelete({
    config: (id) => axiosDeleteInspection(id!),
    invalidateQueryKey: inspeksiKeys.byId(id!).queryKey,
    invalidateType: "all",
  });

  const { mutate: mutateUpdateInspection } = useAxiosPostPatch({
    config: (id) => axiosPutInspectionStatus(id!),
    invalidateQueryKey: inspeksiKeys.byId(id!).queryKey,
    invalidateType: "all",
  });

  return {
    inspectionData,
    mutateDeleteInspection,
    mutateUpdateInspection,
  };
}

export default useInspeksiDetailsModel;
