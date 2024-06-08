import { UserModel } from "../models/Auth/auth";

export function setUserData(data: UserModel) {
  const userData = {
    name: data.name,
    username: data.username,
    role_id: data.role_id._id,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  const roledata = {
    role_name: data.role_id.role_name,
    permissions: data.role_id.permissions_id,
  };

  localStorage.setItem("role", JSON.stringify(roledata));
  localStorage.setItem(
    "permissions",
    JSON.stringify(data.role_id.permissions_id)
  );
}

export function getUserData() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}
