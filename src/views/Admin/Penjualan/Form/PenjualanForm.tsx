import usePenjualanFormController from "./PenjualanFormController";
import {
  Button,
  Card,
  Checkbox,
  Fieldset,
  Grid,
  Group,
  NumberInput,
  Select,
} from "@mantine/core";
import {
  CreatePenjualanDto,
  metodePembayaran,
} from "@/lib/models/penjualan/Penjualan";
import { DateInput } from "@mantine/dates";
import { Form } from "@mantine/form";
import { FormType } from "@/lib/interface/FormType";
import { FormTypeEnum } from "@/lib/enum/FormType";

function PenjualanForm(props: FormType) {
  const { formType } = props;

  const {
    dataCar,
    dataCustomer,
    form,
    handleCarSearch,
    handleCustomerSearch,
    handleSubmit,
    handleTargetBankSearch,
    targetBankData,
    handleCarOnChange,
  } = usePenjualanFormController();

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreatePenjualanDto) => handleSubmit(values)}
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Data Penjualan">
          <Grid>
            <Grid.Col span={6}>
              <Select
                data={
                  dataCar?.data.map((value) => ({
                    label: `${value.nama} - ${value.noPolisi}`,
                    value: value._id,
                  })) ?? []
                }
                searchable
                withAsterisk
                label="Mobil"
                placeholder="Mobil"
                onSearchChange={(value) => handleCarSearch(value)}
                name="mobil"
                {...form.getInputProps("mobil")}
                onChange={(value) => handleCarOnChange(value!)}
                key={form.key("mobil")}
                readOnly={formType === FormTypeEnum.UPDATE}
                disabled={formType === FormTypeEnum.UPDATE}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  dataCustomer?.data.map((value) => ({
                    label: value.fullName,
                    value: value._id,
                  })) ?? []
                }
                searchable
                withAsterisk
                label="Customer"
                placeholder="Customer"
                onSearchChange={(value) => handleCustomerSearch(value)}
                name="customer"
                {...form.getInputProps("customer")}
                key={form.key("customer")}
                readOnly={formType === FormTypeEnum.UPDATE}
                disabled={formType === FormTypeEnum.UPDATE}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  Object.values(metodePembayaran).map((value) => ({
                    label: value,
                    value: value,
                  })) ?? []
                }
                searchable
                label="Metode Pembayaran"
                placeholder="Metode Pembayaran"
                name="customer"
                {...form.getInputProps("bankTujuan")}
                key={form.key("bankTujuan")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                data={
                  targetBankData?.data.map((value) => ({
                    label: `${value.bankName} - ${value.bankNumber}`,
                    value: value._id,
                  })) ?? []
                }
                searchable
                label="Bank Tujuan"
                clearable
                placeholder="Bank Tujuan"
                onSearchChange={(value) => handleTargetBankSearch(value)}
                name="customer"
                {...form.getInputProps("bankTujuan")}
                key={form.key("bankTujuan")}
              ></Select>
            </Grid.Col>
            <Grid.Col span={6}>
              <DateInput
                label="Tanggal Penjualan"
                {...form.getInputProps("tanggalPenjualan")}
                key={form.key("tanggalPenjualan")}
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Fieldset legend="Harga Penjualan">
          <Grid align="center">
            <Grid.Col span={6}>
              <Checkbox
                label="Pembayaran DP ?"
                placeholder="Pembayaran DP ?"
                name="harga"
                {...form.getInputProps("isDP", { type: "checkbox" })}
                key={form.key("isDP")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Total DP Mobil"
                placeholder="Total DP Mobil"
                min={0}
                prefix="Rp. "
                thousandSeparator=","
                name="harga"
                {...form.getInputProps("totalDP")}
                key={form.key("totalDP")}
                disabled={!form.values.isDP}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Total Harga Mobil"
                placeholder="Total Harga Mobil"
                min={0}
                prefix="Rp. "
                thousandSeparator=","
                name="harga"
                {...form.getInputProps("totalTerbayar")}
                key={form.key("totalTerbayar")}
                readOnly
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

export default PenjualanForm;
