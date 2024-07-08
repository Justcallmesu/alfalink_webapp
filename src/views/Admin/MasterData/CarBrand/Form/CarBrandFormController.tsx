import React, { useEffect } from "react";
import useCarBrandFormModel from "./CarBrandFormModel";
import { FormType } from "@/lib/interface/FormType";
import { useForm } from "@mantine/form";
import { CreateCarBrandDto } from "@/lib/models/MasterData/CarBrand";
import { FormTypeEnum } from "@/lib/enum/FormType";

function useCarBrandFormController({ formType }: FormType) {
  const { carBrandData, mutateCarBrand } = useCarBrandFormModel();

  const form = useForm<CreateCarBrandDto>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => {
        if (!value) {
          return "Nama Merk Mobil Tidak Boleh Kosong !";
        }
        return value.length < 3 ? "Nama Merk Mobil Terlalu Pendek" : null;
      },
    },
  });

  const handleCarBrandSubmit = async (data: CreateCarBrandDto) => {
    form.validate();

    const submitData: CreateCarBrandDto = {
      ...data,
    };

    mutateCarBrand({
      data: submitData,
      id:
        formType === FormTypeEnum.UPDATE ? carBrandData?.data?._id : undefined,
    });
  };

  useEffect(() => {
    if (carBrandData?.data)
      form.initialize({
        ...carBrandData.data,
      });
  }, [carBrandData]);

  return {
    form,
    handleCarBrandSubmit,
  };
}

export default useCarBrandFormController;
