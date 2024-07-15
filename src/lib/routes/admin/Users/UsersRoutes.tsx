import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const UserIndex = lazy(() => import("@/views/Admin/Users/Index/UserIndex"));
const UserForm = lazy(() => import("@/views/Admin/Users/Form/UsersForm"));

export const UsersRoutes = (
  <Route path="users">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_USER,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <UserIndex />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_USER,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <UserForm />
          </SuspenseLoading>
        }
      />
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_CUSTOMER,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <UserForm />
          </SuspenseLoading>
        }
      />
    )}
  </Route>
);
