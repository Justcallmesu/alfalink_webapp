import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface CarModelModel extends BaseModel {
  name: string;
}

export interface CreateCarModelDto {
  name: string;
}

export interface UpdateCarModelDto extends CreateCarModelDto {}

export interface CarModelQueryDto extends BaseRequestModel {
  name?: string;
}
