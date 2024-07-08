import { FormTypeEnum } from "@/lib/enum/FormType";
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
    <Route
      index
      element={
        <SuspenseLoading>
          <TargetBankIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <TargetBankForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <TargetBankForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
