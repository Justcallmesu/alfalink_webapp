import { Button, Card, Grid, Input } from "@mantine/core";
import React from "react";
import useInspeksiIndexController from "./InspeksiIndexController";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

function InspeksiIndex() {
  const {
    InspectionTableColumns,
    InspectionsData,
    handleDelete,
    handleInspectionSearch,
    inspectionQuery,
    isInspectionsFetching,
    mutateUpdateInspection,
    refetchInspections,
    handlePageChange,
    navigate,
  } = useInspeksiIndexController();

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
                    handleInspectionSearch(event.target.value);
                  }}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <Button onClick={async () => await refetchInspections()}>
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
              columns={InspectionTableColumns}
              fetching={isInspectionsFetching}
              records={InspectionsData?.data}
              totalRecords={InspectionsData?.meta.totalItems}
              recordsPerPage={InspectionsData?.meta?.limit!}
              onPageChange={handlePageChange}
              page={InspectionsData?.meta.page!}
            />
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}

export default InspeksiIndex;
