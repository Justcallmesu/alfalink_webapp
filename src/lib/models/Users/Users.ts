import { BaseRequestModel } from "../globals/RequestModel";

export interface CreateUsersDto {
  name: string;
  username: string;
  password: string;
  role_id: string;
}

export interface UpdateUsersDto extends CreateUsersDto {}

export interface UserQueryDto extends BaseRequestModel {
  name?: string;
}
