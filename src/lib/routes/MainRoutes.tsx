import { Routes } from "react-router-dom";
import { Suspense } from "react";

/**
 * Routes
 */
import Admin from "./admin/Admin";

export function MainRoutes() {
  return (
    <Suspense>
      <Routes>
        {/* Admin */}
        <>{Admin}</>
      </Routes>
    </Suspense>
  );
}
