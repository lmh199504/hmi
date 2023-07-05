import https from "@/utils/https";
import { Method } from "axios-mapper";
import type { DeleteParams } from "@/services/types/sitePlan/editTakeBox";

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/carry-plan-detail", Method.DELETE, params);
};
