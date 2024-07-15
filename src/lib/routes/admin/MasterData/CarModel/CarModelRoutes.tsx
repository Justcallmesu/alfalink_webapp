import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const CarModelIndex = lazy(
  () => import("@/views/Admin/MasterData/CarModel/Index/CarModelIndex")
);

const CarModelForm = lazy(
  () => import("@/views/Admin/MasterData/CarModel/Form/CarModelForm")
);

export const CarModelRoutes = (
  <Route path="car-model">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_MODEL,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <CarModelIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_MODEL,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <CarModelForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_MODEL,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <CarModelForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);
