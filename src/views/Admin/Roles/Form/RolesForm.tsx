import React from "react";
import useRolesFormController from "./RolesFormController";
import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Divider,
  Fieldset,
  Grid,
  Group,
  TextInput,
  Textarea,
} from "@mantine/core";
import { Form } from "@mantine/form";
import { CreateRolesDto } from "@/lib/models/Roles/Roles";
import { PermissionsModel } from "@/lib/models/Auth/auth";

function RolesForm() {
  const { form, handleFormSubmit, groupedPermissions } =
    useRolesFormController();

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateRolesDto) => handleFormSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Details Roles">
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("role_name")}
                label="Nama Role"
                name="role_name"
                {...form.getInputProps("role_name")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                key={form.key("role_description")}
                label="Deskripsi Role"
                name="role_description"
                {...form.getInputProps("role_description")}
                withAsterisk
              />
            </Grid.Col>
          </Grid>
        </Fieldset>

        <Divider label="Permissions"></Divider>
        {Object.keys(groupedPermissions).map((group) => (
          <Fieldset key={group} legend={group}>
            <Grid>
              {groupedPermissions[group].map((permission: PermissionsModel) => (
                <Grid.Col span={6} key={permission._id}>
                  <Checkbox
                    label={`${permission.permission_name}`.replaceAll("_", " ")}
                    value={permission._id}
                    checked={form.values.permissions_id.includes(
                      permission._id
                    )}
                    onChange={(event) => {
                      const value = event.currentTarget.value;
                      const permissions_id = form.values.permissions_id;
                      if (permissions_id.includes(value)) {
                        form.setFieldValue(
                          "permissions_id",
                          permissions_id.filter((id) => id !== value)
                        );
                      } else {
                        form.setFieldValue("permissions_id", [
                          ...permissions_id,
                          value,
                        ]);
                      }
                    }}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Fieldset>
        ))}

        <Group>
          <Button type="submit">Submit</Button>
        </Group>
      </Form>
    </Card>
  );
}

export default RolesForm;
