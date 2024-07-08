import React from "react";
import useCarBrandIndexController from "./CarBrandIndexController";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { Button, Card, Grid, Input } from "@mantine/core";
import { DataTable } from "mantine-datatable";

function CarBrandIndex() {
  const {
    CarBrandTableColumns,
    carBrandData,
    handlePageChange,
    handleSearch,
    isCarBrandFetching,
    refetchCarBrand,
    navigate,
  } = useCarBrandIndexController();

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
              <Button onClick={async () => await refetchCarBrand()}>
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
            columns={CarBrandTableColumns}
            fetching={isCarBrandFetching}
            records={carBrandData?.data}
            totalRecords={carBrandData?.meta.totalItems}
            recordsPerPage={carBrandData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={carBrandData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default CarBrandIndex;
