import { FormType } from "@/lib/interface/FormType";
import {
  Button,
  Card,
  Fieldset,
  Grid,
  Group,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { Form } from "@mantine/form";
import React from "react";
import useCustomerFormController from "./CustomerFormController";
import { DateInput } from "@mantine/dates";
import { CreateCustomerModel } from "@/lib/models/customer/customer";

function CustomerForm(formType: FormType) {
  const {
    /**
     * Controllers
     */
    form,
    handleSubmit,
  } = useCustomerFormController(formType);

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateCustomerModel) => handleSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Customer Personal Data">
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("fullName")}
                label="Nama Lengkap"
                name="fullName"
                {...form.getInputProps("fullName")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("nik")}
                label="NIK"
                name="nik"
                {...form.getInputProps("nik")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("address")}
                label="Alamat"
                name="address"
                {...form.getInputProps("address")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DateInput
                key={form.key("birthDate")}
                label="Tanggal Lahir"
                name="birthDate"
                {...form.getInputProps("birthDate")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("birthPlace")}
                label="Tempat Lahir"
                name="birthPlace"
                {...form.getInputProps("birthPlace")}
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Fieldset legend="Customer Contact Data">
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="Email"
                type="email"
                name="email"
                {...form.getInputProps("email")}
                key={form.key("email")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Nomor Telepon"
                name="phoneNumber"
                type="tel"
                {...form.getInputProps("phoneNumber")}
                key={form.key("phoneNumber")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Nomor Whatsapp"
                name="whatsappNumber"
                {...form.getInputProps("whatsappNumber")}
                key={form.key("whatsappNumber")}
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

export default CustomerForm;
