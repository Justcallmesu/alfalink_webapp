import SuspenseLoading from "@/views/Base/SuspenseLoading";
import PrivateRoute from "@/views/Guard/PrivateRoute";
import PublicRoute from "@/views/Guard/PublicRoute";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

/**
 * Layout
 */
const LoginLayout = lazy(() => import("@/views/Layout/LoginLayout"));
const AdminLayout = lazy(() => import("@/views/Layout/AdminLayout"));

/**
 * Components
 */
const AdminLogin = lazy(() => import("@/views/Admin/auth/admin-login/AdminLogin"));

/**
 * Instances
 */

export default (
  <Route>
    <Route element={<PrivateRoute url="./login" />}>
      <Route
        path="/admin"
        
        element={
          <SuspenseLoading>
            <AdminLayout />
          </SuspenseLoading>
        }
      >
        <Route index element={<>test</>}></Route>
        <Route
          path="customers"
          element={<SuspenseLoading>Hello</SuspenseLoading>}
        ></Route>
      </Route>
    </Route>

    <Route element={<PublicRoute url="/admin" />}>
      <Route
        element={
          <SuspenseLoading>
            <LoginLayout />
          </SuspenseLoading>
        }
      >
        <Route
          path="login"
          element={
            <SuspenseLoading>
              <AdminLogin />
            </SuspenseLoading>
          }
        ></Route>
      </Route>

      <Route path="*" element={<Navigate to="/admin" />} />
    </Route>
  </Route>
);
