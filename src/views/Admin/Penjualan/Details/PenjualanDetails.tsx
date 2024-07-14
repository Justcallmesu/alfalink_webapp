import React from "react";
import usePenjualanDetailsController from "./PenjualanDetailsController";
import { Button, Card, Checkbox, Divider, Grid, Stack } from "@mantine/core";
import DataDisplay from "@/lib/Components/DataDisplay/DataDisplay";
import { Popconfirm } from "@/lib/Components/Popconfirm/Popconfirm";
import {
  IconEdit,
  IconLink,
  IconSettingsCheck,
  IconTrash,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import PenjualanStatusNode from "../Components/PenjualanStatusNode";
import { PenjualanStatus } from "@/lib/models/penjualan/Penjualan";
import PenjualanStatusModal from "../Components/Modal/PenjualanStatusModal";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function PenjualanDetails() {
  const {
    handleDeletePenjualan,
    isPenjualanFetching,
    navigate,
    penjualanData,
    formModal,
    handleCloseModal,
    handleOpenFormModal,
    handleUpdatePenjualanStatus,
    opened,
  } = usePenjualanDetailsController();

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Card shadow="md">
            <Divider label="Detail Mobil" mb="lg"></Divider>

            <Grid>
              <Grid.Col span={6}>
                <DataDisplay title="Nomor Polisi Mobil">
                  <Link
                    to={`/admin/cars/${penjualanData?.data.mobil._id}`}
                    className="flex gap-2 text-blue-500"
                  >
                    <IconLink />
                    {penjualanData?.data.mobil.noPolisi}
                  </Link>
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Nama Mobil">
                  {penjualanData?.data.mobil.nama}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Merk Mobil">
                  {penjualanData?.data.mobil.merk.name}
                </DataDisplay>
              </Grid.Col>
            </Grid>

            <Divider label="Detail Customer" mb="lg"></Divider>
            <Grid>
              <Grid.Col span={6}>
                <DataDisplay title="Nama Pembeli">
                  <Link
                    to={`/admin/customers/${penjualanData?.data.customer._id}`}
                    className="flex gap-2 text-blue-500"
                  >
                    <IconLink />
                    {penjualanData?.data.customer.fullName}
                  </Link>
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Nomor Telepon Pembeli">
                  {penjualanData?.data.customer.phoneNumber}
                </DataDisplay>
              </Grid.Col>
            </Grid>
            <Divider label="Detail Penjualan" my="lg"></Divider>

            <Grid>
              <Grid.Col span={6}>
                <DataDisplay title="Status Penjualan">
                  <PenjualanStatusNode status={penjualanData?.data.status!} />
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Tanggal Penjualan">
                  {dayjs(penjualanData?.data.tanggalPenjualan).format(
                    "DD MMMM YYYY"
                  )}
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="DP ?">
                  <Checkbox checked={penjualanData?.data.isDP} />
                </DataDisplay>
              </Grid.Col>
              <Grid.Col span={6}>
                <DataDisplay title="Total DP">
                  Rp.
                  {` ${penjualanData?.data.totalDP}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
                </DataDisplay>
              </Grid.Col>

              <Grid.Col span={6}>
                <DataDisplay title="Total Harga">
                  Rp.
                  {` ${penjualanData?.data.totalTerbayar}`.replace(
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
              <Button
                color="orange"
                onClick={() => navigate("./edit")}
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.UPDATE_PENJUALAN,
                    type: "action",
                  })
                }
              >
                <IconEdit /> Edit
              </Button>

              <Popconfirm
                description="Yakin ingin menghapus data ini ?"
                onConfirm={() =>
                  handleDeletePenjualan(penjualanData?.data._id!)
                }
              >
                <Button
                  color="red"
                  fullWidth
                  disabled={
                    !checkPermissions({
                      permissionsCode: PermissionsEnum.DELETE_PENJUALAN,
                      type: "action",
                    })
                  }
                >
                  <IconTrash /> Hapus
                </Button>
              </Popconfirm>
              <Button
                color="blue"
                onClick={() => handleOpenFormModal(penjualanData?.data!)}
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.UPDATE_PENJUALAN,
                    type: "action",
                  })
                }
              >
                <IconSettingsCheck /> Ubah Status
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
      <PenjualanStatusModal
        formModal={formModal}
        handleCloseModal={handleCloseModal}
        handlePenjualanStatus={handleUpdatePenjualanStatus}
        opened={opened}
        selectedPenjualan={penjualanData?.data}
      />
    </>
  );
}

export default PenjualanDetails;
