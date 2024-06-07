import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppShell, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

/**
 * CSS
 */
import "./lib/style/global.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

/**
 * App
 */
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <QueryClientProvider client={queryClient}>
      <Notifications position="bottom-right" />
      <AppShell
        styles={(theme) => ({
          main: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          },
        })}
      >
        <App />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </AppShell>
    </QueryClientProvider>
  </MantineProvider>
);