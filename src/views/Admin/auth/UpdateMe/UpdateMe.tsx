import { UpdateMeDto } from "@/lib/models/Auth/auth";
import { Button, Card, Fieldset, Grid, Group, TextInput } from "@mantine/core";
import { Form } from "@mantine/form";
import useUpdateMeController from "./UpdateMeController";

function ChangePassword() {
  const { updateMe, form } = useUpdateMeController();

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: UpdateMeDto) => updateMe(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Update User Data">
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                key={form.key("name")}
                label="Nama"
                name="name"
                {...form.getInputProps("name")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                key={form.key("username")}
                label="Username"
                name="username"
                {...form.getInputProps("username")}
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
