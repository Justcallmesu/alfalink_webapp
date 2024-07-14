import React, { useState } from "react";
import usePenjualanDetailsModel from "./PenjualanDetailsModel";
import { useNavigate } from "react-router-dom";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { useDisclosure } from "@mantine/hooks";
import {
  PenjualanModel,
  UpdatePenjualanStatusDto,
} from "@/lib/models/penjualan/Penjualan";
import { useForm } from "@mantine/form";

function usePenjualanDetailsController() {
  const {
    penjualanData,
    isPenjualanFetching,
    mutateDeletePenjualan,
    mutateUpdatePenjualanStatus,
  } = usePenjualanDetailsModel();

  const navigate = useNavigate();

  const handleDeletePenjualan = (id: string) => {
    mutateDeletePenjualan({ id });
  };

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

  usePageTitle({ title: "Detail Penjualan", prevRoute: -1 });

  return {
    penjualanData,
    isPenjualanFetching,
    handleDeletePenjualan,
    navigate,
    formModal,
    opened,
    handleOpenFormModal,
    handleUpdatePenjualanStatus,
    handleCloseModal,
  };
}

export default usePenjualanDetailsController;
