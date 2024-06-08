import { LoadingOverlay } from "@mantine/core";
import React, { Suspense } from "react";

function SuspenseLoading(props: React.PropsWithChildren<{}>) {
  return (
    <Suspense
      fallback={
        <LoadingOverlay
          visible={true}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
      }
    >
      {props.children}
    </Suspense>
  );
}

export default SuspenseLoading;
