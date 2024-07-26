import useBodyStyleIndexController from "./BodyStyleIndexController";
import { Button, Card, Grid, Input } from "@mantine/core";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function BodyStyleIndex() {
  const {
    BodyStyleTableColumns,
    bodyStyleData,
    bodyStyleRefetch,
    handleSearch,
    isBodyStyleFetching,
    navigate,
    handlePageChange,
  } = useBodyStyleIndexController();

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
              <Button onClick={async () => await bodyStyleRefetch()}>
                <IconReload />
              </Button>
            </Grid.Col>
            <Grid.Col span={4} className="flex justify-end">
              <Button
                onClick={() => navigate("./create")}
                disabled={
                  !checkPermissions({
                    permissionsCode: PermissionsEnum.CREATE_BODY_STYLE,
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
            columns={BodyStyleTableColumns}
            fetching={isBodyStyleFetching}
            records={bodyStyleData?.data}
            totalRecords={bodyStyleData?.meta.totalItems}
            recordsPerPage={bodyStyleData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={bodyStyleData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default BodyStyleIndex;
