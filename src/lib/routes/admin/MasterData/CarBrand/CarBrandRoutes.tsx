import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { Route } from "react-router-dom";

export const CarBrandRoutes = (
  <Route path="car-brand">
    <Route
      index
      element={
        <SuspenseLoading>
          <h1>Hello</h1>
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <h1>Hello</h1>
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <h1>Hello</h1>
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id"
      element={
        <SuspenseLoading>
          <h1>Hello</h1>
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);
