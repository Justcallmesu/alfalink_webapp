import { useEffect } from "react";
import useUsersFormModel from "./UsersFormModel";
import { useForm } from "@mantine/form";
import { CreateUsersDto } from "@/lib/models/Users/Users";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useUsersFormController() {
	const { mutatePostPatchUser, rolesModel, setRoleQuery, userData } =
		useUsersFormModel();

	const handleRoleSearch = (value: string) => {
		setRoleQuery((prev) => ({ ...prev, roleName: value }));
	};

	const form = useForm<CreateUsersDto>({
		initialValues: {
			name: "",
			username: "",
			password: "",
			roleId: "",
		},
		validate: {
			name: (value) => value.length < 3 && "Nama lengkap minimal 3 karakter",
			username: (value) => value.length < 3 && "Username minimal 3 karakter",
			password: (value) => {
				if (value.length < 10) {
					return "Password minimal 10 karakter";
				}
			},
			roleId: (value) => !value && "Role harus diisi",
		},
	});

	const handleFormSubmit = (values: CreateUsersDto) => {
		mutatePostPatchUser({
			id: userData?.data._id,
			data: values,
		});
	};

	usePageTitle({ title: "Users Form", prevRoute: -1 });

	useEffect(() => {
		if (userData) {
			form.setValues({
				name: userData.data.name,
				username: userData.data.username,
				roleId: userData.data.roleId._id,
			});
		}
	}, [userData]);

	return {
		form,
		handleFormSubmit,
		rolesModel,
		handleRoleSearch,
	};
}

export default useUsersFormController;
