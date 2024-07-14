import React from "react";
import useCarModelModel from "./CarModelModel";
import { DataTableColumn } from "mantine-datatable";
import { CarModelModel } from "@/lib/models/MasterData/CarModel";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import { useNavigate } from "react-router-dom";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function useCarModelController() {
  /**
   * Models
   */
  const {
    carModelData,
    carModelQuery,
    carModelRefetch,
    isCarModelFetching,
    setCarModelQuery,
    mutateDeleteCarModel,
  } = useCarModelModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car Model
   */
  const handleDeleteCarModel = (id: string) => {
    mutateDeleteCarModel({ id });
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setCarModelQuery((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setCarModelQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const CarModelTableColumns: DataTableColumn<CarModelModel>[] = [
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
              disabled={
                !checkPermissions({
                  permissionsCode: PermissionsEnum.UPDATE_MODEL,
                  type: "action",
                })
              }
            >
              <IconEdit />
            </ActionIcon>
            <Popconfirm
              description="Yakin ingin menghapus data ini ?"
              onConfirm={() => handleDeleteCarModel(record._id)}
            >
              <ActionIcon
                variant="light"
                color="red"
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.DELETE_MODEL,
                    type: "action",
                  })
                }
              >
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

  usePageTitle({ title: "Model Mobil" });

  return {
    /**
     * Models
     */
    carModelData,
    carModelRefetch,
    isCarModelFetching,

    /**
     * Controllers
     */
    handleSearch,
    CarModelTableColumns,
    navigate,
    handlePageChange,
  };
}

export default useCarModelController;
