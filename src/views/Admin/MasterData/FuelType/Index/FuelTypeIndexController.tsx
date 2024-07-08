import React from "react";
import { DataTableColumn } from "mantine-datatable";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import { useNavigate } from "react-router-dom";
import { FuelTypeModel } from "@/lib/models/MasterData/FuelType";
import useFuelTypeIndexModel from "./FuelTypeIndexModel";

function useFuelTypeIndexController() {
  /**
   * Models
   */
  const {
    fuelTypeData,

    fuelTypeRefetch,
    isFuelTypeFetching,
    setFuelTypeQuery,
    mutateDeleteFuelType,
  } = useFuelTypeIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car Model
   */
  const handleDeleteFuelType = (id: string) => {
    mutateDeleteFuelType({ id });
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setFuelTypeQuery((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setFuelTypeQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const FuelTypeTableColumns: DataTableColumn<FuelTypeModel>[] = [
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
              onConfirm={() => handleDeleteFuelType(record._id)}
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
      accessor: "name",
      title: "Nama Tipe Mobil",
    },
  ];

  return {
    /**
     * Models
     */
    fuelTypeData,
    fuelTypeRefetch,
    isFuelTypeFetching,

    /**
     * Controllers
     */
    handleSearch,
    FuelTypeTableColumns,
    navigate,
    handlePageChange,
  };
}

export default useFuelTypeIndexController;