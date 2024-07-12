import { BodyStyleModel } from "../MasterData/BodyStyle";
import { CarBrandModel } from "../MasterData/CarBrand";
import { CarTypeModel } from "../MasterData/CarType";
import { ColorModel } from "../MasterData/Color";
import { FuelTypeModel } from "../MasterData/FuelType";
import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export enum CarTransmisionEnum {
  AT = "AT",
  MT = "MT",
}

export enum CarTaxStatusEnum {
  HIDUP = "Hidup",
  MATI = "Mati",
  Terblokir = "Terblokir",
}

export enum StatusMobil {
  NEW = "Baru",
  INSPECTION = "Inspeksi",
  Ready = "Siap",
  SERVICE = "Servis",
  POST = "Sedang Dijual",
  SOLD = "Terjual",
}

export interface CarModel extends BaseModel {
  nama: string;
  merk: CarBrandModel;
  bodyStyle?: BodyStyleModel;
  warnaInterior?: ColorModel;
  warnaExterior?: ColorModel;
  jenisBahanBakar?: FuelTypeModel;
  tipe?: CarTypeModel;
  tahunRakit?: number;
  transmisi: CarTransmisionEnum;
  noPolisi: string;
  harga: number;
  statusPajak?: CarTaxStatusEnum;
  totalPajak?: number;
  status: StatusMobil;
}

export interface CreateCarDto {
  nama: string;
  merk: string;
  bodyStyle?: string;
  warnaInterior?: string;
  warnaExterior?: string;
  jenisBahanBakar?: string;
  tipe?: string;
  tahunRakit?: number;
  transmisi: CarTransmisionEnum;
  noPolisi: string;
  harga: number;
  statusPajak?: CarTaxStatusEnum;
  totalPajak?: number;
}

export interface UpdateCarDto extends CreateCarDto {
  status?: StatusMobil;
}

export interface UpdateCarStatusDto {
  status?: StatusMobil;
}

export interface CarQueryDto extends BaseRequestModel {
  nama?: string;
  merk?: string;
  bodyStyle?: string;
  tipe?: string;
  warnaInterior?: string;
  warnaExterior?: string;
  tahunRakit?: string;
  transmisi?: CarTransmisionEnum;
}
