import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageParams,
  PageLoginLogDTO,
} from "@/services/types/system/loginLog";

export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageLoginLogDTO>>(
    "/cds-user/login-log/page",
    Method.GET,
    params
  );
};
