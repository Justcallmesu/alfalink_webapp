import { FormTypeEnum } from "@/lib/enum/FormType";
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
    <Route
      index
      element={
        <SuspenseLoading>
          <CarTypeIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <CarTypeForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <CarTypeForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
