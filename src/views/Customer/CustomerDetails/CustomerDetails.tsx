import React from "react";
import useCustomerDetailsController from "./CustomerDetailsController";
import { Button, Card, Divider, Flex, Grid, Stack } from "@mantine/core";
import DataDisplay from "@/lib/Components/DataDisplay/DataDisplay";
import dayjs from "dayjs";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";

function CustomerDetails() {
  const { customerData, handleDeleteCustomer, isCustomerFetching, navigate } =
    useCustomerDetailsController();

  return (
    <Grid>
      <Grid.Col span={9}>
        <Card shadow="md">
          <Divider label="Detail Customer" mb="lg"></Divider>

          <Grid>
            <Grid.Col span={6}>
              <DataDisplay title="Nama Lengkap">
                {customerData?.data.fullName}
              </DataDisplay>
            </Grid.Col>
            <Grid.Col span={6}>
              <DataDisplay title="NIK">{customerData?.data.nik}</DataDisplay>
            </Grid.Col>
            <Grid.Col span={6}>
              <DataDisplay title="Alamat">
                {customerData?.data.address}
              </DataDisplay>
            </Grid.Col>
            <Grid.Col span={6}>
              <DataDisplay title="Email">
                {customerData?.data.email}
              </DataDisplay>
            </Grid.Col>
            <Grid.Col span={6}>
              <DataDisplay title="Tanggal Lahir">
                {dayjs(customerData?.data.birthDate).format("DD MMMM YYYY")}
              </DataDisplay>
            </Grid.Col>
            <Grid.Col span={6}>
              <DataDisplay title="Tempat Lahir">
                {customerData?.data.birthPlace}
              </DataDisplay>
            </Grid.Col>
          </Grid>

          <Divider label="Informasi Kontak" my="lg"></Divider>

          <Grid>
            <Grid.Col span={6}>
              <DataDisplay title="Nomor Telepon">
                {customerData?.data.phoneNumber}
              </DataDisplay>
            </Grid.Col>
            <Grid.Col span={6}>
              <DataDisplay title="Email">
                {customerData?.data.email}
              </DataDisplay>
            </Grid.Col>
            <Grid.Col span={6}>
              <DataDisplay title="Whatsapp">
                {customerData?.data.whatsappNumber}
              </DataDisplay>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card shadow="md">
          <Stack>
            <Button color="orange" onClick={() => navigate("./edit")}>
              <IconEdit /> Edit
            </Button>

            <Popconfirm
              description="Yakin ingin menghapus data ini ?"
              onConfirm={() => handleDeleteCustomer(customerData?.data._id!)}
            >
              <Button color="red">
                <IconTrash /> Hapus
              </Button>
            </Popconfirm>
          </Stack>
        </Card>
      </Grid.Col>
    </Grid>
  );
}

export default CustomerDetails;
