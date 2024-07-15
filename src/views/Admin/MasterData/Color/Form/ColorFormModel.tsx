import {
  axiosGetColor,
  axiosPostColor,
  axiosUpdateColor,
} from "@/lib/axios-config/MasterData/Color";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CarTypeModel,
  CreateCarTypeDto,
} from "@/lib/models/MasterData/CarType";
import { ResponseModel } from "@/lib/models/base";
import { colorKeys } from "@/lib/queryKeys/MasterData/Color";
import { useParams } from "react-router-dom";

function useColorFormModel() {
  const { id } = useParams();

  /**
   * Get Data
   */
  const { data: colorData } = useGetAxios<ResponseModel<CarTypeModel>>({
    config: axiosGetColor(id!),
    queryKey: colorKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post Or Update Data
   */
  const { mutate: mutateColor } = useAxiosPostPatch<CreateCarTypeDto>({
    config: (id) => {
      if (id) return axiosUpdateColor(id);
      return axiosPostColor();
    },
    invalidateQueryKey: colorKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    colorData,
    mutateColor,
    id,
  };
}

export default useColorFormModel;
