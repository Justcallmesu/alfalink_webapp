import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const RolesIndex = lazy(() => import("@/views/Admin/Roles/Index/RolesIndex"));
const RolesForm = lazy(() => import("@/views/Admin/Roles/Form/RolesForm"));

export const RolesRoutes = (
  <Route path="roles">
    <Route
      index
      element={
        <SuspenseLoading>
          <RolesIndex />
        </SuspenseLoading>
      }
    />

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <RolesForm />
        </SuspenseLoading>
      }
    />

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <RolesForm />
        </SuspenseLoading>
      }
    />
  </Route>
);
