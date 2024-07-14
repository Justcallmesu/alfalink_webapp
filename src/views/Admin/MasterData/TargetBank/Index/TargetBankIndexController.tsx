import React from "react";
import { DataTableColumn } from "mantine-datatable";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import { useNavigate } from "react-router-dom";
import { FuelTypeModel } from "@/lib/models/MasterData/FuelType";
import useFuelTypeIndexModel from "./TargetBankIndexModel";
import { TargetBankModel } from "@/lib/models/MasterData/TargetBank";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useTargetBankIndexController() {
  /**
   * Models
   */
  const {
    targetBankData,

    targetBankRefetch,
    isTargetBankFetching,
    settargetBankQuery,
    mutateDeleteTargetBank,
  } = useFuelTypeIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car Model
   */
  const handleDeleteTargetBank = (id: string) => {
    mutateDeleteTargetBank({ id });
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    settargetBankQuery((prevState) => ({
      ...prevState,
      bankName: value,
    }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    settargetBankQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const TargetBankTableColumns: DataTableColumn<TargetBankModel>[] = [
    {
      accessor: "actions",
      title: "Actions",
      textAlign: "center",
      width: 100,
      render(record) {
        return (
          <div className="flex gap-3 justify-center">
            <ActionIcon
              variant="light"
              color="orange"
              onClick={() => navigate(`./${record._id}/edit`)}
            >
              <IconEdit />
            </ActionIcon>
            <Popconfirm
              description="Yakin ingin menghapus data ini ?"
              onConfirm={() => handleDeleteTargetBank(record._id)}
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
      accessor: "bankName",
      title: "Nama Bank",
    },
    {
      accessor: "bankNumber",
      title: "Nomor Rekening",
    },
    {
      accessor: "bankOwnerName",
      title: "Nama Pemilik Rekening",
    },
  ];

  usePageTitle({ title: "Bank Tujuan"});

  return {
    /**
     * Models
     */
    targetBankData,
    targetBankRefetch,
    isTargetBankFetching,

    /**
     * Controllers
     */
    handleSearch,
    TargetBankTableColumns,
    navigate,
    handlePageChange,
  };
}

export default useTargetBankIndexController;
