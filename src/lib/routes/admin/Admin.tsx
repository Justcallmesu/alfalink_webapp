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
const AdminLogin = lazy(() => import("@/views/auth/admin-login/AdminLogin"));

/**
 * Instances
 */

export default (
  <Route path="/admin">
    <Route element={<PrivateRoute url="./login" />}>
      <Route
        index
        element={
          <SuspenseLoading>
            <AdminLayout />
          </SuspenseLoading>
        }
      />
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
