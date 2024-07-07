import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface CarTypeModel extends BaseModel {
  name: string;
}

export interface CreateCarTypeDto {
  name: string;
}

export interface UpdateCarTypeDto extends CreateCarTypeDto {}

export interface CarTypeQueryDto extends BaseRequestModel {
  name?: string;
}
