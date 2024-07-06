import { Button, Card, Grid, Input, Table } from "@mantine/core";
import useCustomerIndexController from "./CustomerIndexController";
import { IconMoodEmpty, IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

function CustomerIndex() {
  const {
    /**
     * Models
     */
    customerData,
    isCustomerFetching,
    refetchCustomer,

    /**
     * Controllers
     */
    tableColumns,
    handleSearch,
    navigate,
  } = useCustomerIndexController();

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
              <Button onClick={async () => await refetchCustomer()}>
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
            columns={tableColumns}
            // noRecordsText="Tidak Ada Data"
            // noRecordsIcon={<IconMoodEmpty />}
            fetching={isCustomerFetching}
            records={customerData?.data}
            totalRecords={customerData?.meta.itemsCount}
            recordsPerPage={customerData?.meta?.limit!}
            onPageChange={(page) => {}}
            page={customerData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default CustomerIndex;
