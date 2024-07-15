import { AppShell, Burger, Group, Paper, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import NavbarBottomSection from "../Admin/Navbar/NavbarBottomSection/Navbar-BottomSection";
import NavigationRender from "../Admin/Navbar/NavigationItems/NavigationRender";
import { getMe } from "@/lib/services/Auth/auth.service";
import { removeAllCredentials } from "@/lib/utils/LocalStorage";
import { AxiosError } from "axios";
import PageTitle, { PageTitleProps } from "@/lib/Components/Layout/PageTitle";
import { useEffect, useState } from "react";

function AdminLayout() {
  const [opened, { toggle }] = useDisclosure();

  const [pageTitleProps, setPageTitleProps] = useState<PageTitleProps>({});
  useEffect(() => {
    getMe().catch((res: AxiosError) => {
      if (res?.response?.status === 401) {
        removeAllCredentials();
        window.location.href = "/login";
      }
    });
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: opened },
      }}
      styles={() => ({
        main: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      })}
    >
      <AppShell.Header bg={"blue"}>
        <Group h="100%" px="md" gap={"lg"} flex={2}>
          <Burger opened={!opened} onClick={toggle} color="white" />
          <PageTitle
            prevRoute={pageTitleProps.prevRoute}
            title={pageTitleProps.title}
          />
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
          <Outlet context={{ setPageTitleProps }} />
        </main>
      </AppShell.Main>
    </AppShell>
  );
}

export default AdminLayout;
