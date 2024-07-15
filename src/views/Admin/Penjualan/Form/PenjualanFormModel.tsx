import { axiosGetTargetBanks } from "@/lib/axios-config/MasterData/TargetBank";
import { axiosGetCars } from "@/lib/axios-config/car/Car";
import { getAllCustomers } from "@/lib/axios-config/customer/customer";
import {
  axiosGetPenjualanById,
  axiosPostPenjualan,
  axiosUpdatePenjualan,
} from "@/lib/axios-config/penjualan/Penjualan";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import { CarModel, CarQueryDto, StatusMobil } from "@/lib/models/Car/Car";
import {
  TargetBankModel,
  TargetBankQueryDto,
} from "@/lib/models/MasterData/TargetBank";
import { ResponseModel } from "@/lib/models/base";
import { CustomerModel, CustomerQuery } from "@/lib/models/customer/customer";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import {
  CreatePenjualanDto,
  PenjualanModel,
} from "@/lib/models/penjualan/Penjualan";
import { targetBankKeys } from "@/lib/queryKeys/MasterData/TargetBank";
import { penjualanKeys } from "@/lib/queryKeys/Penjualan/Penjualan";
import { carKeys } from "@/lib/queryKeys/car/Car";
import customerKeys from "@/lib/queryKeys/customer/customer";
import { useState } from "react";
import { Params, useParams } from "react-router-dom";

function usePenjualanFormModel() {
  const { id }: Params = useParams();

  const { data: dataPenjualan } = useGetAxios<ResponseModel<PenjualanModel>>({
    config: axiosGetPenjualanById(id!),
    queryKey: penjualanKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Customer Query
   */
  const [customerQuery, setCustomerQuery] = useState<CustomerQuery>({
    page: 1,
    limit: 10,
  });

  /**
   * Get Customer Data
   */
  const { data: dataCustomer } = useGetAxios<PaginationModel<CustomerModel>>({
    config: getAllCustomers(),
    queryKey: customerKeys.lists(customerQuery).queryKey,
    queryParams: customerQuery,
  });

  /**
   * Car Query
   */
  const [carQuery, setCarQuery] = useState<CarQueryDto>({
    page: 1,
    limit: 10,
    status: StatusMobil.Ready,
  });

  /**
   * Get Car Data
   */
  const { data: dataCar } = useGetAxios<PaginationModel<CarModel>>({
    config: axiosGetCars(),
    queryKey: carKeys.lists(carQuery).queryKey,
    queryParams: carQuery,
  });

  /**
   * Target Bank Query
   */
  const [targetBankQuery, setTargetBankQuery] = useState<TargetBankQueryDto>({
    page: 1,
    limit: 10,
  });

  /**
   * Get Target Bank Data
   */
  const { data: targetBankData } = useGetAxios<
    PaginationModel<TargetBankModel>
  >({
    config: axiosGetTargetBanks(),
    queryKey: targetBankKeys.lists(targetBankQuery).queryKey,
    queryParams: targetBankQuery,
  });

  /**
   * Mutate Post Patch Car
   */
  const { mutate: mutatePostPatchPenjualan } =
    useAxiosPostPatch<CreatePenjualanDto>({
      config: (id) => {
        if (id) return axiosUpdatePenjualan(id);
        return axiosPostPenjualan();
      },
      invalidateQueryKey: penjualanKeys.byId(id!).queryKey,
      invalidateType: "all",
      redirect: "../",
    });

  return {
    dataPenjualan,
    dataCustomer,
    dataCar,
    customerQuery,
    setCustomerQuery,
    carQuery,
    setCarQuery,
    mutatePostPatchPenjualan,
    setTargetBankQuery,
    targetBankData,
  };
}

export default usePenjualanFormModel;
