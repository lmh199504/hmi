import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageOperateLogDTO,
  PageParams,
} from "@/services/types/system/operateLog";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageOperateLogDTO>>(
    "/cds-basic/oper-log/page",
    Method.GET,
    params
  );
};
