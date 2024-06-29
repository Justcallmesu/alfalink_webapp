import { getAllCustomers } from "@/lib/axios-config/customer/customer";
import useGetAxios from "@/lib/hooks/axios/UseAxiosGet";
import { CustomerModel, CustomerQuery } from "@/lib/models/customer/customer";
import { PaginationModel } from "@/lib/models/globals/ResponseModel";
import customerKeys from "@/lib/queryKeys/customer/customer";
import { useState } from "react";

function useCustomerIndexModel() {
  /**
   * Customer Query
   */
  const [customerQuery, setCustomerQuery] = useState<CustomerQuery>({});

  /**
   * Get Customer
   */
  const {
    data: customerData,
    isFetching: isCustomerFetching,
    refetch: refetchCustomer,
  } = useGetAxios<PaginationModel<CustomerModel>>({
    config: getAllCustomers(),
    queryParams: customerQuery,
    queryKey: customerKeys.lists(customerQuery).queryKey,
  });

  return {
    customerData,
    isCustomerFetching,
    refetchCustomer,
    setCustomerQuery,
  };
}

export default useCustomerIndexModel;
