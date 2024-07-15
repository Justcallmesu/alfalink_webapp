import {
  deleteCustomer,
  getCustomer,
} from "@/lib/axios-config/customer/customer";
import { useAxiosDelete } from "@/lib/hooks/axios/UseAxiosDelete";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { CustomerModel } from "@/lib/models/customer/customer";
import { ResponseData } from "@/lib/models/globals/ResponseModel";
import customerKeys from "@/lib/queryKeys/customer/customer";
import { useParams } from "react-router-dom";

function useCustomerDetailsModel() {
  const { id } = useParams();

  /**
   * Get Customer
   */
  const { data: customerData, isFetching: isCustomerFetching } = useGetAxios<
    ResponseData<CustomerModel>
  >({
    config: getCustomer(id!),
    queryKey: customerKeys.byId(id!).queryKey,
    enabled: !!id,
  });

  /**
   * Delete Customer
   */
  const { mutate: mutateDeleteCustomer } = useAxiosDelete({
    config: (id) => deleteCustomer(id!),
    invalidateQueryKey: customerKeys.byId(id!).queryKey,
    invalidateType: "all",
    redirect: "../",
  });

  return {
    customerData,
    isCustomerFetching,
    mutateDeleteCustomer,
  };
}

export default useCustomerDetailsModel;
