import React from "react";
import useUsersFormController from "./UsersFormController";
import {
  Button,
  Card,
  Fieldset,
  Grid,
  Group,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { CreateUsersDto } from "@/lib/models/Users/Users";
import { Form } from "@mantine/form";

function UsersForm() {
  const {
    /**
     * Controllers
     */
    form,
    handleFormSubmit,
    rolesModel,
    handleRoleSearch,
  } = useUsersFormController();

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateUsersDto) => handleFormSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Details User">
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("name")}
                label="Nama Lengkap"
                name="nama"
                {...form.getInputProps("name")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("username")}
                label="Username"
                name="username"
                {...form.getInputProps("username")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <PasswordInput
                key={form.key("password")}
                label="Password"
                name="password"
                {...form.getInputProps("password")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                key={form.key("role_id")}
                label="Role User"
                name="role_id"
                {...form.getInputProps("role_id")}
                data={rolesModel?.data.map((role) => ({
                  value: role._id,
                  label: role.role_name,
                }))}
                withAsterisk
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Group>
          <Button type="submit">Submit</Button>
        </Group>
      </Form>
    </Card>
  );
}

export default UsersForm;
