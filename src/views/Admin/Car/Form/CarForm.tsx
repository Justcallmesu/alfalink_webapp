import useCarFormController from "./CarFormController";
import { FormType } from "@/lib/interface/FormType";
import {
  Button,
  Card,
  Fieldset,
  Grid,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import {
  CarTaxStatusEnum,
  CarTransmisionEnum,
  CreateCarDto,
  UpdateCarDto,
} from "@/lib/models/Car/Car";
import { Form } from "@mantine/form";

function CarForm({ formType }: FormType) {
  const {
    /**
     * Data
     */
    interiorColorData,
    exteriorColorData,
    carBrandData,
    bodyStyleData,
    fuelTypeData,
    carTypeData,
    carModelData,

    /**
     * Form
     */
    form,

    /**
     * Handlers
     */
    handleInteriorColorSearch,
    handleExteriorColorSearch,
    handleCarBrandSearch,
    handleBodyStyleSearch,
    handleFuelTypeSearch,
    handleCarTypeSearch,
    handleFormSubmit,
    handleCarModelSearch,
  } = useCarFormController({ formType });

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateCarDto | UpdateCarDto) =>
          handleFormSubmit(values)
        }
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Form Mobil">
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="Nama Mobil"
                name="name"
                {...form.getInputProps("nama")}
                withAsterisk
                key={form.key("nama")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  carBrandData?.data.map((value) => ({
                    label: value.name,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Merk Mobil"
                clearable
                placeholder="Merk Mobil"
                onSearchChange={(value) => handleCarBrandSearch(value)}
                name="merk"
                {...form.getInputProps("merk")}
                key={form.key("merk")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  carModelData?.data.map((value) => ({
                    label: value.name,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Model Mobil"
                clearable
                placeholder="Model Mobil"
                onSearchChange={(value) => handleCarModelSearch(value)}
                name="model"
                {...form.getInputProps("model")}
                key={form.key("model")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  bodyStyleData?.data.map((value) => ({
                    label: value.name,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Body Style Mobil"
                clearable
                placeholder="Body Style Mobil"
                onSearchChange={(value) => handleBodyStyleSearch(value)}
                name="bodyStyle"
                {...form.getInputProps("bodyStyle")}
                key={form.key("bodyStyle")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  interiorColorData?.data.map((value) => ({
                    label: value.name,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Warna Interior Mobil"
                placeholder="Warna Interior Mobil"
                clearable
                onSearchChange={(value) => handleInteriorColorSearch(value)}
                name="warnaInterior"
                {...form.getInputProps("warnaInterior")}
                key={form.key("warnaInterior")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  exteriorColorData?.data.map((value) => ({
                    label: value.name,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Warna Exterior Mobil"
                placeholder="Warna Exterior Mobil"
                clearable
                onSearchChange={(value) => handleExteriorColorSearch(value)}
                name="warnaExterior"
                {...form.getInputProps("warnaExterior")}
                key={form.key("warnaExterior")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  fuelTypeData?.data.map((value) => ({
                    label: value.name,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Jenis Bahan Bakar Mobil"
                placeholder="Jenis Bahan Bakar Mobil"
                clearable
                onSearchChange={(value) => handleFuelTypeSearch(value)}
                name="jenisBahanBakar"
                {...form.getInputProps("fuelType")}
                key={form.key("fuelType")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  carTypeData?.data.map((value) => ({
                    label: value.name,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Jenis Mobil"
                placeholder="Jenis Mobil"
                clearable
                onSearchChange={(value) => handleCarTypeSearch(value)}
                name="tipe"
                {...form.getInputProps("carType")}
                key={form.key("carType")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  Object.values(CarTransmisionEnum).map((value) => ({
                    label: value,
                    value: value,
                  })) ?? []
                }
                label="Transmisi Mobil"
                placeholder="Transmisi Mobil"
                withAsterisk
                name="transmisi"
                clearable
                {...form.getInputProps("transmisi")}
                key={form.key("transmisi")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Tahun Rakit Mobil"
                placeholder="Tahun Rakit Mobil"
                min={1990}
                name="tahunRakit"
                {...form.getInputProps("tahunRakit")}
                key={form.key("tahunRakit")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Nomor Polisi Mobil"
                placeholder="Nomor Polisi Mobil"
                withAsterisk
                name="noPolisi"
                {...form.getInputProps("noPolisi")}
                key={form.key("noPolisi")}
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Fieldset legend="Harga Mobil">
          <Grid>
            <Grid.Col span={6}>
              <NumberInput
                label="Harga Mobil"
                placeholder="Harga Mobil"
                min={0}
                prefix="Rp. "
                thousandSeparator=","
                withAsterisk
                name="harga"
                {...form.getInputProps("harga")}
                key={form.key("harga")}
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Fieldset legend="Pajak Mobil">
          <Grid>
            <Grid.Col span={6}>
              <Select
                data={Object.values(CarTaxStatusEnum)}
                searchable
                label="Status Pajak Mobil"
                placeholder="Status Pajak Mobil"
                {...form.getInputProps("statusPajak")}
                key={form.key("statusPajak")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Total Pajak Mobil"
                placeholder="Total Pajak Mobil"
                min={0}
                name="totalPajak"
                prefix="Rp. "
                thousandSeparator=","
                {...form.getInputProps("totalPajak")}
                key={form.key("totalPajak")}
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

export default CarForm;
