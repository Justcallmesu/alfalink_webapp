import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const TargetBankIndex = lazy(
  () => import("@/views/Admin/MasterData/TargetBank/Index/TargetBankIndex")
);
const TargetBankForm = lazy(
  () => import("@/views/Admin/MasterData/TargetBank/Form/TargetBankForm")
);

export const TargetBankRoutes = (
  <Route path="target-bank">
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_BANK_TUJUAN,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <TargetBankIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_BANK_TUJUAN,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <TargetBankForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_BANK_TUJUAN,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <TargetBankForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}
  </Route>
);
