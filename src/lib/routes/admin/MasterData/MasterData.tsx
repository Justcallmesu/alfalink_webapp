import { Route, Routes } from "react-router-dom";
import { CarBrandRoutes } from "./CarBrand/CarBrandRoutes";
import { CarModelRoutes } from "./CarModel/CarModelRoutes";
import { FuelTypeRoutes } from "./FuelType/FuelTypeRoutes";
import { ColorRoutes } from "./Color/ColorRoutes";
import { CarTypeRoutes } from "./CarType/CarTypeRoutes";
import { TargetBankRoutes } from "./TargetBank/TargetBankRoutes";

export const MasterDataRoutes = (
  <>
    {CarBrandRoutes}
    {CarModelRoutes}
    {CarTypeRoutes}
    {ColorRoutes}
    {FuelTypeRoutes}
    {TargetBankRoutes}
  </>
);
