import { getUserData } from "./LocalStorage";

function CheckIsAuthenticated() {
  return getUserData();
}

export default CheckIsAuthenticated;
