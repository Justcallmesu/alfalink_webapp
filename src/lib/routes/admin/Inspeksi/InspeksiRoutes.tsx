import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const InspeksiIndex = lazy(
  () => import("src/views/Admin/Inspeksi/Index/InspeksiIndex")
);

const InspeksiForm = lazy(
  () => import("src/views/Admin/Inspeksi/Form/InspeksiForm")
);

const InspeksiDetails = lazy(
  () => import("src/views/Admin/Inspeksi/Details/InspeksiDetails")
);

export const InspeksiRoutes = (
  <Route path="inspections">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_INSPEKSI,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <InspeksiIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_INSPEKSI,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <InspeksiForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_INSPEKSI,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <InspeksiForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_INSPEKSI,
      type: "action",
    }) && (
      <Route
        path=":id"
        element={
          <SuspenseLoading>
            <InspeksiDetails />
          </SuspenseLoading>
        }
      />
    )}
  </Route>
);
