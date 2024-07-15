import { CarModel } from "../Car/Car";
import { BaseModel } from "../base";
import { BaseRequestModel } from "../globals/RequestModel";

export enum InspeksiStatus {
  BARU = "Mobil baru",
  CUCI = "Cuci Mobil",
  POLES = "Poles Mobil",
  BENGKEL = "Servis Mobil",
  INSPEKSI = "Inspeksi Mobil",
  SELESAI = "Selesai",
}

export interface InspeksiField {
  description?: string;
  isOk?: boolean;
}

export interface InspeksiModel extends BaseModel {
  mobil: CarModel;
  catatan?: string;
  status: InspeksiStatus;
  ketebalanBanBenjolan?: InspeksiField;
  bautBan?: InspeksiField;
  tekananAngin?: InspeksiField;
  klakson?: InspeksiField;
  pemantikApi?: InspeksiField;
  speaker?: InspeksiField;
  tutupDerek?: InspeksiField;
  spionElektrik?: InspeksiField;
  dongkrakKunciBan?: InspeksiField;
  bukuManual?: InspeksiField;
  radioTvCd?: InspeksiField;
  antena?: InspeksiField;
  dopVelg?: InspeksiField;
  kunciSerap?: InspeksiField;
  jok?: InspeksiField;
  lampuPlafonPutihOrange?: InspeksiField;
  gagangPintu?: InspeksiField;
  catBawhBesi?: InspeksiField;
  sarungJok?: InspeksiField;
  karpetDasar?: InspeksiField;
  kameraMundur?: InspeksiField;
  lampuPlafon?: InspeksiField;
  spoiler?: InspeksiField;
  talangAir?: InspeksiField;
  pelindungLumpur?: InspeksiField;
  aksesoris?: InspeksiField;
  kacaFilm?: InspeksiField;
  setir?: InspeksiField;
  lampuLuarNyalaBening?: InspeksiField;
  mesin?: InspeksiField;
  kilatBody?: InspeksiField;
  lampu?: InspeksiField;
  celahPintu?: InspeksiField;
  plafon?: InspeksiField;
  bagasi?: InspeksiField;
  plastikHitamCat?: InspeksiField;
  logo?: InspeksiField;
  bodyPlastikDalamTopi?: InspeksiField;
  lubangBensin?: InspeksiField;
  dashboardSaku?: InspeksiField;
  dongkrak?: InspeksiField;
  kebersihanSarungJok?: InspeksiField;
  sabuk?: InspeksiField;
  kulitPedalTransmisi?: InspeksiField;
  catLebih?: InspeksiField;
  catBawah?: InspeksiField;
  karat?: InspeksiField;
  oli?: InspeksiField;
  airRadiator?: InspeksiField;
  airWiper?: InspeksiField;
  suaraMesin?: InspeksiField;
  vanBelt?: InspeksiField;
  minyakRem?: InspeksiField;
  filterUdaraMesinAc?: InspeksiField;
  airAkiPenjepitAki?: InspeksiField;
  karatMesin?: InspeksiField;
  peredamSuaraPanas?: InspeksiField;
  cekakKancingLuarDalam?: InspeksiField;
  kabel?: InspeksiField;
  minyakKilat?: InspeksiField;
  powerSteering?: InspeksiField;
  transmisi?: InspeksiField;
  rem?: InspeksiField;
  gardan?: InspeksiField;
  airConditioner?: InspeksiField;
  lampuIndikator?: InspeksiField;
  shockPintu?: InspeksiField;
  wiperKaretWiper?: InspeksiField;
  powerWindow?: InspeksiField;
}

export interface CreateInspeksiDto {
  mobil: string;
  catatan?: string;
  merk: string;
  warna: string;
  tahun: number;
  ketebalanBanBenjolan?: InspeksiField;
  bautBan?: InspeksiField;
  tekananAngin?: InspeksiField;
  klakson?: InspeksiField;
  karpet?: InspeksiField;
  pemantikApi?: InspeksiField;
  speaker?: InspeksiField;
  tutupDerek?: InspeksiField;
  spionElektrik?: InspeksiField;
  dongkrakKunciBan?: InspeksiField;
  bukuManual?: InspeksiField;
  radioTvCd?: InspeksiField;
  antena?: InspeksiField;
  dopVelg?: InspeksiField;
  kunciSerap?: InspeksiField;
  jok?: InspeksiField;
  lampuPlafonPutihOrange?: InspeksiField;
  gagangPintu?: InspeksiField;
  catBawahBesi?: InspeksiField;
  sarungJok?: InspeksiField;
  karpetDasar?: InspeksiField;
  kameraMundur?: InspeksiField;
  lampuPlafon?: InspeksiField;
  spoiler?: InspeksiField;
  talangAir?: InspeksiField;
  pelindungLumpur?: InspeksiField;
  aksesoris?: InspeksiField;
  kacaFilm?: InspeksiField;
  setir?: InspeksiField;
  lampuLuarNyalaBening?: InspeksiField;
  mesin?: InspeksiField;
  kilatBody?: InspeksiField;
  lampu?: InspeksiField;
  celahPintu?: InspeksiField;
  plafon?: InspeksiField;
  bagasi?: InspeksiField;
  plastikHitamCat?: InspeksiField;
  logo?: InspeksiField;
  bodyPlastikDalamTopi?: InspeksiField;
  lubangBensin?: InspeksiField;
  dashboardSaku?: InspeksiField;
  dongkrak?: InspeksiField;
  kebersihanSarungJok?: InspeksiField;
  sabuk?: InspeksiField;
  kulitPedalTransmisi?: InspeksiField;
  catLebih?: InspeksiField;
  catBawah?: InspeksiField;
  karat?: InspeksiField;
  oli?: InspeksiField;
  airRadiator?: InspeksiField;
  airWiper?: InspeksiField;
  suaraMesin?: InspeksiField;
  vanBelt?: InspeksiField;
  minyakRem?: InspeksiField;
  filterUdaraMesinAc?: InspeksiField;
  airAkiPenjepitAki?: InspeksiField;
  karatMesin?: InspeksiField;
  peredamSuaraPanas?: InspeksiField;
  cekakKancingLuarDalam?: InspeksiField;
  kabel?: InspeksiField;
  minyakKilat?: InspeksiField;
  powerSteering?: InspeksiField;
  transmisi?: InspeksiField;
  rem?: InspeksiField;
  gardan?: InspeksiField;
  airConditioner?: InspeksiField;
  lampuIndikator?: InspeksiField;
  shockPintu?: InspeksiField;
  wiperKaretWiper?: InspeksiField;
  powerWindow?: InspeksiField;
}

export interface UpdateInspeksiDto extends CreateInspeksiDto {}

export interface UpdateInspeksiStatus {
  status?: InspeksiStatus;
}

export interface InspeksiQueryDto extends BaseRequestModel {
  mobil?: string;
}
