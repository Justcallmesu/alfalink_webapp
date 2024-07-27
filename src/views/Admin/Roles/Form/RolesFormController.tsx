import { useEffect, useState } from "react";
import useRolesFormModel from "./RolesFormModel";
import { useForm } from "@mantine/form";
import { CreateRolesDto } from "@/lib/models/Roles/Roles";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";
import { PermissionsModel } from "@/lib/models/Auth/auth";
import { notificationSystem } from "@/lib/notification-system/NotificationSystem";
import { NotificationSystemType } from "@/lib/notification-system/enum/NotificationSystemType";

function useRolesFormController() {
	const { rolesData, permissionsData, mutatePostPatchRole } =
		useRolesFormModel();

	const [groupedPermissions, setGroupedPermissions] = useState<{
		[key: string]: PermissionsModel[];
	}>({});

	const form = useForm<CreateRolesDto>({
		initialValues: {
			roleName: "",
			roleDescription: "",
			permissionsId: [],
		},
		validate: {
			roleName: (value) => value.length < 3 && "Nama role minimal 3 karakter",
			roleDescription: (value) =>
				value.length < 3 && "Deskripsi role minimal 3 karakter",
			permissionsId: (value) => {
				if (value.length === 0) {
					notificationSystem({
						message: "Permissions harus diisi",
						title: "Error",
						notificationType: NotificationSystemType.ERROR,
					});
					return "Permissions harus diisi";
				}
			},
		},
	});

	const handleFormSubmit = (values: CreateRolesDto) => {
		mutatePostPatchRole({
			id: rolesData?.data._id,
			data: values,
		});
	};

	usePageTitle({ title: "Roles Form", prevRoute: -1 });

	useEffect(() => {
		if (permissionsData) {
			const grouped = permissionsData.data.reduce(
				(acc, item: PermissionsModel) => {
					if (!acc[item.permissionGroup]) {
						acc[item.permissionGroup] = [];
					}
					acc[item.permissionGroup].push(item);
					return acc;
				},
				{} as {
					[key: string]: PermissionsModel[];
				}
			);

			setGroupedPermissions(grouped);
		}
	}, [permissionsData, rolesData]);

	useEffect(() => {
		if (rolesData) {
			form.initialize({
				roleName: rolesData.data.roleName,
				roleDescription: rolesData.data.roleDescription,
				permissionsId: rolesData.data.permissionsId.map(
					(item: PermissionsModel) => item._id
				),
			});
		}
	}, [rolesData, permissionsData]);

	return {
		form,
		handleFormSubmit,
		permissionsData,
		groupedPermissions,
	};
}

export default useRolesFormController;
