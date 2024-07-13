import { FormTypeEnum } from "@/lib/enum/FormType";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

/**
 * Components
 */
const CarIndex = lazy(() => import("@/views/Admin/Car/Index/CarIndex"));
const CarForm = lazy(() => import("@/views/Admin/Car/Form/CarForm"));
const CarDetails = lazy(() => import("@/views/Admin/Car/Details/CarDetails"));

const CarRoutes = (
  <Route path="cars">
    <Route
      index
      element={
        <SuspenseLoading>
          <CarIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <CarForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <CarForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id"
      element={
        <SuspenseLoading>
          <CarDetails />
        </SuspenseLoading>
      }
    />
  </Route>
);

export default CarRoutes;
