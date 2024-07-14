import React from "react";
import usePenjualanIndexModel from "./PenjualanIndexModel";
import { DataTableColumn } from "mantine-datatable";
import { PenjualanModel } from "@/lib/models/penjualan/Penjualan";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import dayjs from "dayjs";
import PenjualanStatusNode from "../Components/PenjualanStatusNode";

function usePenjualanIndexController() {
  const {
    isPenjualanFetching,
    mutateDeletePenjualan,
    penjualanData,
    penjualanQuery,
    refetchPenjualan,
    setPenjualanQuery,
  } = usePenjualanIndexModel();

  const handlePenjualanSearch = (value: string) => {
    setPenjualanQuery({
      ...penjualanQuery,
      customer: value,
    });
  };

  const handlePenjualanDelete = (id: string) => {
    mutateDeletePenjualan({
      id,
    });
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setPenjualanQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const navigate = useNavigate();

  const tableColumns: DataTableColumn<PenjualanModel>[] = [
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
              onConfirm={() => handlePenjualanDelete(record._id)}
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
      accessor: "carName",
      title: "Nama Mobil",
      render(record) {
        return record.mobil.nama;
      },
    },
    {
      accessor: "carNumber",
      title: "Nomor Polisi Mobil",
      render(record) {
        return record.mobil.noPolisi;
      },
    },
    {
      accessor: "custonerName",
      title: "Nama Pembeli",
      render(record) {
        return record.customer.fullName;
      },
    },
    {
      accessor: "tanggalPenjualan",
      title: "Tanggal Penjualan",
      render(record) {
        return dayjs(record.tanggalPenjualan).format("DD MMMM YYYY");
      },
    },
    {
      accessor: "status",
      title: "Status",
      render(record) {
        return <PenjualanStatusNode status={record.status} />;
      },
    },
  ];

  return {
    isPenjualanFetching,
    penjualanData,
    penjualanQuery,
    refetchPenjualan,
    handlePenjualanSearch,
    handlePageChange,
    tableColumns,
    navigate,
  };
}

export default usePenjualanIndexController;
