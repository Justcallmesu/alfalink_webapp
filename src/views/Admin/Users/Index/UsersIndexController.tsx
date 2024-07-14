import React from "react";
import useUsersIndexModel from "./UsersIndexModel";
import { DataTableColumn } from "mantine-datatable";
import { UserModel } from "@/lib/models/Auth/auth";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import dayjs from "dayjs";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useUsersIndexController() {
  const {
    isUserFetching,
    refetchUser,
    setUserQuery,
    userQuery,
    usersData,
    mutateDeleteUser,
  } = useUsersIndexModel();

  const handleUserSearch = (value: string) => {
    setUserQuery((prev) => ({ ...prev, name: value }));
  };

  const handlePageChange = (page: number) => {
    setUserQuery((prev) => ({ ...prev, page }));
  };

  const handleDeleteUser = (id: string) => {
    mutateDeleteUser({ id });
  };

  const navigate = useNavigate();

  const tableColumns: DataTableColumn<UserModel>[] = [
    {
      accessor: "actions",
      title: "Actions",
      textAlign: "center",
      render(record) {
        return (
          <div className="flex gap-3 justify-center">
            <ActionIcon
              variant="light"
              color="orange"
              disabled={record.role_id.role_name === "Super Admin"}
              onClick={() => navigate(`./${record._id}/edit`)}
            >
              <IconEdit />
            </ActionIcon>
            <Popconfirm
              description="Yakin ingin menghapus data ini ?"
              onConfirm={() => handleDeleteUser(record._id)}
            >
              <ActionIcon
                variant="light"
                color="red"
                disabled={record.role_id.role_name === "Super Admin"}
              >
                <IconTrash />
              </ActionIcon>
            </Popconfirm>
          </div>
        );
      },
    },
    {
      accessor: "name",
      title: "Nama User",
    },
    {
      accessor: "username",
      title: "Username",
    },
    {
      accessor: "role_id.role_name",
      title: "Role",
      render(record) {
        return record.role_id.role_name;
      },
    },
    {
      accessor: "date_created",
      title: "Tanggal Dibuat",
      render(record) {
        return dayjs(record.date_created).format("DD MMM YYYY");
      },
    },
  ];

  usePageTitle({ title: "Users" });

  return {
    isUserFetching,
    refetchUser,
    userQuery,
    usersData,
    handleUserSearch,
    handlePageChange,
    tableColumns,
    navigate,
  };
}

export default useUsersIndexController;
