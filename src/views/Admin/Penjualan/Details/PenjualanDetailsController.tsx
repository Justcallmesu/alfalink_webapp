import React from "react";
import usePenjualanDetailsModel from "./PenjualanDetailsModel";
import { useNavigate } from "react-router-dom";

function usePenjualanDetailsController() {
  const { penjualanData, isPenjualanFetching, mutateDeletePenjualan } =
    usePenjualanDetailsModel();

  const navigate = useNavigate();

  const handleDeletePenjualan = (id: string) => {
    mutateDeletePenjualan({ id });
  };

  return {
    penjualanData,
    isPenjualanFetching,
    handleDeletePenjualan,
    navigate,
  };
}

export default usePenjualanDetailsController;
