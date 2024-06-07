import CheckIsAuthenticated from "@/lib/utils/CheckIsAuthenticated";
import { Navigate, Outlet } from "react-router-dom";
import RouteGuard from "./interface/RouteGuard.interface";

function PrivateRoute<T>({ OutletContext, url }: RouteGuard<T>) {
  return (
    <>
      {CheckIsAuthenticated() ? (
        <Outlet context={OutletContext} />
      ) : (
        <Navigate to={url} />
      )}
      ;
    </>
  );
}

export default PrivateRoute;
