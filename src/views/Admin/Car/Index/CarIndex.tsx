import { Button, Card, Grid, Input, Modal, Select, Stack } from "@mantine/core";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React from "react";
import useCarIndexController from "./CarIndexController";
import { Form } from "@mantine/form";
import { StatusMobil } from "@/lib/models/Car/Car";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function CarIndex() {
  const {
    CarTableColumns,
    carData,
    carRefetech,
    handleCarNameSearch,
    isCarFetching,
    handlePageChange,
    navigate,
    opened,

    formModal,
    handleUpdateCarStatus,
    handleCloseModal,
  } = useCarIndexController();

  return (
    <>
      <Card pt={20} px={0} shadow="md" className="overflow-x-scroll">
        <Grid px={20}>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={6}>
                <Input
                  placeholder="Search"
                  onChange={(event) => {
                    handleCarNameSearch(event.target.value);
                  }}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <Button onClick={async () => await carRefetech()}>
                  <IconReload />
                </Button>
              </Grid.Col>
              <Grid.Col span={4} className="flex justify-end">
                <Button
                  onClick={() => navigate("./create")}
                  disabled={
                    !checkPermissions({
                      permissionsCode: PermissionsEnum.CREATE_MOBIL,
                      type: "action",
                    })
                  }
                >
                  <IconPlus />
                </Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12}>
            <DataTable
              withColumnBorders
              withRowBorders
              striped
              withTableBorder
              idAccessor="_id"
              highlightOnHover
              minHeight={400}
              columns={CarTableColumns}
              fetching={isCarFetching}
              records={carData?.data}
              totalRecords={carData?.meta.totalItems}
              recordsPerPage={carData?.meta?.limit!}
              onPageChange={handlePageChange}
              page={carData?.meta.page!}
            />
          </Grid.Col>
        </Grid>
      </Card>
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

export default CarIndex;
