import { Button, Card, Fieldset, Grid, Group, TextInput } from "@mantine/core";
import React from "react";
import useCarBrandFormController from "./CarBrandFormController";
import { FormType } from "@/lib/interface/FormType";
import { Form } from "@mantine/form";
import { CreateCarBrandDto } from "@/lib/models/MasterData/CarBrand";

function CarBrandForm(props: FormType) {
  const { form, handleCarBrandSubmit } = useCarBrandFormController(props);

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateCarBrandDto) => handleCarBrandSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Master Data Merk Mobil">
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                key={form.key("Nama Merk Mobil")}
                label="Nama Merk Mobil"
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

export default CarBrandForm;
