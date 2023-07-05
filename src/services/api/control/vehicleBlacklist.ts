import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageMcTruckBlacklistDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/control/vehicleBlacklist";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageMcTruckBlacklistDTO>>(
    "/cds-zk/mc-truck-blacklist/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/mc-truck-blacklist", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-zk/mc-truck-blacklist", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-zk/mc-truck-blacklist", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-zk/mc-truck-blacklist/enable",
    Method.PATCH,
    params
  );
};
