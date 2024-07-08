import React, { useEffect } from "react";
import useColorFormModel from "./ColorFormModel";
import { useForm } from "@mantine/form";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";
import { CreateColorDto } from "@/lib/models/MasterData/Color";

function useColorFormController({ formType }: FormType) {
  const { colorData, mutateColor } = useColorFormModel();

  const form = useForm<CreateColorDto>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => {
        if (!value) {
          return "Nama Warna Tidak Boleh Kosong !";
        }
        return value.length < 3 ? "Nama Warna Terlalu Pendek" : null;
      },
    },
  });

  const handleColorSubmit = async (data: CreateColorDto) => {
    form.validate();

    const submitData: CreateColorDto = {
      ...data,
    };

    mutateColor({
      data: submitData,
      id: formType === FormTypeEnum.UPDATE ? colorData?.data?._id : undefined,
    });
  };

  useEffect(() => {
    if (colorData?.data)
      form.initialize({
        ...colorData.data,
      });
  }, [colorData]);

  return {
    form,
    handleColorSubmit,
  };
}

export default useColorFormController;
