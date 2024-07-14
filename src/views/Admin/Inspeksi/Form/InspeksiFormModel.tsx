import {
  axiosGetInspectionById,
  axiosPostInspection,
  axiosPutInspection,
} from "@/lib/axios-config/Inspeksi/inspeksi";
import { axiosGetCars } from "@/lib/axios-config/car/Car";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { CarModel, CarQueryDto } from "@/lib/models/Car/Car";
import {
  CreateInspeksiDto,
  InspeksiModel,
} from "@/lib/models/Inspeksi/inspeksi";
import {
  PaginationModel,
  ResponseData,
} from "@/lib/models/globals/ResponseModel";
import { carKeys } from "@/lib/queryKeys/car/Car";
import { inspeksiKeys } from "@/lib/queryKeys/inspeksi/InspeksiKeys";
import { useState } from "react";
import { Params, useParams } from "react-router-dom";

function useInspeksiFormModel() {
  const { id }: Params = useParams();

  /**
   * Get Inspection
   */
  const { data: inspectionData } = useGetAxios<ResponseData<InspeksiModel>>({
    config: axiosGetInspectionById(id!),
    queryKey: inspeksiKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  const [carQuery, setCarQuery] = useState<CarQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Get Mobil
   */
  const { data: carsData } = useGetAxios<PaginationModel<CarModel>>({
    config: axiosGetCars(),
    queryKey: carKeys.lists(carQuery).queryKey,
    queryParams: carQuery,
  });

  /**
   * Post or Patch Inspection
   */
  const { mutate: mutatePostInspection } = useAxiosPostPatch<CreateInspeksiDto>(
    {
      config: (id?) => {
        if (id) return axiosPutInspection(id);
        return axiosPostInspection();
      },
      invalidateQueryKey: inspeksiKeys.byId(id!).queryKey,
      invalidateType: "all",
      redirect: "../",
    }
  );

  return {
    inspectionData,
    mutatePostInspection,
    carsData,
    setCarQuery,
  };
}

export default useInspeksiFormModel;
