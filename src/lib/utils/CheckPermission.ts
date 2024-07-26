import { PermissionsEnum } from "../enum/PermissionsEnum";
import { getPermissionsData } from "./LocalStorage";

export interface checkPermissionsProps {
  permissionsCode?: PermissionsEnum;
  group?: string;
  type?: "action" | "group";
}

function checkActionPermission(permissionsCode: PermissionsEnum) {
  const permission = getPermissionsData();

  return !!permission?.find((item) => item.permission_name === permissionsCode);
}

function checkPermissionGroup(group: string) {
  const permission = getPermissionsData();

  return !!permission?.find((item) => item.permission_group === group);
}

export function checkPermissions(props: checkPermissionsProps): boolean {
  const { permissionsCode, type, group } = props;
  if (type === "action") {
    return checkActionPermission(permissionsCode!);
  }

  return checkPermissionGroup(group!);
}
