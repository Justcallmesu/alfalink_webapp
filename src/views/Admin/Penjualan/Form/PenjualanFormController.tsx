import React, { useEffect } from "react";
import usePenjualanFormModel from "./PenjualanFormModel";
import {
  CreatePenjualanDto,
  metodePembayaran,
} from "@/lib/models/penjualan/Penjualan";
import { useForm } from "@mantine/form";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function usePenjualanFormController() {
  const {
    carQuery,
    customerQuery,
    dataCar,
    dataCustomer,
    dataPenjualan,
    mutatePostPatchPenjualan,
    setCarQuery,
    setCustomerQuery,
    setTargetBankQuery,
    targetBankData,
  } = usePenjualanFormModel();

  /**
   * Search
   */
  const handleCustomerSearch = (value: string) => {
    setCustomerQuery({ ...customerQuery, fullName: value });
  };

  const handleCarSearch = (value: string) => {
    setCarQuery({ ...carQuery, nama: value });
  };

  const handleTargetBankSearch = (value: string) => {
    setTargetBankQuery((prevState) => ({ ...prevState, nama: value }));
  };

  /**
   * Form
   */
  const form = useForm<CreatePenjualanDto>({
    initialValues: {
      customer: "",
      mobil: "",
      isDP: false,
      metodePembayaran: metodePembayaran.CASH,
      tanggalPenjualan: new Date(),
      bankTujuan: undefined,
      totalDP: 0,
      totalTerbayar: 0,
    },
    validate: {
      customer: (value) => {
        if (!value) {
          return "Customer Tidak boleh Kosong";
        }
      },
      mobil: (value) => {
        if (!value) {
          return "Mobil Tidak boleh Kosong";
        }
      },
    },
  });

  /**
   * Handler
   */
  const handleSubmit = (values: CreatePenjualanDto) => {
    mutatePostPatchPenjualan({
      id: dataPenjualan?.data._id,
      data: {
        ...values,
      },
    });
  };

  const handleCarOnChange = (value: string) => {
    if (!value) return;

    const selectedCar = dataCar?.data.find((car) => car._id === value);

    form.setFieldValue("mobil", value);
    form.setFieldValue("totalTerbayar", selectedCar?.harga ?? 0);
  };

  usePageTitle({ title: "Form Penjualan", prevRoute: -1 });

  useEffect(() => {
    if (dataPenjualan?.data)
      form.initialize({
        ...dataPenjualan.data,
        customer: dataPenjualan.data.customer._id,
        mobil: dataPenjualan.data.mobil._id,
        bankTujuan: dataPenjualan.data.bankTujuan?._id,
        tanggalPenjualan: new Date(dataPenjualan.data.tanggalPenjualan),
      });
  }, [dataPenjualan]);

  return {
    form,
    dataCustomer,
    dataCar,
    targetBankData,
    handleCustomerSearch,
    handleCarSearch,
    handleTargetBankSearch,
    handleSubmit,
    handleCarOnChange,
  };
}

export default usePenjualanFormController;
