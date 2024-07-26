import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
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
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_PENJUALAN,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <PenjualanIndex />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_PENJUALAN,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <PenjualanForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_PENJUALAN,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <PenjualanForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_PENJUALAN,
      type: "action",
    }) && (
      <Route
        path=":id"
        element={
          <SuspenseLoading>
            <PenjualanDetails />
          </SuspenseLoading>
        }
      />
    )}
  </Route>
);
