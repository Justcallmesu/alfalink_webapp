import React, { useEffect } from "react";
import useCarFormModel from "./CarFormModel";
import { useForm } from "@mantine/form";
import {
  CarModel,
  CarTaxStatusEnum,
  CarTransmisionEnum,
  CreateCarDto,
  UpdateCarDto,
  UpdateCarStatusDto,
} from "@/lib/models/Car/Car";
import { FormTypeEnum } from "@/lib/enum/FormType";
import { FormType } from "@/lib/interface/FormType";
import { useDisclosure } from "@mantine/hooks";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useCarFormController({ formType }: FormType) {
  /**
   * Models
   */
  const {
    /**
     * Data
     */
    interiorColorData,
    exteriorColorData,
    carBrandData,
    bodyStyleData,
    fuelTypeData,
    carTypeData,
    carData,

    /**
     * Query
     */
    setInteriorColorQuery,
    setExteriorColorQuery,
    setCarBrandQuery,
    setBodyStyleQuery,
    setFuelTypeQuery,
    setCarTypeQuery,

    /**
     * Mutate
     */
    mutatePostPatchCar,
  } = useCarFormModel();

  const form = useForm<CreateCarDto | UpdateCarDto>({
    validate: {
      nama: (value) => {
        if (!value) {
          return "Nama Mobil Tidak Boleh Kosong";
        }
        return value.length < 3 && "Nama Mobil Terlalu Pendek";
      },
      transmisi: (value) => {
        if (!value) {
          return "Transmisi Tidak Boleh Kosong";
        }
      },
      noPolisi: (value) => {
        if (!value) {
          return "No Polisi Tidak Boleh Kosong";
        }
      },
      harga: (value) => {
        if (!value) {
          return "Harga Tidak Boleh Kosong";
        }
      },
    },
    initialValues: {
      nama: "",
      merk: "",
      bodyStyle: "",
      warnaInterior: "",
      warnaExterior: "",
      jenisBahanBakar: "",
      tipe: "",
      tahunRakit: undefined,
      harga: 0,
      noPolisi: "",
      transmisi: CarTransmisionEnum.AT,
      statusPajak: CarTaxStatusEnum.HIDUP,
      totalPajak: undefined,
    },
  });

  /*
   * Search
   */
  const handleInteriorColorSearch = (value: string) => {
    setInteriorColorQuery((prev) => ({ ...prev, name: value }));
  };

  const handleExteriorColorSearch = (value: string) => {
    setExteriorColorQuery((prev) => ({ ...prev, name: value }));
  };

  const handleCarBrandSearch = (value: string) => {
    setCarBrandQuery((prev) => ({ ...prev, name: value }));
  };

  const handleBodyStyleSearch = (value: string) => {
    setBodyStyleQuery((prev) => ({ ...prev, name: value }));
  };

  const handleFuelTypeSearch = (value: string) => {
    setFuelTypeQuery((prev) => ({ ...prev, name: value }));
  };

  const handleCarTypeSearch = (value: string) => {
    setCarTypeQuery((prev) => ({ ...prev, name: value }));
  };

  /**
   * Mutate
   */
  const handleFormSubmit = (data: CreateCarDto | UpdateCarDto) => {
    const submitData: CreateCarDto | UpdateCarDto = {
      ...data,
    };
    console.log(submitData);

    mutatePostPatchCar({
      data: submitData,
      id: formType === FormTypeEnum.UPDATE ? carData?.data?._id : undefined,
    });
  };

  /**
   * Hooks
   */
  useEffect(() => {
    if (carData?.data)
      form.initialize({
        ...carData.data!,
        merk: carData.data?.merk?._id,
        bodyStyle: carData.data?.bodyStyle?._id,
        warnaInterior: carData.data?.warnaInterior?._id,
        warnaExterior: carData.data?.warnaExterior?._id,
        jenisBahanBakar: carData.data?.jenisBahanBakar?._id,
        tipe: carData.data?.tipe?._id,
      });
  }, [carData]);

  usePageTitle({ title: "Mobil Form", prevRoute: -1 });

  return {
    /**
     * Data
     */
    interiorColorData,
    exteriorColorData,
    carBrandData,
    bodyStyleData,
    fuelTypeData,
    carTypeData,
    carData,

    /**
     * Form
     */
    form,

    /**
     * Handlers
     */
    handleInteriorColorSearch,
    handleExteriorColorSearch,
    handleCarBrandSearch,
    handleBodyStyleSearch,
    handleFuelTypeSearch,
    handleCarTypeSearch,
    handleFormSubmit,
  };
}

export default useCarFormController;
