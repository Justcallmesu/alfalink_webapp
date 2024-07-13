import { FormTypeEnum } from "@/lib/enum/FormType";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const InspeksiIndex = lazy(
  () => import("src/views/Admin/Inspeksi/Index/InspeksiIndex")
);

const InspeksiForm = lazy(
  () => import("src/views/Admin/Inspeksi/Form/InspeksiForm")
);

const InspeksiDetails = lazy(
  () => import("src/views/Admin/Inspeksi/Details/InspeksiDetails")
);

export const InspeksiRoutes = (
  <Route path="inspections">
    <Route
      index
      element={
        <SuspenseLoading>
          <InspeksiIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <InspeksiForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    />

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <InspeksiForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id"
      element={
        <SuspenseLoading>
          <InspeksiDetails />
        </SuspenseLoading>
      }
    />
  </Route>
);
