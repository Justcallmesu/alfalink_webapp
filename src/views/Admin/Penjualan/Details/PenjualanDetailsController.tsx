import React from "react";
import usePenjualanDetailsModel from "./PenjualanDetailsModel";
import { useNavigate } from "react-router-dom";
import usePageTitle from "@/lib/hooks/usePage/UsePageTitle";

function usePenjualanDetailsController() {
  const { penjualanData, isPenjualanFetching, mutateDeletePenjualan } =
    usePenjualanDetailsModel();

  const navigate = useNavigate();

  const handleDeletePenjualan = (id: string) => {
    mutateDeletePenjualan({ id });
  };

  usePageTitle({ title: "Detail Penjualan", prevRoute: -1 });

  return {
    penjualanData,
    isPenjualanFetching,
    handleDeletePenjualan,
    navigate,
  };
}

export default usePenjualanDetailsController;
