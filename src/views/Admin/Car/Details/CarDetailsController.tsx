import useCarDetailsModels from "./CarDetailsModels";
import { useNavigate } from "react-router-dom";
import { UpdateCarStatusDto } from "@/lib/models/Car/Car";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useCarDetailsController() {
  const {
    carData,
    isCarFetching,
    mutateDeleteCar,
    refetchCar,
    mutateUpdateCarStatus,
  } = useCarDetailsModels();

  const handleDeleteCar = () => {
    mutateDeleteCar({ id: carData?.data._id });
  };

  const navigate = useNavigate();

  const formModal = useForm<UpdateCarStatusDto>({
    mode: "uncontrolled",
  });
  const [opened, { open, close }] = useDisclosure(false);

  const handleOpenFormModal = async () => {
    formModal.reset();
    formModal.setFieldValue("status", carData?.data.status!);
    open();
  };

  const handleUpdateCarStatus = async (values: UpdateCarStatusDto) => {
    mutateUpdateCarStatus({
      id: carData?.data._id!,
      data: {
        status: values.status,
      },
    });
    formModal.reset();
    close();
  };

  const handleCloseModal = () => {
    formModal.reset();
    close();
  };

  usePageTitle({ title: "Detail Mobil", prevRoute: "/admin/cars" });

  return {
    carData,
    isCarFetching,
    handleDeleteCar,
    refetchCar,
    navigate,
    formModal,
    opened,
    handleOpenFormModal,
    handleUpdateCarStatus,
    handleCloseModal,
  };
}

export default useCarDetailsController;
