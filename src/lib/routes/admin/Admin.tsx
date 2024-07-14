import SuspenseLoading from "@/views/Base/SuspenseLoading";
import PrivateRoute from "@/views/Guard/PrivateRoute";
import PublicRoute from "@/views/Guard/PublicRoute";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import CustomerRoutes from "./Customers/Customer";
import { MasterDataRoutes } from "./MasterData/MasterData";
import CarRoutes from "./Car/CarRoutes";
import { InspeksiRoutes } from "./Inspeksi/InspeksiRoutes";
import { PenjualanRoutes } from "./Penjualan/PenjualanRoutes";
import { UsersRoutes } from "./Users/UsersRoutes";
import { RolesRoutes } from "./Roles/RolesRoutes";

/**
 * Layout
 */
const LoginLayout = lazy(() => import("@/views/Layout/LoginLayout"));
const AdminLayout = lazy(() => import("@/views/Layout/AdminLayout"));
const ChangePassword = lazy(
  () => import("@/views/Admin/auth/ChangePassword/ChangePassword")
);
const UpdateMe = lazy(() => import("@/views/Admin/auth/UpdateMe/UpdateMe"));

/**
 * Pages
 */
const AdminLogin = lazy(
  () => import("@/views/Admin/auth/admin-login/AdminLogin")
);
const AdminHome = lazy(() => import("@/views/Admin/admin-home/admin-home"));

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
        <Route
          index
          element={
            <SuspenseLoading>
              <AdminHome />
            </SuspenseLoading>
          }
        ></Route>

        {/* Customer Routes */}
        {CustomerRoutes}

        {/* Cars Routes */}
        {CarRoutes}

        {/* Inspection Routes */}
        {InspeksiRoutes}

        {/* Penjualan Routes */}
        {PenjualanRoutes}

        {/* Master Data */}
        {MasterDataRoutes}

        {/* Users Routes */}
        {UsersRoutes}

        {/* Roles Routes */}
        {RolesRoutes}

        <Route
          path="change-password"
          element={
            <SuspenseLoading>
              <ChangePassword />
            </SuspenseLoading>
          }
        ></Route>

        <Route
          path="update-me"
          element={
            <SuspenseLoading>
              <UpdateMe />
            </SuspenseLoading>
          }
        ></Route>
      </Route>
    </Route>

    {/* Login Route */}
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
