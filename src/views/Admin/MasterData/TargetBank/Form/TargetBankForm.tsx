import useTargetBankFormController from "./TargetBankFormController";
import { FormType } from "@/lib/interface/FormType";
import { Button, Card, Fieldset, Grid, Group, TextInput } from "@mantine/core";
import { Form } from "@mantine/form";
import { CreateTargetBankDto } from "@/lib/models/MasterData/TargetBank";

function targetBankForm(formType: FormType) {
  const { form, handleTargetBankSubmit } =
    useTargetBankFormController(formType);

  return (
    <Card p={20} shadow="md" className="flex flex-col gap-3">
      <Form
        form={form}
        onSubmit={(values: CreateTargetBankDto) =>
          handleTargetBankSubmit(values)
        }
        className="w-full h-full flex flex-col justify-center gap-3"
      >
        <Fieldset legend="Master Data ank Tujuan">
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("Nama Bank")}
                label="Nama Bank"
                name="bankName"
                {...form.getInputProps("bankName")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("Nomor Rekening Bank")}
                label="Nomor Rekening Bank"
                name="bankNumber"
                {...form.getInputProps("bankNumber")}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                key={form.key("Nama Pemilik Rekening")}
                label="Nama Pemilik Rekening"
                name="bankOwnerName"
                {...form.getInputProps("bankOwnerName")}
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

export default targetBankForm;
