import React from "react";
import useCarModelFormController from "./CarModelFormController";
import { FormType } from "@/lib/interface/FormType";
import { Button, Card, Fieldset, Grid, Group, TextInput } from "@mantine/core";
import { Form } from "@mantine/form";
import { CreateCarModelDto } from "@/lib/models/MasterData/CarModel";

function CarModelForm(formType: FormType) {
  const { form, handleCarModelSubmit } = useCarModelFormController(formType);

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateCarModelDto) => handleCarModelSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Master Data Model Mobil">
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                key={form.key("Nama Model Mobil")}
                label="Nama Model Mobil"
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

export default CarModelForm;
