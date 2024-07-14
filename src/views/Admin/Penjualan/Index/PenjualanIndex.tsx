import { Button, Card, Grid, Input } from "@mantine/core";
import React from "react";
import usePenjualanIndexController from "./PenjualanIndexController";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

function PenjualanIndex() {
  const {
    handlePageChange,
    handlePenjualanSearch,
    isPenjualanFetching,
    penjualanData,
    penjualanQuery,
    refetchPenjualan,
    tableColumns,
    navigate,
  } = usePenjualanIndexController();

  return (
    <Card pt={20} px={0} shadow="md" className="overflow-x-scroll">
      <Grid px={20}>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <Input
                placeholder="Search"
                onChange={(event) => {
                  handlePenjualanSearch(event.target.value);
                }}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button onClick={async () => await refetchPenjualan()}>
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
            columns={tableColumns}
            fetching={isPenjualanFetching}
            records={penjualanData?.data}
            totalRecords={penjualanData?.meta.totalItems}
            recordsPerPage={penjualanData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={penjualanData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default PenjualanIndex;
