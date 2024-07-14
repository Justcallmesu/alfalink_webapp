import React from "react";
import use1BodyStyleIndexModel from "./BodyStyleIndexModel";
import { useNavigate } from "react-router-dom";
import { DataTableColumn } from "mantine-datatable";
import { BodyStyleModel } from "@/lib/models/MasterData/BodyStyle";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useBodyStyleIndexController() {
  /**
   * Models
   */
  const {
    bodyStyleData,
    bodyStyleQuery,
    bodyStyleRefetch,
    isBodyStyleFetching,
    mutateDeleteBodyStyle,
    setBodyStyleQuery,
  } = use1BodyStyleIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car Model
   */
  const handleDeleteBodyStyle = (id: string) => {
    mutateDeleteBodyStyle({ id });
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setBodyStyleQuery((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setBodyStyleQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const BodyStyleTableColumns: DataTableColumn<BodyStyleModel>[] = [
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
              onConfirm={() => handleDeleteBodyStyle(record._id)}
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

  usePageTitle({ title: "Body Style" });

  return {
    /**
     * Models
     */
    bodyStyleData,
    bodyStyleQuery,
    isBodyStyleFetching,
    bodyStyleRefetch,

    /**
     * Controllers
     */
    handleSearch,
    BodyStyleTableColumns,
    navigate,
    handlePageChange,
  };
}

export default useBodyStyleIndexController;
