import useChangePasswordModel from "./ChangePasswordModel";
import { useForm } from "@mantine/form";
import { ChangePasswordDto } from "@/lib/models/Auth/auth";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useChangePasswordController() {
  const { mutateUpdatePassword } = useChangePasswordModel();

  const form = useForm<ChangePasswordDto>({
    initialValues: {
      password: "",
      oldPassword: "",
      confirmPassword: "",
    },
    validate: {
      password: (value) => {
        if (value.length < 10) {
          return "Password must be at least 10 characters long";
        }
      },
      confirmPassword: (value, values) => {
        if (value.length < 10) {
          return "Password must be at least 10 characters long";
        }
        if (value !== values.password) {
          return "Passwords do not match";
        }
      },
      oldPassword: (value) => {
        if (value.length < 10) {
          return "Password must be at least 10 characters long";
        }
      },
    },
  });

  const changePassword = (values: ChangePasswordDto) => {
    mutateUpdatePassword({ data: values });
  };

  usePageTitle({ prevRoute: "/admin", title: "Change Password" });

  return {
    form,
    changePassword,
  };
}

export default useChangePasswordController;
