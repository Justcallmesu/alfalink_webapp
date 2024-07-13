import {
  axiosDeleteInspection,
  axiosGetInspections,
  axiosPutInspection,
} from "@/lib/axios-config/Inspeksi/inspeksi";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  InspeksiModel,
  InspeksiQueryDto,
} from "@/lib/models/Inspeksi/inspeksi";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { inspeksiKeys } from "@/lib/queryKeys/inspeksi/InspeksiKeys";
import React, { useState } from "react";

function useInspeksiIndexModel() {
  const [inspectionQuery, setInspectionQuery] = useState<InspeksiQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: InspectionsData,
    isFetching: isInspectionsFetching,
    refetch: refetchInspections,
  } = useGetAxios<PaginationModel<InspeksiModel>>({
    config: axiosGetInspections(),
    queryKey: inspeksiKeys.lists(inspectionQuery).queryKey,
    queryParams: inspectionQuery,
  });

  const { mutate: mutateDeleteInspection } = useAxiosDelete({
    config: (id) => axiosDeleteInspection(id!),
    invalidateQueryKey: inspeksiKeys.lists(inspectionQuery).queryKey,
    invalidateType: "all",
  });

  const { mutate: mutateUpdateInspection } = useAxiosPostPatch({
    config: (id) => axiosPutInspection(id!),
    invalidateQueryKey: inspeksiKeys.lists(inspectionQuery).queryKey,
    invalidateType: "all",
  });

  return {
    inspectionQuery,
    setInspectionQuery,
    InspectionsData,
    isInspectionsFetching,
    refetchInspections,
    mutateDeleteInspection,
    mutateUpdateInspection,
  };
}

export default useInspeksiIndexModel;
