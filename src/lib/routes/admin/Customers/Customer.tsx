import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

/**
 * Components
 */
const CustomerIndex = lazy(
  () => import("@/views/Admin/Customer/CustomerIndex/CustomerIndex")
);
const CustomerForm = lazy(
  () => import("@/views/Admin/Customer/CustomerForm/CustomerForm")
);

const CustomerDetails = lazy(
  () => import("@/views/Admin/Customer/CustomerDetails/CustomerDetails")
);

const CustomerRoutes = (
  <Route path="customers">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_CUSTOMER,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <CustomerIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_CUSTOMER,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <CustomerForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_CUSTOMER,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <CustomerForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_CUSTOMER,
      type: "action",
    }) && (
      <Route
        path=":id"
        element={
          <SuspenseLoading>
            <CustomerDetails />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);

export default CustomerRoutes;
