import { DataTableColumn } from "mantine-datatable";
import React from "react";
import useCustomerIndexModel from "./CustomerIndexModel";
import { CustomerModel } from "@/lib/models/customer/customer";

function useCustomerIndexController() {
  /**
   * Models
   */
  const {
    customerData,
    isCustomerFetching,
    refetchCustomer,
    setCustomerQuery,
  } = useCustomerIndexModel();

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setCustomerQuery((prevState) => ({
      ...prevState,
      fullName: value,
    }));
  };

  const tableColumns: DataTableColumn<CustomerModel>[] = [
    {
      accessor: "actions",
      title: "Actions",
      textAlign: "center",
    },
    {
      accessor: "fullName",
      title: "Nama Lengkap",
    },
    {
      accessor: "email",
      title: "Email",
    },
    {
      accessor: "birthPlace",
      title: "Tempat Lahir",
    },
    {
      accessor: "birthDate",
      title: "Tanggal Lahir",
      render: (record) =>
        new Date(record.birthDate).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    },
    {
      accessor: "address",
      title: "Alamat",
    },
  ];

  return {
    /**
     * Models
     */
    customerData,
    isCustomerFetching,
    refetchCustomer,

    /**
     * Controllers
     */
    tableColumns,
    handleSearch,
  };
}

export default useCustomerIndexController;
