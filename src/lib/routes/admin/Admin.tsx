import SuspenseLoading from "@/views/Base/SuspenseLoading";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

/**
 * Layout
 */
const LoginLayout = lazy(() => import("@/views/Layout/LoginLayout"));

/**
 * Components
 */
const AdminLogin = lazy(() => import("@/views/auth/admin-login/AdminLogin"));

/**
 * Instances
 */

export default (
  <Route path="/admin">
    <Route index />
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

      <Route path="*" element={<Navigate to="/admin" />} />
    </Route>
  </Route>
);
