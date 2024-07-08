import { FormTypeEnum } from "@/lib/enum/FormType";
import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Route } from "react-router-dom";

/**
 * Components
 */
const CustomerIndex = lazy(
  () => import("@/views/Admin/Customer/CustomerIndex/CustomerIndex")
);
const CustomerForm = lazy(
  () => import("@/views/Admin/Customer/CustomerForm/CustomerForm")
);

const CustomerDetails = lazy(
  () => import("@/views/Admin/Customer/CustomerDetails/CustomerDetails")
);

const CustomerRoutes = (
  <Route path="customers">
    <Route
      index
      element={
        <SuspenseLoading>
          <CustomerIndex />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path="create"
      element={
        <SuspenseLoading>
          <CustomerForm formType={FormTypeEnum.CREATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id/edit"
      element={
        <SuspenseLoading>
          <CustomerForm formType={FormTypeEnum.UPDATE} />
        </SuspenseLoading>
      }
    ></Route>

    <Route
      path=":id"
      element={
        <SuspenseLoading>
          <CustomerDetails />
        </SuspenseLoading>
      }
    ></Route>
  </Route>
);

export default CustomerRoutes;
