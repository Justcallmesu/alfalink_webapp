import React, { useEffect } from "react";
import useColorFormModel from "./FuelTypeFormModel";
import { useForm } from "@mantine/form";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";
import { CreateFuelTypeDto } from "@/lib/models/MasterData/FuelType";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useFuelTypeFormController({ formType }: FormType) {
  const { fuelTypeData, mutateFuelType } = useColorFormModel();

  const form = useForm<CreateFuelTypeDto>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => {
        if (!value) {
          return "Nama Jenis Bahan Bakar Tidak Boleh Kosong !";
        }
        return value.length < 3
          ? "Nama Jenis Bahan Bakar Terlalu Pendek"
          : null;
      },
    },
  });

  const handleColorSubmit = async (data: CreateFuelTypeDto) => {
    form.validate();

    const submitData: CreateFuelTypeDto = {
      ...data,
    };

    mutateFuelType({
      data: submitData,
      id:
        formType === FormTypeEnum.UPDATE ? fuelTypeData?.data?._id : undefined,
    });
  };

  useEffect(() => {
    if (fuelTypeData?.data)
      form.initialize({
        ...fuelTypeData.data,
      });
  }, [fuelTypeData]);

  usePageTitle({ title: "Form Jenis Bahan Bakar", prevRoute: -1 });

  return {
    form,
    handleColorSubmit,
  };
}

export default useFuelTypeFormController;
