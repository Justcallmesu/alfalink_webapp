import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export interface TargetBankModel extends BaseModel {
  bankName: string;
  bankNumber: string;
  bankOwnerName: string;
}

export interface CreateTargetBankDto {
  bankName: string;
  bankNumber: string;
  bankOwnerName: string;
}

export interface UpdateTargetBankDto extends CreateTargetBankDto {}

export interface TargetBankQueryDto extends BaseRequestModel {
  bankName?: string;
}
