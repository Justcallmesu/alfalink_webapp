import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface BodyStyleModel extends BaseModel {
  name: string;
}

export interface CreateBodyStyleDto {
  name: string;
}

export interface UpdateBodyStyleDto {
  name: string;
}

export interface BodyStyleQueryDto extends BaseRequestModel {
  name?: string;
}
