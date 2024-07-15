import { Button, Card, Grid, Input } from "@mantine/core";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import useTargetBankFormController from "./TargetBankIndexController";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function targetBankIndex() {
  const {
    TargetBankTableColumns,
    targetBankData,
    targetBankRefetch,
    handleSearch,
    isTargetBankFetching,
    navigate,
    handlePageChange,
  } = useTargetBankFormController();

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
              <Button onClick={async () => await targetBankRefetch()}>
                <IconReload />
              </Button>
            </Grid.Col>
            <Grid.Col span={4} className="flex justify-end">
              <Button
                onClick={() => navigate("./create")}
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.CREATE_BANK_TUJUAN,
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
            columns={TargetBankTableColumns}
            fetching={isTargetBankFetching}
            records={targetBankData?.data}
            totalRecords={targetBankData?.meta.totalItems}
            recordsPerPage={targetBankData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={targetBankData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default targetBankIndex;
