import { useForm } from "@mantine/form";
import React, { useEffect } from "react";
import useCustomerFormModel from "./CustomerFormModel";
import { CreateCustomerModel } from "@/lib/models/customer/customer";
import dayjs from "dayjs";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";

function useCustomerFormController({ formType }: FormType) {
  const { mutatePostPatchCustomer, customerData } = useCustomerFormModel();

  const form = useForm<CreateCustomerModel>({
    mode: "uncontrolled",
    initialValues: {
      address: "",
      birthDate: undefined,
      birthPlace: "",
      email: "",
      fullName: "",
      nik: "",
      phoneNumber: "",
      whatsappNumber: "",
    },
    validate: {
      fullName: (value) => {
        if (value.length < 3) {
          return "Nama lengkap minimal 3 karakter";
        }
      },
      nik: (value) => {
        if (!value) {
          return "NIK tidak boleh kosong";
        }
      },
      phoneNumber: (value) => {
        if (!value) {
          return "Nomor telepon harus diisi";
        }
      },
      address: (value) => {
        if (!value.length) {
          return "Alamat harus diisi";
        }
      },
    },
    transformValues(values) {
      return {
        ...values,
        phoneNumber: `${values?.phoneNumber?.toString()}`,
        whatsappNumber: `${values?.whatsappNumber?.toString()}`,
      };
    },
  });

  const handleSubmit = async (data: CreateCustomerModel) => {
    form.validate();

    const submitData: CreateCustomerModel = {
      ...data,
    };

    mutatePostPatchCustomer({
      data: submitData,
      id:
        formType === FormTypeEnum.UPDATE ? customerData?.data._id! : undefined,
    });
  };

  useEffect(() => {
    if (customerData?.data)
      form.initialize({
        ...customerData.data,
        birthDate: dayjs(customerData.data.birthDate),
      });
  }, [customerData]);

  return {
    /**
     * Controllers
     */
    form,
    handleSubmit,
  };
}

export default useCustomerFormController;
