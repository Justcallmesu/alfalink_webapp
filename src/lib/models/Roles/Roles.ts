import { BaseRequestModel } from "../globals/RequestModel";

export interface CreateRolesDto {
  role_name: string;
  role_description: string;
  permissions_id: string[];
}

export interface UpdateRolesDto extends CreateRolesDto {}

export interface RolesQueryDto extends BaseRequestModel {
  role_name?: string;
}
