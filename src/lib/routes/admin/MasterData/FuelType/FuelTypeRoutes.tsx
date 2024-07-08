import { FormTypeEnum } from "@/lib/enum/FormType";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const FuelTypeIndex = lazy(
  () => import("@/views/Admin/MasterData/FuelType/Index/FuelTypeIndex")
);
const FuelTypeForm = lazy(
  () => import("@/views/Admin/MasterData/FuelType/Form/FuelTypeForm")
);

export const FuelTypeRoutes = (
  <Route path="fuel-type">
    <Route
      index
      element={
        <SuspenseLoading>
          <FuelTypeIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <FuelTypeForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <FuelTypeForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
