import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PagePutEPlanDTO,
  PutEPlanDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
  SituationParams,
  PutEPlanSituationDTO,
} from "@/services/types/sitePlan/dropBoxPlan";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PagePutEPlanDTO>>(
    "/cds-zk/put-E-plan/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/put-E-plan", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-zk/put-E-plan", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-zk/put-E-plan", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-zk/put-E-plan/enable", Method.PATCH, params);
};

// 获取详情
export const reqDetail = (id: string) => {
  return https.request<RequestResult<PutEPlanDTO>>(
    `/cds-zk/put-E-plan/${id}`,
    Method.GET
  );
};

// 获取订单策划情况
export const reqSituation = (params: SituationParams) => {
  return https.request<RequestResult<PutEPlanSituationDTO[]>>(
    "/cds-zk/put-E-plan/situation",
    Method.POST,
    params
  );
};
