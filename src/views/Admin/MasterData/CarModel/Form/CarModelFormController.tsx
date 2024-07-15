import { useEffect } from "react";
import useCarModelFormModel from "./CarModelFormModel";
import { CreateCarModelDto } from "@/lib/models/MasterData/CarModel";
import { useForm } from "@mantine/form";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useCarModelFormController({ formType }: FormType) {
  const { carModelData, mutateCarModel } = useCarModelFormModel();

  const form = useForm<CreateCarModelDto>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => {
        if (!value) {
          return "Nama Model Mobil Tidak Boleh Kosong !";
        }
        return value.length < 3 ? "Nama Model Mobil Terlalu Pendek" : null;
      },
    },
  });

  const handleCarModelSubmit = async (data: CreateCarModelDto) => {
    form.validate();

    const submitData: CreateCarModelDto = {
      ...data,
    };

    mutateCarModel({
      data: submitData,
      id:
        formType === FormTypeEnum.UPDATE ? carModelData?.data?._id : undefined,
    });
  };

  useEffect(() => {
    if (carModelData?.data)
      form.initialize({
        ...carModelData.data,
      });
  }, [carModelData]);

  usePageTitle({ title: "Form Model Mobil", prevRoute: -1 });

  return {
    form,
    handleCarModelSubmit,
  };
}

export default useCarModelFormController;
