import {
  axiosDeleteColor,
  axiosGetColors,
} from "@/lib/axios-config/MasterData/Color";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { ColorModel, ColorQueryDto } from "@/lib/models/MasterData/Color";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import { colorKeys } from "@/lib/queryKeys/MasterData/Color";
import React, { useState } from "react";

function useColorIndexModel() {
  const [colorQuery, setcolorQuery] = useState<ColorQueryDto>({
    page: 1,
    limit: 10,
  });

  const {
    data: colorData,
    isFetching: isColorFetching,
    refetch: colorRefetch,
  } = useGetAxios<PaginationModel<ColorModel>>({
    config: axiosGetColors(),
    queryKey: colorKeys.lists(colorQuery).queryKey,
    queryParams: colorQuery,
  });

  const { mutate: mutateDeleteColor } = useAxiosDelete({
    config: (id?: string) => axiosDeleteColor(id!),
    invalidateQueryKey: colorKeys.lists(colorQuery).queryKey,
    invalidateType: "all",
  });

  return {
    colorQuery,
    setcolorQuery,
    colorData,
    isColorFetching,
    colorRefetch,
    mutateDeleteColor,
  };
}

export default useColorIndexModel;
