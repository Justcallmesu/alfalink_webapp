import { CarModel } from "../Car/Car";
import { TargetBankModel } from "../MasterData/TargetBank";
import { BaseModel } from "../base";
import { CustomerModel } from "../customer/customer";
import { BaseRequestModel } from "../globals/RequestModel";

export enum PenjualanStatus {
  /**
   * General
   */
  CHECKING = "Customer Checking Mobil",
  MOBIL_DISERAHKAN = "Mobil Diserahkan",
  SELESAI = "Selesai",
  PELUNASAN_DP = "Pelunasan DP",
  BARU = "Baru",

  /**
   * Status Kredit
   */
  PANJAR = "Panjar",
  SURVEY = "Survey",
  MENUNGGU_RESPON = "Menunggu Respon Pusat",
  PENAMBAHAN_DP = "PENAMBAHAN DP",
  MENERIMA_PENAMBAHAN_DP = "Menerima Penambahan DP",

  /**
   * Status Cash
   */
  DITERIMA = "Diterima",
  NEGOSIASI = "Negosiasi",

  /**
   * Berhasil
   */
  MENUNGGU_SURAT_PENCAIRAN = "Menunggu Surat Pencairan",

  /**
   * GAGAL
   */
  TIDAK_SANGGUP_PENAMBAHAN_DP = "Tidak Sanggup Penambahan DP",
}

export enum metodePembayaran {
  CASH = "Cash",
  KREDIT = "Kredit",
}

export interface PenjualanModel extends BaseModel {
  mobil: CarModel;
  metodePembayaran: metodePembayaran;
  tanggalPenjualan: Date;
  customer: CustomerModel;
  isDP: boolean;
  totalDP: number;
  totalTerbayar: number;
  bankTujuan?: TargetBankModel;
  status: PenjualanStatus;
}

export interface CreatePenjualanDto {
  mobil: string;
  metodePembayaran: metodePembayaran;
  tanggalPenjualan: Date;
  customer: string;
  isDP?: boolean;
  totalDP?: number;
  totalTerbayar?: number;
  bankTujuan?: string;
}

export interface UpdatePenjualanDto extends CreatePenjualanDto {}

export interface UpdatePenjualanStatusDto {
  status?: PenjualanStatus;
}

export interface PenjualanQueryDto extends BaseRequestModel {
  mobil?: string;
  customer?: string;
}
