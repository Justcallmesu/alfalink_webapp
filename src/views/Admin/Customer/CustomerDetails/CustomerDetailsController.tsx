import React from "react";
import useCustomerDetailsModel from "./CustomerDetailsModel";
import { useNavigate } from "react-router-dom";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useCustomerDetailsController() {
  const { customerData, isCustomerFetching, mutateDeleteCustomer } =
    useCustomerDetailsModel();

  const navigate = useNavigate();

  /**
   *  Handle Delete Customer
   */
  const handleDeleteCustomer = (id: string) => {
    mutateDeleteCustomer({ id });
    navigate("../");
  };

  usePageTitle({ title: "Detail Customer", prevRoute: "../" });

  return {
    customerData,
    isCustomerFetching,
    handleDeleteCustomer,
    navigate,
  };
}

export default useCustomerDetailsController;
