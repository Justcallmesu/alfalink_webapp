import React from "react";
import useCarTypeIndexController from "./CarTypeController";
import { Button, Card, Grid, Input } from "@mantine/core";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function CarTypeIndex() {
  const {
    CarTypeTableColumns,
    carTypeData,
    carTypeRefetch,
    handleSearch,
    isCarTypeFetching,
    navigate,
    handlePageChange,
  } = useCarTypeIndexController();

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
              <Button onClick={async () => await carTypeRefetch()}>
                <IconReload />
              </Button>
            </Grid.Col>
            <Grid.Col span={4} className="flex justify-end">
              <Button
                onClick={() => navigate("./create")}
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.CREATE_TIPE,
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
            columns={CarTypeTableColumns}
            fetching={isCarTypeFetching}
            records={carTypeData?.data}
            totalRecords={carTypeData?.meta.totalItems}
            recordsPerPage={carTypeData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={carTypeData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default CarTypeIndex;
