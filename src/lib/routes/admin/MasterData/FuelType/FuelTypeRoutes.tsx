import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const FuelTypeIndex = lazy(
  () => import("@/views/Admin/MasterData/FuelType/Index/FuelTypeIndex")
);
const FuelTypeForm = lazy(
  () => import("@/views/Admin/MasterData/FuelType/Form/FuelTypeForm")
);

export const FuelTypeRoutes = (
  <Route path="fuel-type">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_FUEL_TYPE,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <FuelTypeIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_FUEL_TYPE,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <FuelTypeForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_FUEL_TYPE,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <FuelTypeForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);
