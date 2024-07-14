import {
  axiosGetFuelType,
  axiosPostFuelType,
  axiosUpdateFuelType,
} from "@/lib/axios-config/MasterData/FuelType";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CreateFuelTypeDto,
  FuelTypeModel,
} from "@/lib/models/MasterData/FuelType";
import { ResponseModel } from "@/lib/models/base";
import { fuelTypeKeys } from "@/lib/queryKeys/MasterData/FuelType";
import { useParams } from "react-router-dom";

function useFuelTypeFormModel() {
  const { id } = useParams();

  /**
   * Get Data
   */
  const { data: fuelTypeData } = useGetAxios<ResponseModel<FuelTypeModel>>({
    config: axiosGetFuelType(id!),
    queryKey: fuelTypeKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post Or Update Data
   */
  const { mutate: mutateFuelType } = useAxiosPostPatch<CreateFuelTypeDto>({
    config: (id) => {
      if (id) return axiosUpdateFuelType(id);
      return axiosPostFuelType();
    },
    invalidateQueryKey: fuelTypeKeys._def,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    fuelTypeData,
    mutateFuelType,
    id,
  };
}

export default useFuelTypeFormModel;
