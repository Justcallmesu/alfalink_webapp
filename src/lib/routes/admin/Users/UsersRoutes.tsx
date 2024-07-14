import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

const UserIndex = lazy(() => import("@/views/Admin/Users/Index/UserIndex"));
const UserForm = lazy(() => import("@/views/Admin/Users/Form/UsersForm"));

export const UsersRoutes = (
  <Route path="users">
    <Route
      index
      element={
        <SuspenseLoading>
          <UserIndex />
        </SuspenseLoading>
      }
    />

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <UserForm />
        </SuspenseLoading>
      }
    />

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <UserForm />
        </SuspenseLoading>
      }
    />
  </Route>
);
