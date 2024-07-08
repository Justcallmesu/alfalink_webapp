import { FormTypeEnum } from "@/lib/enum/FormType";
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
    <Route
      index
      element={
        <SuspenseLoading>
          <CarBrandIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <CarBrandForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <CarBrandForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
