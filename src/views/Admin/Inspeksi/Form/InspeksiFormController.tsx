import { useEffect } from "react";
import useInspeksiFormModel from "./InspeksiFormModel";
import { useForm } from "@mantine/form";
import { CreateInspeksiDto } from "@/lib/models/Inspeksi/inspeksi";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function useInspeksiFormController() {
  const { inspectionData, mutatePostInspection, carsData, setCarQuery } =
    useInspeksiFormModel();

  const handleCarSearch = (value: string) => {
    setCarQuery((prevState) => ({
      ...prevState,
      search: value,
    }));
  };

  const form = useForm<CreateInspeksiDto>({
    initialValues: {
      mobil: "",
      catatan: "",
      merk: "",
      warna: "",
      tahun: 0,
      // Kelengkapan
      ketebalanBanBenjolan: { description: "", isOk: false },
      bautBan: { description: "", isOk: false },
      tekananAngin: { description: "", isOk: false },
      karpet: { description: "", isOk: false },
      klakson: { description: "", isOk: false },
      pemantikApi: { description: "", isOk: false },
      speaker: { description: "", isOk: false },
      tutupDerek: { description: "", isOk: false },
      spionElektrik: { description: "", isOk: false },
      dongkrakKunciBan: { description: "", isOk: false },
      bukuManual: { description: "", isOk: false },
      radioTvCd: { description: "", isOk: false },
      antena: { description: "", isOk: false },
      dopVelg: { description: "", isOk: false },
      kunciSerap: { description: "", isOk: false },
      jok: { description: "", isOk: false },
      lampuPlafonPutihOrange: { description: "", isOk: false },
      gagangPintu: { description: "", isOk: false },
      catBawahBesi: { description: "", isOk: false },
      sarungJok: { description: "", isOk: false },
      karpetDasar: { description: "", isOk: false },
      kameraMundur: { description: "", isOk: false },
      lampuPlafon: { description: "", isOk: false },
      spoiler: { description: "", isOk: false },
      talangAir: { description: "", isOk: false },
      pelindungLumpur: { description: "", isOk: false },
      aksesoris: { description: "", isOk: false },
      kacaFilm: { description: "", isOk: false },
      setir: { description: "", isOk: false },
      lampuLuarNyalaBening: { description: "", isOk: false },

      // Kebersihan
      mesin: { description: "", isOk: false },
      kilatBody: { description: "", isOk: false },
      lampu: { description: "", isOk: false },
      celahPintu: { description: "", isOk: false },
      plafon: { description: "", isOk: false },
      bagasi: { description: "", isOk: false },
      plastikHitamCat: { description: "", isOk: false },
      logo: { description: "", isOk: false },
      bodyPlastikDalamTopi: { description: "", isOk: false },
      lubangBensin: { description: "", isOk: false },
      dashboardSaku: { description: "", isOk: false },
      dongkrak: { description: "", isOk: false },
      kebersihanSarungJok: { description: "", isOk: false },
      sabuk: { description: "", isOk: false },
      kulitPedalTransmisi: { description: "", isOk: false },
      catLebih: { description: "", isOk: false },
      catBawah: { description: "", isOk: false },
      karat: { description: "", isOk: false },

      // Mesin
      oli: { description: "", isOk: false },
      airRadiator: { description: "", isOk: false },
      airWiper: { description: "", isOk: false },
      suaraMesin: { description: "", isOk: false },
      vanBelt: { description: "", isOk: false },
      minyakRem: { description: "", isOk: false },
      filterUdaraMesinAc: { description: "", isOk: false },
      airAkiPenjepitAki: { description: "", isOk: false },
      karatMesin: { description: "", isOk: false },
      peredamSuaraPanas: { description: "", isOk: false },
      cekakKancingLuarDalam: { description: "", isOk: false },
      kabel: { description: "", isOk: false },
      minyakKilat: { description: "", isOk: false },
      powerSteering: { description: "", isOk: false },
      transmisi: { description: "", isOk: false },
      rem: { description: "", isOk: false },
      gardan: { description: "", isOk: false },
      airConditioner: { description: "", isOk: false },
      lampuIndikator: { description: "", isOk: false },
      shockPintu: { description: "", isOk: false },
      wiperKaretWiper: { description: "", isOk: false },
      powerWindow: { description: "", isOk: false },
    },
    validate: {
      mobil: (value) => {
        if (!value) {
          return "Mobil harus diisi";
        }
      },
    },
  });

  const handleCarOnChange = (value?: string) => {
    if (!value) return;
    const selectedCar = carsData?.data.find((car) => car._id === value);
    form.setFieldValue("mobil", value);

    form.setFieldValue("merk", selectedCar?.merk?.name ?? "-");
    form.setFieldValue("warna", selectedCar?.warnaExterior?.name ?? "-");
    form.setFieldValue("tahun", +selectedCar?.tahunRakit! ?? undefined);
  };

  const handleSubmit = (values: CreateInspeksiDto) => {
    form.validate();

    mutatePostInspection({
      id: inspectionData?.data?._id,
      data: values,
    });
  };

  useEffect(() => {
    if (inspectionData) {
      form.initialize({
        ...inspectionData.data!,
        mobil: inspectionData.data.mobil?._id,
        merk: inspectionData.data.mobil?.merk?.name ?? "-",
        warna: inspectionData.data.mobil?.warnaExterior?.name ?? "-",
        tahun: +inspectionData.data.mobil?.tahunRakit! ?? 0,
      });
    }
  }, [inspectionData]);

  usePageTitle({ title: "Form Inspeksi", prevRoute: -1 });

  return {
    form,
    carsData,
    handleCarSearch,
    mutatePostInspection,
    handleSubmit,
    handleCarOnChange,
  };
}

export default useInspeksiFormController;
