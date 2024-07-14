import React from "react";
import { useNavigate } from "react-router-dom";
import useCarBrandIndexModel from "./CarBrandIndexModel";
import { DataTableColumn } from "mantine-datatable";
import { CarBrandModel } from "@/lib/models/MasterData/CarBrand";
import { ActionIcon } from "@mantine/core";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useCarBrandIndexController() {
  const {
    carBrandData,
    isCarBrandFetching,
    mutateDeleteCarBrand,
    refetchCarBrand,
    setCarBrandQuery,
  } = useCarBrandIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car Model
   */
  const handleDeleteCarModel = (id: string) => {
    mutateDeleteCarBrand({ id });
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setCarBrandQuery((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setCarBrandQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const CarBrandTableColumns: DataTableColumn<CarBrandModel>[] = [
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
              onConfirm={() => handleDeleteCarModel(record._id)}
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
      title: "Nama",
    },
  ];

  usePageTitle({ title: "Merk Mobil" });

  return {
    carBrandData,
    isCarBrandFetching,
    CarBrandTableColumns,
    refetchCarBrand,
    handleSearch,
    handlePageChange,
    navigate,
  };
}

export default useCarBrandIndexController;
