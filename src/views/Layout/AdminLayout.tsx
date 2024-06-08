import {
  AppShell,
  Avatar,
  Burger,
  Container,
  Group,
  Paper,
  ScrollArea,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import NavbarBottomSection from "../Admin/Navbar/NavbarBottomSection/Navbar-BottomSection";
import NavigationRender from "../Admin/Navbar/NavigationItems/NavigationRender";

function AdminLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: opened },
      }}
      styles={(theme) => ({
        main: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      })}
    >
      <AppShell.Header bg={"black"}>
        <Group h="100%" px="md">
          <Burger opened={!opened} onClick={toggle} color="white" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section
          h={"100%"}
          grow
          my="md"
          px="md"
          component={ScrollArea}
        >
          <NavigationRender />
        </AppShell.Section>
        <AppShell.Section h={"5rem"}>
          <Paper shadow="lg" h={"100%"} py={"0.2rem"}>
            <NavbarBottomSection />
          </Paper>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <main className="px-5 py-5">
          <Outlet />
        </main>
      </AppShell.Main>
    </AppShell>
  );
}

export default AdminLayout;
