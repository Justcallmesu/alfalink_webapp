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
  role_description: string;
  permissions_id: PermissionsModel[];
}

export interface UserModel extends BaseModel {
  name: string;
  username: string;
  date_created: Date;
  role_id: RoleModel;
}

export interface ChangePasswordDto {
  password: string;
  confirmPassword: string;
  oldPassword: string;
}

export interface UpdateMeDto {
  name: string;
  username: string;
}
