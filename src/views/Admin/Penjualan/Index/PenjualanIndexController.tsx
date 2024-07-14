import React, { useState } from "react";
import usePenjualanIndexModel from "./PenjualanIndexModel";
import { DataTableColumn } from "mantine-datatable";
import {
  PenjualanModel,
  UpdatePenjualanStatusDto,
} from "@/lib/models/penjualan/Penjualan";
import { ActionIcon } from "@mantine/core";
import {
  IconEdit,
  IconFile,
  IconSettingsCheck,
  IconTrash,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import dayjs from "dayjs";
import PenjualanStatusNode from "../Components/PenjualanStatusNode";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

function usePenjualanIndexController() {
  const {
    isPenjualanFetching,
    mutateDeletePenjualan,
    penjualanData,
    penjualanQuery,
    refetchPenjualan,
    setPenjualanQuery,
    mutateUpdatePenjualanStatus,
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

  const formModal = useForm<UpdatePenjualanStatusDto>({
    initialValues: {
      status: undefined,
    },
    validate: {
      status: (value) => {
        if (!value) {
          return "Status is required";
        }
      },
    },
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedPenjualan, setSelectedPenjualan] =
    useState<PenjualanModel | null>(null);

  const handleOpenFormModal = async (record: PenjualanModel) => {
    setSelectedPenjualan(record);
    formModal.reset();
    formModal.setFieldValue("status", record.status!);
    open();
  };

  const handleUpdatePenjualanStatus = async (
    values: UpdatePenjualanStatusDto
  ) => {
    mutateUpdatePenjualanStatus({
      id: selectedPenjualan?._id!,
      data: {
        status: values.status,
      },
    });
    formModal.reset();
    close();
  };

  const handleCloseModal = () => {
    formModal.reset();
    close();
  };

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
            <ActionIcon
              variant="light"
              color="orange"
              onClick={() => handleOpenFormModal(record)}
            >
              <IconSettingsCheck />
            </ActionIcon>
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
      accessor: "metodePembayaran",
      title: "Metode Pembayaran",
    },
    {
      accessor: "status",
      title: "Status",
      render(record) {
        return <PenjualanStatusNode status={record.status} />;
      },
    },
  ];

  usePageTitle({ title: "Penjualan" });

  return {
    isPenjualanFetching,
    penjualanData,
    penjualanQuery,
    refetchPenjualan,
    handlePenjualanSearch,
    handlePageChange,
    tableColumns,
    navigate,
    formModal,
    opened,
    handleCloseModal,
    handleOpenFormModal,
    handleUpdatePenjualanStatus,
    selectedPenjualan,
  };
}

export default usePenjualanIndexController;
