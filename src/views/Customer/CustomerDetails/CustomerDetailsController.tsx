import React from "react";
import useCustomerDetailsModel from "./CustomerDetailsModel";
import { useNavigate } from "react-router-dom";

function useCustomerDetailsController() {
  const { customerData, isCustomerFetching, mutateDeleteCustomer } =
    useCustomerDetailsModel();

  const navigate = useNavigate();

  /**
   *  Handle Delete Customer
   */
  const handleDeleteCustomer = (id: string) => {
    mutateDeleteCustomer({ id });
  };

  return {
    customerData,
    isCustomerFetching,
    handleDeleteCustomer,
    navigate,
  };
}

export default useCustomerDetailsController;
