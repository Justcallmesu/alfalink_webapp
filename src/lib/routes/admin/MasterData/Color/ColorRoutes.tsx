import { FormTypeEnum } from "@/lib/enum/FormType";
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
    <Route
      index
      element={
        <SuspenseLoading>
          <ColorIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <ColorForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <ColorForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
