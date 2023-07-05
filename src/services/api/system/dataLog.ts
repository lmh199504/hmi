import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageParams,
  PageDataLogDTO,
} from "@/services/types/system/dataLog";

export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageDataLogDTO>>(
    "/cds-basic/data-log/page",
    Method.GET,
    params
  );
};
