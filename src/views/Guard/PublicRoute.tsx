import CheckIsAuthenticated from "@/lib/utils/CheckIsAuthenticated";
import { Navigate, Outlet } from "react-router-dom";
import RouteGuard from "./interface/RouteGuard.interface";

function PublicRoute<T>(
  { OutletContext, url }: RouteGuard<T>,
  props: React.PropsWithChildren
) {
  return (
    <>
      {!CheckIsAuthenticated() ? (
        <Outlet context={OutletContext} />
      ) : (
        <Navigate to={url} />
      )}
      ;
    </>
  );
}

export default PublicRoute;
