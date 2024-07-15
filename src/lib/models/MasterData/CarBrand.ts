import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface CarBrandModel extends BaseModel {
  name: string;
}

export interface CreateCarBrandDto {
  name: string;
}

export interface UpdateCarBrandDto extends CreateCarBrandDto {}

export interface CarBrandQueryDto extends BaseRequestModel {
  name?: string;
}
