import { useEffect } from "react";
import useCarModelFormModel from "./CarTypeFormModel";
import { useForm } from "@mantine/form";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";
import { CreateCarTypeDto } from "@/lib/models/MasterData/CarType";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useCarTypeFormController({ formType }: FormType) {
  const { carTypeData, mutateCarType } = useCarModelFormModel();

  const form = useForm<CreateCarTypeDto>({
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

  const handleCarTypeSubmit = async (data: CreateCarTypeDto) => {
    form.validate();

    const submitData: CreateCarTypeDto = {
      ...data,
    };

    mutateCarType({
      data: submitData,
      id: formType === FormTypeEnum.UPDATE ? carTypeData?.data?._id : undefined,
    });
  };

  useEffect(() => {
    if (carTypeData?.data)
      form.initialize({
        ...carTypeData.data,
      });
  }, [carTypeData]);

  usePageTitle({ title: "Form Tipe Mobil", prevRoute: -1 });

  return {
    form,
    handleCarTypeSubmit,
  };
}

export default useCarTypeFormController;
