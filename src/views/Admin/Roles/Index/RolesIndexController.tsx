import useRolesIndexModel from "./RolesIndexModel";
import { useNavigate } from "react-router-dom";
import { DataTableColumn } from "mantine-datatable";
import { RoleModel } from "@/lib/models/Auth/auth";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";

function useRolesIndexController() {
	const {
		isRoleFetching,
		mutateDeleteRole,
		refetchRole,
		roleData,
		setRoleQuery,
	} = useRolesIndexModel();

	const handleRoleSearch = (value: string) => {
		setRoleQuery((prev) => ({ ...prev, name: value }));
	};

	const handlePageChange = (page: number) => {
		setRoleQuery((prev) => ({ ...prev, page }));
	};

	const handleDeleteRole = (id: string) => {
		mutateDeleteRole({ id });
	};

	const navigate = useNavigate();

	const tableColumns: DataTableColumn<RoleModel>[] = [
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
								record?.roleName === "Super Admin" ||
								!checkPermissions({
									permissionsCode: PermissionsEnum.UPDATE_ROLE,
									type: "action",
								})
							}
							onClick={() => navigate(`./${record._id}/edit`)}>
							<IconEdit />
						</ActionIcon>
						<Popconfirm
							description="Yakin ingin menghapus data ini ?"
							onConfirm={() => handleDeleteRole(record._id)}>
							<ActionIcon
								variant="light"
								color="red"
								disabled={
									record?.roleName === "Super Admin" ||
									!checkPermissions({
										permissionsCode: PermissionsEnum.DELETE_ROLE,
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
			accessor: "roleName",
			title: "Nama Role",
		},
		{
			accessor: "roleDescription",
			title: "Description",
		},
	];

	usePageTitle({ title: "Roles" });

	return {
		isRoleFetching,
		refetchRole,
		roleData,
		handleRoleSearch,
		handlePageChange,
		tableColumns,
		navigate,
	};
}

export default useRolesIndexController;
