import React from "react";
import { useCarIndexModel } from "./CarIndexModel";
import { DataTableColumn } from "mantine-datatable";
import {
  CarModel,
  CarTaxStatusEnum,
  StatusMobil,
  UpdateCarStatusDto,
} from "@/lib/models/Car/Car";
import { ActionIcon, Select } from "@mantine/core";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import {
  IconEdit,
  IconFile,
  IconSettingsCheck,
  IconTrash,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import CarStatusNode from "../Components/CarStatusNode/CarStatusNode";
import { modals } from "@mantine/modals";
import { Form, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function useCarIndexController() {
  const {
    carData,
    carRefetech,
    isCarFetching,
    mutateDeleteCar,
    setCarQuery,
    mutateUpdateCarStatus,
  } = useCarIndexModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Handle Delete Car
   */
  const handleDeleteCar = (id: string) => {
    mutateDeleteCar({ id });
  };

  /**
   * Handle Car Name Search
   */
  const handleCarNameSearch = (name: string) => {
    setCarQuery((prev) => ({ ...prev, nama: name }));
  };

  /**
   * Handle Page Change
   */
  const handlePageChange = (page: number) => {
    setCarQuery((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const formModal = useForm<UpdateCarStatusDto>({
    mode: "uncontrolled",
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedCar, setSelectedCar] = React.useState<CarModel | null>(null);

  const handleOpenFormModal = async (record: CarModel) => {
    setSelectedCar(record);
    formModal.reset();
    formModal.setFieldValue("status", record.status!);
    open();
  };

  const handleUpdateCarStatus = async (values: UpdateCarStatusDto) => {
    mutateUpdateCarStatus({
      id: selectedCar?._id!,
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

  /**
   * Car Table Columns
   */
  const CarTableColumns: DataTableColumn<CarModel>[] = [
    {
      accessor: "actions",
      title: "Actions",
      textAlign: "center",
      width: 150,
      render(record) {
        return (
          <div className="flex gap-3 justify-center">
            <ActionIcon
              variant="light"
              color="blue"
              onClick={() => navigate(`./${record._id}`)}
            >
              <IconFile />
            </ActionIcon>
            <ActionIcon
              variant="light"
              color="orange"
              onClick={() => navigate(`./${record._id}/edit`)}
              disabled={
                !checkPermissions({
                  permissionsCode: PermissionsEnum.UPDATE_MOBIL,
                  type: "action",
                })
              }
            >
              <IconEdit />
            </ActionIcon>
            <Popconfirm
              description="Yakin ingin menghapus data ini ?"
              onConfirm={() => handleDeleteCar(record._id)}
            >
              <ActionIcon
                variant="light"
                color="red"
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.DELETE_MOBIL,
                    type: "action",
                  })
                }
              >
                <IconTrash />
              </ActionIcon>
            </Popconfirm>

            <ActionIcon
              variant="light"
              color="orange"
              onClick={() => handleOpenFormModal(record)}
              disabled={
                !checkPermissions({
                  permissionsCode: PermissionsEnum.UPDATE_MOBIL,
                  type: "action",
                })
              }
            >
              <IconSettingsCheck />
            </ActionIcon>
          </div>
        );
      },
    },
    {
      accessor: "nama",
      title: "Nama Mobil",
    },
    {
      accessor: "merk",
      title: "Merk Mobil",
      render(record) {
        return record?.merk?.name ?? "-";
      },
    },
    {
      accessor: "bodyStyle",
      title: "Body Style",
      render(record) {
        return record?.bodyStyle?.name ?? "-";
      },
    },
    {
      accessor: "transmisi",
      title: "Transmisi",
      render(record) {
        return record?.transmisi ?? "-";
      },
    },
    {
      accessor: "status",
      title: "Status Mobil",
      render(record) {
        return <CarStatusNode carRecord={record} />;
      },
    },
  ];

  usePageTitle({ title: "Mobil" });

  return {
    carData,
    carRefetech,
    isCarFetching,
    handleCarNameSearch,
    CarTableColumns,
    handlePageChange,
    navigate,
    opened,
    formModal,
    handleUpdateCarStatus,
    handleCloseModal,
  };
}

export default useCarIndexController;
