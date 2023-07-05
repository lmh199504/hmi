import https from "@/utils/https";
import type { MenuModel } from "../types/menu";

export function getRoutes() {
  return https.request<MenuModel[]>("/routes");
}
