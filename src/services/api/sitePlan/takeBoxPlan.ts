import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageCarryPlanDTO,
  CarryPlanDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/sitePlan/takeBoxPlan";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageCarryPlanDTO>>(
    "/cds-zk/carry-plan/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/carry-plan", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-zk/carry-plan", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-zk/carry-plan", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-zk/carry-plan/enable", Method.PATCH, params);
};

// 获取详情
export const reqDetail = (id: string) => {
  return https.request<RequestResult<CarryPlanDTO>>(
    `/cds-zk/carry-plan/${id}`,
    Method.GET
  );
};
