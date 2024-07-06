import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";
import { Dayjs } from "dayjs";

export interface CustomerModel extends BaseModel {
  fullName: string;
  nik: string;
  address: string;
  birthPlace?: string;
  birthDate?: Dayjs;

  /**
   * Customer Contact Data
   */
  email?: string;
  phoneNumber: string;
  whatsappNumber?: string;
}

export interface CreateCustomerModel {
  fullName: string;
  nik: string;
  address: string;
  birthPlace?: string;
  birthDate?: Dayjs;

  /**
   * Customer Contact Data
   */
  email?: string;
  phoneNumber: string;
  whatsappNumber?: string;
}

export interface CustomerQuery extends BaseRequestModel {
  fullName?: string;
}
