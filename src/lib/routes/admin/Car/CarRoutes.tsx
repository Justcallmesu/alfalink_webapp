import { FormTypeEnum } from "@/lib/enum/FormType";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";
import { checkPermissions } from "@/lib/utils/CheckPermission";
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
    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_MOBIL,
      type: "action",
    }) && (
      <Route
        index
        element={
          <SuspenseLoading>
            <CarIndex />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.CREATE_MOBIL,
      type: "action",
    }) && (
      <Route
        path="create"
        element={
          <SuspenseLoading>
            <CarForm formType={FormTypeEnum.CREATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.UPDATE_MOBIL,
      type: "action",
    }) && (
      <Route
        path=":id/edit"
        element={
          <SuspenseLoading>
            <CarForm formType={FormTypeEnum.UPDATE} />
          </SuspenseLoading>
        }
      ></Route>
    )}

    {checkPermissions({
      permissionsCode: PermissionsEnum.READ_MOBIL,
      type: "action",
    }) && (
      <Route
        path=":id"
        element={
          <SuspenseLoading>
            <CarDetails />
          </SuspenseLoading>
        }
      />
    )}
  </Route>
);

export default CarRoutes;
