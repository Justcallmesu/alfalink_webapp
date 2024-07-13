import DataDisplay from "@/lib/Components/DataDisplay/DataDisplay";
import {
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  Select,
  Stack,
} from "@mantine/core";
import React from "react";
import useCarDetailsController from "./CarDetailsController";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import CarStatusNode from "../Components/CarStatusNode/CarStatusNode";
import { Form } from "@mantine/form";
import { StatusMobil } from "@/lib/models/Car/Car";

function CarDetails() {
  const {
    carData,
    handleDeleteCar,
    navigate,
    formModal,
    handleCloseModal,
    handleOpenFormModal,
    handleUpdateCarStatus,
    isCarFetching,
    opened,
  } = useCarDetailsController();

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Card shadow="md">
            <Divider label="Detail Mobil" mb="lg"></Divider>

            <Grid>
              <Grid.Col span={6}>
                <DataDisplay title="Nama Mobil">
                  {carData?.data.nama}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Merk Mobil">
                  {carData?.data.merk.name ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Body Style Mobil">
                  {carData?.data.bodyStyle?.name ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Warna Interior Mobil">
                  {carData?.data.warnaInterior?.name ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Warna Exterior Mobil">
                  {carData?.data.warnaExterior?.name ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Warna Interior Mobil">
                  {carData?.data.warnaInterior?.name ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Jenis Bahan Bakar Mobil">
                  {carData?.data.jenisBahanBakar?.name ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Tipe Mobil">
                  {carData?.data.tipe?.name ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Tahun Rakit Mobil">
                  {carData?.data.tahunRakit ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Transmisi Mobil">
                  {carData?.data.transmisi ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Nomor Polisi Mobil">
                  {carData?.data.noPolisi ?? "-"}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Status Mobil">
                  <CarStatusNode carRecord={carData?.data!} />
                </DataDisplay>
              </Grid.Col>
            </Grid>

            <Divider label="Harga Mobil" my="lg"></Divider>
            <Grid>
              <Grid.Col span={6}>
                <DataDisplay title="Harga Mobil">
                  Rp.
                  {`${carData?.data.harga}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
                </DataDisplay>
              </Grid.Col>
            </Grid>

            <Divider label="Pajak Mobil" my="lg"></Divider>

            <Grid>
              <Grid.Col span={6}>
                <DataDisplay title="Status Pajak Mobil">
                  {carData?.data.statusPajak}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Total Pajak Mobil">
                  Rp.
                  {`${carData?.data.totalPajak}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
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
                onConfirm={() => handleDeleteCar()}
              >
                <Button color="red" fullWidth>
                  <IconTrash /> Hapus
                </Button>
              </Popconfirm>
              <Button color="blue" onClick={() => handleOpenFormModal()}>
                <IconEdit /> Ubah Status
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
      <Modal
        title={"Ubah Status Mobil"}
        opened={opened}
        onClose={handleCloseModal}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Form
          form={formModal}
          onSubmit={(values) => handleUpdateCarStatus(values)}
        >
          <Stack>
            <Select
              data-autofocus
              label="Status Mobil"
              placeholder="Pilih Status Mobil"
              data={Object.values(StatusMobil)}
              key={formModal.key("status")}
              {...formModal.getInputProps("status")}
              clearable
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </Form>
      </Modal>
    </>
  );
}

export default CarDetails;
