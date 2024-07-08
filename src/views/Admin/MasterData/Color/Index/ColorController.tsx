import React from "react";
import useColorIndexModel from "./ColorModel";
import { DataTableColumn } from "mantine-datatable";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import { useNavigate } from "react-router-dom";
import { ColorModel } from "@/lib/models/MasterData/Color";

function useColorIndexController() {
  /**
   * Models
   */
  const {
    colorData,

    colorRefetch,
    isColorFetching,
    setcolorQuery,
    mutateDeleteColor,
  } = useColorIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car Model
   */
  const handleDeleteColor = (id: string) => {
    mutateDeleteColor({ id });
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setcolorQuery((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setcolorQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const ColorTableColumns: DataTableColumn<ColorModel>[] = [
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
              onConfirm={() => handleDeleteColor(record._id)}
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
    colorData,
    colorRefetch,
    isColorFetching,

    /**
     * Controllers
     */
    handleSearch,
    ColorTableColumns,
    navigate,
    handlePageChange,
  };
}

export default useColorIndexController;
