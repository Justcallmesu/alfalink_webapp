import { Button, Card, Grid, Input, Table } from "@mantine/core";
import useCustomerIndexController from "./CustomerIndexController";
import { IconMoodEmpty, IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

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
    handlePageChange,
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
              <Button
                onClick={() => navigate("./create")}
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.CREATE_CUSTOMER,
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
            columns={tableColumns}
            fetching={isCustomerFetching}
            records={customerData?.data}
            totalRecords={customerData?.meta.totalItems}
            recordsPerPage={customerData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={customerData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default CustomerIndex;
