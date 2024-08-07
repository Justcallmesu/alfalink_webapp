import useUsersIndexModel from "./UsersIndexModel";
import { DataTableColumn } from "mantine-datatable";
import { UserModel } from "@/lib/models/Auth/auth";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import dayjs from "dayjs";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";

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
							disabled={
								record?.roleId?.roleName === "Super Admin" ||
								!checkPermissions({
									permissionsCode: PermissionsEnum.UPDATE_USER,
									type: "action",
								})
							}
							onClick={() => navigate(`./${record._id}/edit`)}>
							<IconEdit />
						</ActionIcon>
						<Popconfirm
							description="Yakin ingin menghapus data ini ?"
							onConfirm={() => handleDeleteUser(record._id)}>
							<ActionIcon
								variant="light"
								color="red"
								disabled={
									record?.roleId?.roleName === "Super Admin" ||
									!checkPermissions({
										permissionsCode: PermissionsEnum.DELETE_USER,
										type: "action",
									})
								}>
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
			accessor: "roleId.roleName",
			title: "Role",
			render(record) {
				return record?.roleId?.roleName;
			},
		},
		{
			accessor: "dateCreated",
			title: "Tanggal Dibuat",
			render(record) {
				return dayjs(record.dateCreated).format("DD MMM YYYY");
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
