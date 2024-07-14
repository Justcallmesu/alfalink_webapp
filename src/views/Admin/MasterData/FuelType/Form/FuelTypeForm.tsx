import useColorFormController from "./FuelTypeFormController";
import { FormType } from "@/lib/interface/FormType";
import { Button, Card, Fieldset, Grid, Group, TextInput } from "@mantine/core";
import { Form } from "@mantine/form";
import { CreateFuelTypeDto } from "@/lib/models/MasterData/FuelType";

function colorForm(formType: FormType) {
  const { form, handleColorSubmit } = useColorFormController(formType);

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateFuelTypeDto) => handleColorSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Master Data Jenis Bahan Bakar">
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                key={form.key("Nama Jenis Bahan Bakar")}
                label="Nama Jenis Bahan Bakar"
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

export default colorForm;
