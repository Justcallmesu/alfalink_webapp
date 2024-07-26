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
      role_name: "",
      role_description: "",
      permissions_id: [],
    },
    validate: {
      role_name: (value) => value.length < 3 && "Nama role minimal 3 karakter",
      role_description: (value) =>
        value.length < 3 && "Deskripsi role minimal 3 karakter",
      permissions_id: (value) => {
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
          if (!acc[item.permission_group]) {
            acc[item.permission_group] = [];
          }
          acc[item.permission_group].push(item);
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
        role_name: rolesData.data.role_name,
        role_description: rolesData.data.role_description,
        permissions_id: rolesData.data.permissions_id.map(
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
