import "amfe-flexible";
import { getToken, removeToken } from "@/utils/auth";
import { getCar, removeCar } from "@/utils/setCar";
import { history } from "umi";

export async function render(oldRender: () => void) {
  if (getToken() && getCar()) {
    // history.push("/home");
  } else {
    removeCar();
    removeToken();
    history.push("/login");
  }
  oldRender();
}
