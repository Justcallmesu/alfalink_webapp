import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface FuelTypeModel extends BaseModel {
  name: string;
}

export interface CreateFuelTypeDto {
  name: string;
}

export interface UpdateFuelTypeDto extends CreateFuelTypeDto {}

export interface FuelTypeQueryDto extends BaseRequestModel {
  name?: string;
}
