import { PermissionsModel, RoleModel, UserModel } from "../models/Auth/auth";

export function setUserData(data: UserModel) {
  const userData = {
    _id: data._id,
    name: data.name,
    username: data.username,
    role_id: data.role_id?._id,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  const roledata = {
    role_name: data.role_id?.role_name,
    permissions: data.role_id?.permissions_id,
  };

  localStorage.setItem("role", JSON.stringify(roledata));
  localStorage.setItem(
    "permissions",
    JSON.stringify(data.role_id?.permissions_id)
  );
}

export function removeAllCredentials() {
  localStorage.removeItem("user");
  localStorage.removeItem("role");
  localStorage.removeItem("permissions");
}

export function getUserData(): UserModel {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function getRoleData(): RoleModel {
  const role = localStorage.getItem("role");
  return role ? JSON.parse(role) : null;
}

export function getPermissionsData(): PermissionsModel[] {
  const permissions = localStorage.getItem("permissions");
  return permissions ? JSON.parse(permissions) : null;
}
