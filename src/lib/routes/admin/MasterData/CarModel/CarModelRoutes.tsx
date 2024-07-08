import { FormTypeEnum } from "@/lib/enum/FormType";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const CarModelIndex = lazy(
  () => import("@/views/Admin/MasterData/CarModel/Index/CarModelIndex")
);

const CarModelForm = lazy(
  () => import("@/views/Admin/MasterData/CarModel/Form/CarModelForm")
);

export const CarModelRoutes = (
  <Route path="car-model">
    <Route
      index
      element={
        <SuspenseLoading>
          <CarModelIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <CarModelForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <CarModelForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
