import { Button, Card, Grid, Input } from "@mantine/core";
import React from "react";
import useUsersIndexController from "./UsersIndexController";
import { IconPlus, IconReload } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

function UserIndex() {
  const {
    handlePageChange,
    handleUserSearch,
    isUserFetching,
    refetchUser,
    tableColumns,
    userQuery,
    usersData,
    navigate,
  } = useUsersIndexController();

  return (
    <Card pt={20} px={0} shadow="md" className="overflow-x-scroll">
      <Grid px={20}>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <Input
                placeholder="Search"
                onChange={(event) => {
                  handleUserSearch(event.target.value);
                }}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button onClick={async () => await refetchUser()}>
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
            fetching={isUserFetching}
            records={usersData?.data}
            totalRecords={usersData?.meta.totalItems}
            recordsPerPage={usersData?.meta?.limit!}
            onPageChange={handlePageChange}
            page={usersData?.meta.page!}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default UserIndex;
