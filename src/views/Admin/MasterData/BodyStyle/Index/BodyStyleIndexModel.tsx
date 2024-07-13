import {
  axiosDeleteBodyStyle,
  axiosGetBodyStyles,
} from "@/lib/axios-config/MasterData/BodyStyle";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import {
  BodyStyleModel,
  BodyStyleQueryDto,
} from "@/lib/models/MasterData/BodyStyle";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { bodyStyleKeys } from "@/lib/queryKeys/MasterData/BodyStyle";
import React, { useState } from "react";

function use1BodyStyleIndexModel() {
  const [bodyStyleQuery, setBodyStyleQuery] = useState<BodyStyleQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: bodyStyleData,
    isFetching: isBodyStyleFetching,
    refetch: bodyStyleRefetch,
  } = useGetAxios<PaginationModel<BodyStyleModel>>({
    config: axiosGetBodyStyles(),
    queryKey: bodyStyleKeys.lists(bodyStyleQuery).queryKey,
    queryParams: bodyStyleQuery,
  });

  const { mutate: mutateDeleteBodyStyle } = useAxiosDelete({
    config: (id?: string) => axiosDeleteBodyStyle(id!),
    invalidateQueryKey: bodyStyleKeys.lists(bodyStyleQuery).queryKey,
    invalidateType: "all",
  });

  return {
    bodyStyleQuery,
    setBodyStyleQuery,
    bodyStyleData,
    isBodyStyleFetching,
    bodyStyleRefetch,
    mutateDeleteBodyStyle,
  };
}

export default use1BodyStyleIndexModel;
