import { BaseRequestModel } from "../globals/RequestModel";

export interface CreateRolesDto {
	roleName: string;
	roleDescription: string;
	permissionsId: string[];
}

export interface UpdateRolesDto extends CreateRolesDto {}

export interface RolesQueryDto extends BaseRequestModel {
	roleName?: string;
}
