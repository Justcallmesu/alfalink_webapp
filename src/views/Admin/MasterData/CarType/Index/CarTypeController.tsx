import React from "react";
import useCarTypeIndexModel from "./CarTypeModel";
import { DataTableColumn } from "mantine-datatable";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import { useNavigate } from "react-router-dom";
import { CarTypeModel } from "@/lib/models/MasterData/CarType";

function useCarTypeIndexController() {
  /**
   * Models
   */
  const {
    carTypeData,

    carTypeRefetch,
    isCarTypeFetching,
    setCarTypeQuery,
    mutateDeleteCarType,
  } = useCarTypeIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car Model
   */
  const handleDeleteCarType = (id: string) => {
    mutateDeleteCarType({ id });
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setCarTypeQuery((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setCarTypeQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const CarTypeTableColumns: DataTableColumn<CarTypeModel>[] = [
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
              onConfirm={() => handleDeleteCarType(record._id)}
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
    carTypeData,
    carTypeRefetch,
    isCarTypeFetching,

    /**
     * Controllers
     */
    handleSearch,
    CarTypeTableColumns,
    navigate,
    handlePageChange,
  };
}

export default useCarTypeIndexController;
