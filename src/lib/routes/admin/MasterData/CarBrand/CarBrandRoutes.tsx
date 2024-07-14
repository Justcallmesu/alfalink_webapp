import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const CarBrandIndex = lazy(
  () => import("@/views/Admin/MasterData/CarBrand/Index/CarBrandIndex")
);
const CarBrandForm = lazy(
  () => import("@/views/Admin/MasterData/CarBrand/Form/CarBrandForm")
);

export const CarBrandRoutes = (
  <Route path="car-brand">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_MERK,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <CarBrandIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_MERK,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <CarBrandForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_MERK,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <CarBrandForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);
