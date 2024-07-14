import { DataTableColumn } from "mantine-datatable";
import React from "react";
import useCustomerIndexModel from "./CustomerIndexModel";
import { CustomerModel } from "@/lib/models/customer/customer";
import { useNavigate } from "react-router-dom";
import { ActionIcon, Button } from "@mantine/core";
import {
  IconEdit,
  IconFile,
  IconFilterEdit,
  IconTrash,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useCustomerIndexController() {
  /**
   * Models
   */
  const {
    customerData,
    isCustomerFetching,
    refetchCustomer,
    setCustomerQuery,
    mutateDeleteCustomer,
  } = useCustomerIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setCustomerQuery((prevState) => ({
      ...prevState,
      fullName: value,
    }));
  };

  /**
   * Handle Delete Customer
   */
  const handleDeleteCustomer = (id: string) => {
    mutateDeleteCustomer({
      id,
    });
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setCustomerQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const tableColumns: DataTableColumn<CustomerModel>[] = [
    {
      accessor: "actions",
      title: "Actions",
      textAlign: "center",
      render(record) {
        return (
          <div className="flex gap-3 justify-center">
            <ActionIcon variant="light">
              <IconFile onClick={() => navigate(`./${record._id}`)} />
            </ActionIcon>
            <ActionIcon
              variant="light"
              color="orange"
              onClick={() => navigate(`./${record._id}/edit`)}
            >
              <IconEdit />
            </ActionIcon>
            <Popconfirm
              description="Yakin ingin menghapus data ini ?"
              onConfirm={() => handleDeleteCustomer(record._id)}
            >
              <ActionIcon variant="light" color="red">
                <IconTrash />
              </ActionIcon>
            </Popconfirm>
          </div>
        );
      },
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
      render: (record) => dayjs(record.birthDate).format("DD MMMM YYYY"),
    },
    {
      accessor: "address",
      title: "Alamat",
    },
  ];

  usePageTitle({ title: "Customers" });

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
    navigate,
    handlePageChange,
  };
}

export default useCustomerIndexController;
