import { AppShell, Paper, Center, Grid, Image, GridCol } from "@mantine/core";
import { Outlet } from "react-router-dom";
import LoginImage from "@/Assets/LoginLogo.jpg";

function LoginLayout() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
      }}
      styles={() => ({
        main: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      })}
    >
      <AppShell.Main px="10rem" py="12rem">
        <Center className="h-full">
          <Paper shadow="m" px="2rem" py="2rem" withBorder>
            <Grid>
              <GridCol
                span={{ md: 5, sm: 12 }}
                className="h-full flex flex-col justify-center items-center"
              >
                <Image src={LoginImage} fit="cover" w={"80%"} h={"100%"} />
              </GridCol>
              <GridCol span={{ md: 6, sm: 12 }} className="h-full">
                <Outlet />
              </GridCol>
            </Grid>
          </Paper>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}

export default LoginLayout;
