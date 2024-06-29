import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface CustomerModel extends BaseModel {
  fullName: string;
  email: string;
  birthPlace: string;
  birthDate: string;
  address: string;
}

export interface CustomerQuery extends BaseRequestModel {
  fullName?: string;
}
