import { ChangePasswordDto } from "@/lib/models/Auth/auth";
import {
  Button,
  Card,
  Fieldset,
  Grid,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { Form } from "@mantine/form";
import React from "react";
import useChangePasswordController from "./ChangePasswordController";

function ChangePassword() {
  const { changePassword, form } = useChangePasswordController();

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: ChangePasswordDto) => changePassword(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Change User Password">
          <Grid>
            <Grid.Col span={12}>
              <PasswordInput
                key={form.key("password")}
                label="Password Baru"
                name="password"
                {...form.getInputProps("password")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <PasswordInput
                key={form.key("confirmPassword")}
                label="Konfirmasi Password"
                name="confirmPassword"
                {...form.getInputProps("confirmPassword")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <PasswordInput
                key={form.key("oldPassword")}
                label="Password Lama"
                name="oldPassword"
                {...form.getInputProps("oldPassword")}
                withAsterisk
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Group>
          <Button type="submit" color="blue">
            Submit
          </Button>
        </Group>
      </Form>
    </Card>
  );
}

export default ChangePassword;
