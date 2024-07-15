import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const BodyStyleIndex = lazy(
  () => import("@/views/Admin/MasterData/BodyStyle/Index/BodyStyleIndex")
);
const BodyStyleForm = lazy(
  () => import("@/views/Admin/MasterData/BodyStyle/Form/BodyStyleForm")
);

export const BodyStyleRoutes = (
  <Route path="body-style">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_BODY_STYLE,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <BodyStyleIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_BODY_STYLE,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <BodyStyleForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_BODY_STYLE,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <BodyStyleForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);
