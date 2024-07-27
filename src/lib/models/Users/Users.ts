import { BaseRequestModel } from "../globals/RequestModel";

export interface CreateUsersDto {
	name: string;
	username: string;
	password: string;
	roleId: string;
}

export interface UpdateUsersDto extends CreateUsersDto {}

export interface UserQueryDto extends BaseRequestModel {
	name?: string;
}
