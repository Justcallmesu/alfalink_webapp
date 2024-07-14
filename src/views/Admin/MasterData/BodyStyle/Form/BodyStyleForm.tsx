import useBodyStyleFormController from "./BodyStyleFormController";
import { FormType } from "@/lib/interface/FormType";
import { Button, Card, Fieldset, Grid, Group, TextInput } from "@mantine/core";
import { Form } from "@mantine/form";
import { CreateCarTypeDto } from "@/lib/models/MasterData/CarType";

function CarTypeForm(formType: FormType) {
  const { form, handleBodyStyleSubmit } = useBodyStyleFormController(formType);

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateCarTypeDto) => handleBodyStyleSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Master Data Body Style">
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                key={form.key("Nama Body Style")}
                label="Nama Body Style"
                name="name"
                {...form.getInputProps("name")}
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

export default CarTypeForm;
