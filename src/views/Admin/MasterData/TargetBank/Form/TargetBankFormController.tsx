import { useEffect } from "react";
import useTargetBankFormModel from "./TargetBankFormModel";
import { useForm } from "@mantine/form";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";
import { CreateTargetBankDto } from "@/lib/models/MasterData/TargetBank";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useTargetBankFormController({ formType }: FormType) {
  const { targetBankData, mutateTargetBank } = useTargetBankFormModel();

  const form = useForm<CreateTargetBankDto>({
    mode: "uncontrolled",
    initialValues: {
      bankName: "",
      bankNumber: "",
      bankOwnerName: "",
    },
    validate: {
      bankName: (value) => {
        if (!value) {
          return "Nama Jenis Bahan Bakar Tidak Boleh Kosong !";
        }
        return value.length < 3
          ? "Nama Jenis Bahan Bakar Terlalu Pendek"
          : null;
      },
      bankNumber: (value) => {
        if (!value) {
          return "Nomor Rekening Tidak Boleh Kosong !";
        }
        return value.length < 3 ? "Nomor Rekening Terlalu Pendek" : null;
      },
      bankOwnerName: (value) => {
        if (!value) {
          return "Nama Pemilik Rekening Tidak Boleh Kosong !";
        }
        return value.length < 3 ? "Nama Pemilik Rekening Terlalu Pendek" : null;
      },
    },
  });

  const handleTargetBankSubmit = async (data: CreateTargetBankDto) => {
    console.log(data);
    form.validate();

    const submitData: CreateTargetBankDto = {
      ...data,
    };

    mutateTargetBank({
      data: submitData,
      id:
        formType === FormTypeEnum.UPDATE
          ? targetBankData?.data?._id
          : undefined,
    });
  };

  useEffect(() => {
    if (targetBankData?.data)
      form.initialize({
        ...targetBankData.data,
      });
  }, [targetBankData]);

  usePageTitle({ title: "Form Bank Tujuan", prevRoute: -1 });

  return {
    form,
    handleTargetBankSubmit,
  };
}

export default useTargetBankFormController;
