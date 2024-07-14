import { FormTypeEnum } from "@/lib/enum/FormType";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const PenjualanIndex = lazy(
  () => import("@/views/Admin/Penjualan/Index/PenjualanIndex")
);

const PenjualanForm = lazy(
  () => import("@/views/Admin/Penjualan/Form/PenjualanForm")
);

const PenjualanDetails = lazy(
  () => import("@/views/Admin/Penjualan/Details/PenjualanDetails")
);

export const PenjualanRoutes = (
  <Route path="penjualan">
    <Route
      index
      element={
        <SuspenseLoading>
          <PenjualanIndex />
        </SuspenseLoading>
      }
    />

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <PenjualanForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    />

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <PenjualanForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    />

    <Route
      path=":id"
      element={
        <SuspenseLoading>
          <PenjualanDetails />
        </SuspenseLoading>
      }
    />
  </Route>
);
