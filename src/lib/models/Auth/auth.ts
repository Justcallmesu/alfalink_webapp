import { BaseModel } from "../base";

export interface AuthLoginDto {
  username: string;
  password: string;
}

export interface AuthLoginModel {
  username: string;
  name: string;
}

export interface PermissionsModel extends BaseModel {
  permission_name: string;
  permission_description: string;
  permission_group: string;
}

export interface RoleModel extends BaseModel {
  role_name: string;
  permissions_id: PermissionsModel[];
}

export interface UserModel extends BaseModel {
  name: string;
  username: string;
  role_id?: RoleModel;
}
