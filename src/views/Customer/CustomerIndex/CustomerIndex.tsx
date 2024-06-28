import { Button, Card, Grid, Input, Table } from "@mantine/core";
import useCustomerIndexController from "./CustomerIndexController";
import { IconPlus, IconReload } from "@tabler/icons-react";

function CustomerIndex() {
  const { tableColumns } = useCustomerIndexController();

  return (
    <Card pt={20} px={0} shadow="md">
      <Grid px={20}>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <Input placeholder="Search" />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button>
                <IconReload />
              </Button>
            </Grid.Col>
            <Grid.Col span={4} className="flex justify-end">
              <Button>
                <IconPlus />
              </Button>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                {tableColumns.map((column) => (
                  <Table.Th key={column}>{column}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
          </Table>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default CustomerIndex;
