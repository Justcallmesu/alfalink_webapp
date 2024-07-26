import { Button, Card, Grid, Input } from "@mantine/core";
import useInspeksiIndexController from "./InspeksiIndexController";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import InspeksiStatusModal from "../Components/Modal/InspeksiStatusModal";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

function InspeksiIndex() {
  const {
    InspectionTableColumns,
    InspectionsData,
    handleInspectionSearch,
    isInspectionsFetching,
    refetchInspections,
    handlePageChange,
    navigate,
    formModal,
    opened,
    handleCloseModal,
    handleInspeksiStatusUpdate,
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
                <Button
                  onClick={() => navigate("./create")}
                  disabled={
                    !checkPermissions({
                      permissionsCode: PermissionsEnum.CREATE_INSPEKSI,
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
      <InspeksiStatusModal
        formModal={formModal}
        handleCloseModal={handleCloseModal}
        handleUpdateInspeksiStatus={handleInspeksiStatusUpdate}
        opened={opened}
      />
    </>
  );
}

export default InspeksiIndex;
