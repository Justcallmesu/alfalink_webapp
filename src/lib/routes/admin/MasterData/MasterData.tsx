import { Route, Routes } from "react-router-dom";
import { CarBrandRoutes } from "./CarBrand/CarBrandRoutes";
import { CarModelRoutes } from "./CarModel/CarModelRoutes";
import { FuelTypeRoutes } from "./FuelType/FuelTypeRoutes";
import { ColorRoutes } from "./Color/ColorRoutes";
import { CarTypeRoutes } from "./CarType/CarTypeRoutes";
import { TargetBankRoutes } from "./TargetBank/TargetBankRoutes";
import { BodyStyleRoutes } from "./BodyStyle/BodyStyle";
import { checkPermissions } from "@/lib/utils/CheckPermission";
import { PermissionsEnum } from "@/lib/enum/PermissionsEnum";

export const MasterDataRoutes = (
  <>
    {checkPermissions({
      group: "Merk",
    }) && CarBrandRoutes}
    {checkPermissions({
      group: "Model",
    }) && CarModelRoutes}
    {checkPermissions({
      group: "Tipe",
    }) && CarTypeRoutes}
    {checkPermissions({
      group: "Warna",
    }) && ColorRoutes}
    {checkPermissions({
      group: "Fuel Type",
    }) && FuelTypeRoutes}
    {checkPermissions({
      group: "Bank Tujuan",
    }) && TargetBankRoutes}
    {checkPermissions({
      group: "Body Style",
    }) && BodyStyleRoutes}
  </>
);
