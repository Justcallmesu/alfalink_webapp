import { useGetMe, useLoginQuery } from "@/lib/lib/queries/auth.query";
import { AuthKeys } from "@/lib/lib/queryKeys/Auth/AuthKeys";
import { getMe } from "@/lib/lib/services/Auth/auth.service";
import { setUserData } from "@/lib/lib/utils/LocalStorage";
import {
  Button,
  Divider,
  Group,
  PasswordInput,
  TextInput,
  rem,
} from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconPassword, IconUser } from "@tabler/icons-react";
import { useState } from "react";

function AdminLogin() {
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

  const { mutateAsync: queryLogin, isPending } = useLoginQuery();

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

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="flex flex-col">
        <div>
          <h3 className="text-2xl m-0">Hello,</h3>
          <h3 className="text-3xl m-0 font-bold text-[#6C63FF]">
            Welcome Back
          </h3>
        </div>
      </div>
      <Divider size={"md"} />
      <Form
        form={loginForm}
        onSubmit={handleLogin}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <TextInput
          description="Enter your registered username"
          withAsterisk
          label="Username"
          placeholder="Username"
          leftSection={<IconUser style={{ width: rem(16), height: rem(16) }} />}
          key={loginForm.key("username")}
          {...loginForm.getInputProps("username")}
        />
        <PasswordInput
          description="Enter your registered password"
          withAsterisk
          label="Password"
          placeholder="Password"
          type="password"
          leftSection={
            <IconPassword style={{ width: rem(16), height: rem(16) }} />
          }
          key={loginForm.key("password")}
          {...loginForm.getInputProps("password")}
        />
        <Group justify="flex-end">
          <Button
            type="submit"
            variant="filled"
            className="w-2/3"
            loading={isPending}
          >
            Login
          </Button>
        </Group>
      </Form>
    </div>
  );
}

export default AdminLogin;
