import {
  getCustomer,
  postCustomer,
  updateCustomer,
} from "@/lib/axios-config/customer/customer";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { useAxiosPostPatch } from "@/lib/hooks/axios/UseAxiosPostPatch";
import {
  CreateCustomerModel,
  CustomerModel,
} from "@/lib/models/customer/customer";
import { ResponseData } from "@/lib/models/globals/ResponseModel";
import customerKeys from "@/lib/queryKeys/customer/customer";
import React from "react";
import { Params, useParams } from "react-router-dom";

function useCustomerFormModel() {
  const { id }: Params = useParams();

  /**
   * Get Customer
   */
  const { data: customerData } = useGetAxios<ResponseData<CustomerModel>>({
    config: getCustomer(id!),
    queryKey: customerKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Post or Patch Customer
   */
  const { mutate: mutatePostPatchCustomer } =
    useAxiosPostPatch<CreateCustomerModel>({
      config: (id?) => {
        if (id) return updateCustomer(id);
        return postCustomer();
      },
      redirect: "../",
    });

  return {
    mutatePostPatchCustomer,
    customerData,
  };
}

export default useCustomerFormModel;
