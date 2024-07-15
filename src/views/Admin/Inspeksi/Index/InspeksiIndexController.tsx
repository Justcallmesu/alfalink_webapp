import { useState } from "react";
import useInspeksiIndexModel from "./InspeksiIndexModel";
import { DataTableColumn } from "mantine-datatable";
import {
  InspeksiModel,
  UpdateInspeksiStatus,
} from "@/lib/models/Inspeksi/inspeksi";
import { useNavigate } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import {
  IconEdit,
  IconFile,
  IconSettingsCheck,
  IconTrash,
} from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import InspeksiStatusNode from "../Components/InspeksiStatusNode";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";

function useInspeksiIndexController() {
  const {
    InspectionsData,
    inspectionQuery,
    isInspectionsFetching,
    mutateDeleteInspection,
    mutateUpdateInspection,
    refetchInspections,
    setInspectionQuery,
  } = useInspeksiIndexModel();

  const handleInspectionSearch = (value: string) => {
    setInspectionQuery((prevState) => ({
      ...prevState,
      mobil: value,
    }));
  };

  const handleDelete = (id: string) => {
    mutateDeleteInspection({
      id,
    });
  };

  const handlePageChange = (page: number) => {
    setInspectionQuery((prevState) => ({
      ...prevState,
      page: page,
    }));
  };

  const navigate = useNavigate();
  const formModal = useForm<UpdateInspeksiStatus>({
    initialValues: {
      status: undefined,
    },
    validate: {
      status: (value) => {
        if (!value) {
          return "Status is required";
        }
      },
    },
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedInspeksi, setSelectedInspeksi] =
    useState<InspeksiModel | null>(null);

  const handleOpenFormModal = async (record: InspeksiModel) => {
    setSelectedInspeksi(record);
    formModal.reset();
    formModal.setFieldValue("status", record.status!);
    open();
  };

  const handleInspeksiStatusUpdate = async (values: UpdateInspeksiStatus) => {
    mutateUpdateInspection({
      id: selectedInspeksi?._id!,
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

  const InspectionTableColumns: DataTableColumn<InspeksiModel>[] = [
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
                  permissionsCode: PermissionsEnum.UPDATE_INSPEKSI,
                  type: "action",
                })
              }
            >
              <IconEdit />
            </ActionIcon>
            <Popconfirm
              description="Yakin ingin menghapus data ini ?"
              onConfirm={() => handleDelete(record._id)}
            >
              <ActionIcon
                variant="light"
                color="red"
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.DELETE_INSPEKSI,
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
                  permissionsCode: PermissionsEnum.UPDATE_INSPEKSI,
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
      accessor: "mobil",
      title: "No Polisi Mobil",
      render(record) {
        return record.mobil.noPolisi;
      },
    },
    {
      accessor: "namaMobil",
      title: "Nama Mobil",
      render(record) {
        return record.mobil.nama;
      },
    },
    {
      accessor: "merkMobil",
      title: "Merk Mobil",
      render(record) {
        return record.mobil.merk.name ?? "-";
      },
    },
    {
      accessor: "status",
      title: "Status",
      render(record) {
        return <InspeksiStatusNode status={record.status} />;
      },
    },
  ];

  usePageTitle({ title: "Inspeksi" });

  return {
    InspectionsData,
    inspectionQuery,
    isInspectionsFetching,
    handleInspectionSearch,
    handleDelete,
    InspectionTableColumns,
    mutateUpdateInspection,
    refetchInspections,
    navigate,
    handlePageChange,
    opened,
    close,
    formModal,
    handleCloseModal,
    handleInspeksiStatusUpdate,
  };
}

export default useInspeksiIndexController;
