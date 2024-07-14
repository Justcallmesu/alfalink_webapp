import React from "react";
import useInspeksiIndexModel from "./InspeksiIndexModel";
import { DataTableColumn } from "mantine-datatable";
import { InspeksiModel } from "@/lib/models/Inspeksi/inspeksi";
import { useNavigate } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import InspeksiStatusNode from "../Components/InspeksiStatusNode";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useInspeksiIndexController() {
  const {
    InspectionsData,
    inspectionQuery,
    isInspectionsFetching,
    mutateDeleteInspection,
    mutateUpdateInspection,
    refetchInspections,
    setInspectionQuery,
  } = useInspeksiIndexModel();

  const handleInspectionSearch = (value: string) => {
    setInspectionQuery((prevState) => ({
      ...prevState,
      mobil: value,
    }));
  };

  const handleDelete = (id: string) => {
    mutateDeleteInspection({
      id,
    });
  };

  const handlePageChange = (page: number) => {
    setInspectionQuery((prevState) => ({
      ...prevState,
      page: page,
    }));
  };

  const navigate = useNavigate();

  const InspectionTableColumns: DataTableColumn<InspeksiModel>[] = [
    {
      accessor: "actions",
      title: "Actions",
      textAlign: "center",
      width: 150,
      render(record) {
        return (
          <div className="flex gap-3 justify-center">
            <ActionIcon
              variant="light"
              color="blue"
              onClick={() => navigate(`./${record._id}`)}
            >
              <IconFile />
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
              onConfirm={() => handleDelete(record._id)}
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
      accessor: "mobil",
      title: "No Polisi Mobil",
      render(record) {
        return record.mobil.noPolisi;
      },
    },
    {
      accessor: "namaMobil",
      title: "Nama Mobil",
      render(record) {
        return record.mobil.nama;
      },
    },
    {
      accessor: "merkMobil",
      title: "Merk Mobil",
      render(record) {
        return record.mobil.merk.name ?? "-";
      },
    },
    {
      accessor: "status",
      title: "Status",
      render(record) {
        return <InspeksiStatusNode status={record.status} />;
      },
    },
  ];

  usePageTitle({ title: "Inspeksi" });

  return {
    InspectionsData,
    inspectionQuery,
    isInspectionsFetching,
    handleInspectionSearch,
    handleDelete,
    InspectionTableColumns,
    mutateUpdateInspection,
    refetchInspections,
    navigate,
    handlePageChange,
  };
}

export default useInspeksiIndexController;
