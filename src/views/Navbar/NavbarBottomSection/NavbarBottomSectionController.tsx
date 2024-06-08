import { logout } from "@/lib/services/Auth/auth.service";
import { getUserData, removeAllCredentials } from "@/lib/utils/LocalStorage";
import { notifications, showNotification } from "@mantine/notifications";
import React from "react";
import { useNavigate } from "react-router-dom";

function useNavbarBottomSectionController() {
  /**
   * Navigate
   */
  const navigate = useNavigate();

  /**
   * Fetch User Data
   */
  const userData = getUserData();

  const handleLogout = async () => {
    await logout();
    notifications.show({
      message: `Logout Berhasil, Sampai Jumpa ${userData.name}!`,
      title: "Logout Berhasil",
      color: "green",
    });

    removeAllCredentials();

    navigate("./login");
  };

  return {
    handleLogout,
    userData,
  };
}

export default useNavbarBottomSectionController;
