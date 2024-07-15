import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const RolesIndex = lazy(() => import("@/views/Admin/Roles/Index/RolesIndex"));
const RolesForm = lazy(() => import("@/views/Admin/Roles/Form/RolesForm"));

export const RolesRoutes = (
  <Route path="roles">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_ROLE,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <RolesIndex />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_ROLE,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <RolesForm />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_ROLE,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <RolesForm />
          </SuspenseLoading>
        }
      />
    )}
  </Route>
);
