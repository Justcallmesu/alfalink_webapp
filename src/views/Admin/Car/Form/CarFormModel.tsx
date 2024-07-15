import { axiosGetBodyStyles } from "@/lib/axios-config/MasterData/BodyStyle";
import { axiosGetCarBrands } from "@/lib/axios-config/MasterData/CarBrand";
import { axiosGetCarTypes } from "@/lib/axios-config/MasterData/CarType";
import { axiosGetColors } from "@/lib/axios-config/MasterData/Color";
import { axiosGetFuelTypes } from "@/lib/axios-config/MasterData/FuelType";
import {
  axiosGetCar,
  axiosPostCar,
  axiosUpdateCar,
} from "@/lib/axios-config/car/Car";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { CarModel, CreateCarDto, UpdateCarDto } from "@/lib/models/Car/Car";
import {
  BodyStyleModel,
  BodyStyleQueryDto,
} from "@/lib/models/MasterData/BodyStyle";
import {
  CarBrandModel,
  CarBrandQueryDto,
} from "@/lib/models/MasterData/CarBrand";
import { CarTypeModel, CarTypeQueryDto } from "@/lib/models/MasterData/CarType";
import { ColorModel, ColorQueryDto } from "@/lib/models/MasterData/Color";
import {
  FuelTypeModel,
  FuelTypeQueryDto,
} from "@/lib/models/MasterData/FuelType";
import {
  PaginationModel,
  ResponseData,
} from "@/lib/models/globals/ResponseModel";
import { bodyStyleKeys } from "@/lib/queryKeys/MasterData/BodyStyle";
import { carBrandKeys } from "@/lib/queryKeys/MasterData/CarBrand";
import { carTypeKeys } from "@/lib/queryKeys/MasterData/CarType";
import { colorKeys } from "@/lib/queryKeys/MasterData/Color";
import { fuelTypeKeys } from "@/lib/queryKeys/MasterData/FuelType";
import { carKeys } from "@/lib/queryKeys/car/Car";
import { useState } from "react";
import { useParams } from "react-router-dom";

function useCarFormModel() {
  /**
   * ! Master Data
   */

  /**
   * Interior Color Query
   */
  const [interiorColorQuery, setInteriorColorQuery] = useState<ColorQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Interior Color
   */
  const { data: interiorColorData } = useGetAxios<PaginationModel<ColorModel>>({
    config: axiosGetColors(),
    queryKey: colorKeys.lists(interiorColorQuery, "interior").queryKey,
    queryParams: interiorColorQuery,
  });

  /**
   * Exterior Color Query
   */
  const [exteriorColorQuery, setExteriorColorQuery] = useState<ColorQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * exterior Color
   */
  const { data: exteriorColorData } = useGetAxios<PaginationModel<ColorModel>>({
    config: axiosGetColors(),
    queryKey: colorKeys.lists(exteriorColorQuery, "exterior").queryKey,
    queryParams: exteriorColorQuery,
  });

  /**
   * Car Brand Query
   */
  const [carBrandQuery, setCarBrandQuery] = useState<CarBrandQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Car Brand
   */
  const { data: carBrandData } = useGetAxios<PaginationModel<CarBrandModel>>({
    config: axiosGetCarBrands(),
    queryKey: carBrandKeys.lists(carBrandQuery).queryKey,
    queryParams: carBrandQuery,
  });

  /**
   * Body Style Query
   */
  const [bodyStyleQuery, setBodyStyleQuery] = useState<BodyStyleQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Body Style
   */
  const { data: bodyStyleData } = useGetAxios<PaginationModel<BodyStyleModel>>({
    config: axiosGetBodyStyles(),
    queryKey: bodyStyleKeys.lists(bodyStyleQuery).queryKey,
    queryParams: bodyStyleQuery,
  });

  /**
   * Fuel Type Query
   */
  const [fuelTypeQuery, setFuelTypeQuery] = useState<FuelTypeQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Fuel Type
   */
  const { data: fuelTypeData } = useGetAxios<PaginationModel<FuelTypeModel>>({
    config: axiosGetFuelTypes(),
    queryKey: fuelTypeKeys.lists(fuelTypeQuery).queryKey,
    queryParams: fuelTypeQuery,
  });

  /**
   * Car Type Query
   */
  const [carTypeQuery, setCarTypeQuery] = useState<CarTypeQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Car Type
   */
  const { data: carTypeData } = useGetAxios<PaginationModel<CarTypeModel>>({
    config: axiosGetCarTypes(),
    queryKey: carTypeKeys.lists(carTypeQuery).queryKey,
    queryParams: carTypeQuery,
  });

  /**
   *! Car Data
   */

  const { id } = useParams();

  /**
   * Car
   */
  const { data: carData } = useGetAxios<ResponseData<CarModel>>({
    config: axiosGetCar(id!),
    queryKey: carKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Mutate Post Patch
   */
  const { mutate: mutatePostPatchCar } = useAxiosPostPatch<
    CreateCarDto | UpdateCarDto
  >({
    config: (id) => {
      if (id) return axiosUpdateCar(id);
      return axiosPostCar();
    },
    redirect: "../",
    invalidateQueryKey: carKeys._def,
    invalidateType: "all",
  });

  return {
    /**
     * Data
     */
    interiorColorData,
    exteriorColorData,
    carBrandData,
    bodyStyleData,
    fuelTypeData,
    carTypeData,
    carData,

    /**
     * Query
     */
    setInteriorColorQuery,
    setExteriorColorQuery,
    setCarBrandQuery,
    setBodyStyleQuery,
    setFuelTypeQuery,
    setCarTypeQuery,

    /**
     * Mutate
     */
    mutatePostPatchCar,
  };
}

export default useCarFormModel;
