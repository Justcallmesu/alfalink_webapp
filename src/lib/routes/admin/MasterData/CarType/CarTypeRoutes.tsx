import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const CarTypeIndex = lazy(
  () => import("@/views/Admin/MasterData/CarType/Index/CarTypeIndex")
);
const CarTypeForm = lazy(
  () => import("@/views/Admin/MasterData/CarType/Form/CarTypeForm")
);

export const CarTypeRoutes = (
  <Route path="car-type">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_TIPE,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <CarTypeIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_TIPE,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <CarTypeForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_TIPE,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <CarTypeForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);
