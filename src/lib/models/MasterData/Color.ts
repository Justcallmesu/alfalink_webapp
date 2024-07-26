import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface ColorModel extends BaseModel {
  name: string;
}

export interface CreateColorDto {
  name: string;
}

export interface UpdateColorDto extends CreateColorDto {}

export interface ColorQueryDto extends BaseRequestModel {
  name?: string;
}
