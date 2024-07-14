import { useForm } from "@mantine/form";
import { UpdateMeDto } from "@/lib/models/Auth/auth";
import useUpdateMeModel from "./UpdateMeModel";
import { getUserData } from "@/lib/utils/LocalStorage";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useUpdateMeController() {
  const { mutateUpdateMe } = useUpdateMeModel();

  const form = useForm<UpdateMeDto>({
    initialValues: {
      username: getUserData().username || "",
      name: getUserData().name || "",
    },
    validate: {
      username: (value) => {
        if (!value) {
          return "Username is required";
        }

        if (value.length < 3) {
          return "Username must be at least 3 characters long";
        }
      },
      name: (value) => {
        if (!value) {
          return "name is required";
        }

        if (value.length < 3) {
          return "Name must be at least 3 characters long";
        }
      },
    },
  });

  const updateMe = (values: UpdateMeDto) => {
    mutateUpdateMe({ data: values });
  };

  usePageTitle({ prevRoute: "/admin", title: "Update Me" });

  return {
    form,
    updateMe,
  };
}

export default useUpdateMeController;
