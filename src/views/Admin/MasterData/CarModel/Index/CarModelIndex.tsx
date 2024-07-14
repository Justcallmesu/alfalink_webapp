import React from "react";
import useCarModelController from "./CarModelController";
import { Button, Card, Grid, Input } from "@mantine/core";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function CarModelIndex() {
  const {
    CarModelTableColumns,
    carModelData,
    carModelRefetch,
    handleSearch,
    isCarModelFetching,
    navigate,
    handlePageChange,
  } = useCarModelController();

  return (
    <Card pt={20} px={0} shadow="md" className="overflow-x-scroll">
      <Grid px={20}>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <Input
                placeholder="Search"
                onChange={(event) => {
                  handleSearch(event.target.value);
                }}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button onClick={async () => await carModelRefetch()}>
                <IconReload />
              </Button>
            </Grid.Col>
            <Grid.Col span={4} className="flex justify-end">
              <Button
                onClick={() => navigate("./create")}
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.CREATE_MODEL,
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
            columns={CarModelTableColumns}
            fetching={isCarModelFetching}
            records={carModelData?.data}
            totalRecords={carModelData?.meta.totalItems}
            recordsPerPage={carModelData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={carModelData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default CarModelIndex;
