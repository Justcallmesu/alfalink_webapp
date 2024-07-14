import React, { useEffect } from "react";
import useBodyStyleFormModel from "./BodyStyleFormModel";
import { useForm } from "@mantine/form";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";
import { CreateBodyStyleDto } from "@/lib/models/MasterData/BodyStyle";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useBodyStyleFormController({ formType }: FormType) {
  const { bodyStyleData, mutateBodyStyle } = useBodyStyleFormModel();

  const form = useForm<CreateBodyStyleDto>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => {
        if (!value) {
          return "Nama Tipe Mobil Tidak Boleh Kosong !";
        }
        return value.length < 3 ? "Nama Tipe Mobil Terlalu Pendek" : null;
      },
    },
  });

  const handleBodyStyleSubmit = async (data: CreateBodyStyleDto) => {
    form.validate();

    const submitData: CreateBodyStyleDto = {
      ...data,
    };

    mutateBodyStyle({
      data: submitData,
      id:
        formType === FormTypeEnum.UPDATE ? bodyStyleData?.data?._id : undefined,
    });
  };

  useEffect(() => {
    if (bodyStyleData?.data)
      form.initialize({
        ...bodyStyleData.data,
      });
  }, [bodyStyleData]);

  usePageTitle({ title: "Form Body Style", prevRoute: -1 });

  return {
    form,
    handleBodyStyleSubmit,
  };
}

export default useBodyStyleFormController;
