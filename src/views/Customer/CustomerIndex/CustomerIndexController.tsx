import React from "react";

function useCustomerIndexController() {
  const tableColumns = [
    "Nama Lengkap",
    "Email",
    "Tempat Lahir",
    "Tanggal Lahir",
    "Alamat",
    "Berlangganan",
  ];

  return {
    tableColumns,
  };
}

export default useCustomerIndexController;
