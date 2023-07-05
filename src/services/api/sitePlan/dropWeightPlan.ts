import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PagePutFPlanDTO,
  PutFPlanDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/sitePlan/dropWeightPlan";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PagePutFPlanDTO>>(
    "/cds-zk/put-F-plan/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/put-F-plan", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-zk/put-F-plan", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-zk/put-F-plan", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-zk/put-F-plan/enable", Method.PATCH, params);
};

// 获取详情
export const reqDetail = (id: string) => {
  return https.request<RequestResult<PutFPlanDTO>>(
    `/cds-zk/put-F-plan/${id}`,
    Method.GET
  );
};
