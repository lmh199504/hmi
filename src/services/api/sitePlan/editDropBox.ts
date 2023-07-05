import https from "@/utils/https";
import { Method } from "axios-mapper";
import type { DeleteParams } from "@/services/types/sitePlan/editDropBox";

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/put-E-plan-detail", Method.DELETE, params);
};
