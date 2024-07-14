import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const ColorIndex = lazy(
  () => import("@/views/Admin/MasterData/Color/Index/ColorIndex")
);
const ColorForm = lazy(
  () => import("@/views/Admin/MasterData/Color/Form/ColorForm")
);

export const ColorRoutes = (
  <Route path="color">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_WARNA,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <ColorIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_WARNA,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <ColorForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_WARNA,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <ColorForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);
