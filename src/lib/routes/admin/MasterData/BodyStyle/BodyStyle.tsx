import { FormTypeEnum } from "@/lib/enum/FormType";
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
    <Route
      index
      element={
        <SuspenseLoading>
          <BodyStyleIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <BodyStyleForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <BodyStyleForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
