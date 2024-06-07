import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import useAdminLoginModel from "./AdminLoginModel";
import { setUserData } from "@/lib/utils/LocalStorage";
import { getMe } from "@/lib/services/Auth/auth.service";

function useAdminLoginController() {
  /**
   * Models
   */
  const { isPending, queryLogin } = useAdminLoginModel();

  /**
   * Navigate
   */
  const navigate = useNavigate();

  const loginForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
    transformValues(values) {
      return {
        username: values.username.trim(),
        password: values.password.trim(),
      };
    },
    validate: {
      username: (value) => {
        if (!value.length) return "Username Harus Diisi";

        if (value.trim().includes(" "))
          return "Username Tidak Boleh Mengandung Spasi";
      },

      password: (value) => {
        if (!value.length) return "Password Harus Diisi";

        if (value.length < 10) return "Password Minimal 10 Karakter";
      },
    },
  });

  /**
   * Handle Login
   */
  const handleLogin = async () => {
    loginForm.validate();

    const { password, username } = loginForm.getValues();

    try {
      const res = await queryLogin({ username, password });

      if (res) {
        notifications.show({
          title: "Success",
          message: "Login Berhasil",
          color: "green",
        });

        loginForm.reset();
        const userData = await getMe();

        await setUserData(userData.data);

        navigate("/admin");
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response && error?.response?.status === 400) {
        notifications.show({
          title: "Error",
          message: error.response.data.message,
          color: "red",
        });
      }
    }
  };

  return {
    /**
     * Controllers
     */
    loginForm,
    handleLogin,

    /**
     * Models
     */
    isPending,
  };
}

export default useAdminLoginController;
