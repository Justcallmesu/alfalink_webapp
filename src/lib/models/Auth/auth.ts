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
	permissionName: string;
	permissionDescription: string;
	permissionGroup: string;
}

export interface RoleModel extends BaseModel {
	roleName: string;
	roleDescription: string;
	permissionsId: PermissionsModel[];
}

export interface UserModel extends BaseModel {
	name: string;
	username: string;
	dateCreated: Date;
	roleId: RoleModel;
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
