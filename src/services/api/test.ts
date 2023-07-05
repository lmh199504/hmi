import https from "@/utils/https";
import type { ITestParams, ITestReturn } from "../types/test";
import { Method } from "axios-mapper";

export function reqTestApi(params: ITestParams) {
  return https.request<ITestReturn[]>("/test", Method.POST, params);
}
