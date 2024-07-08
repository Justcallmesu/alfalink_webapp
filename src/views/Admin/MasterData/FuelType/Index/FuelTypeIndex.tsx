import React from "react";
import { Button, Card, Grid, Input } from "@mantine/core";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import useFuelTypeIndexController from "./FuelTypeIndexController";

function fuelTypeIndex() {
  const {
    FuelTypeTableColumns,
    fuelTypeData,
    fuelTypeRefetch,
    handleSearch,
    isFuelTypeFetching,
    navigate,
    handlePageChange,
  } = useFuelTypeIndexController();

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
              <Button onClick={async () => await fuelTypeRefetch()}>
                <IconReload />
              </Button>
            </Grid.Col>
            <Grid.Col span={4} className="flex justify-end">
              <Button onClick={() => navigate("./create")}>
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
            columns={FuelTypeTableColumns}
            fetching={isFuelTypeFetching}
            records={fuelTypeData?.data}
            totalRecords={fuelTypeData?.meta.totalItems}
            recordsPerPage={fuelTypeData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={fuelTypeData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default fuelTypeIndex;
