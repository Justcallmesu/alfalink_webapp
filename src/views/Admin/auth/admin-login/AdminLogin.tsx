import {
  Button,
  Divider,
  Group,
  PasswordInput,
  TextInput,
  rem,
} from "@mantine/core";
import { Form } from "@mantine/form";
import { IconPassword, IconUser } from "@tabler/icons-react";
import useAdminLoginController from "./AdminLoginController";

function AdminLogin() {
  const {
    /**
     * Controllers
     */
    handleLogin,
    loginForm,

    /**
     * Models
     */
    isPending,
  } = useAdminLoginController();

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
