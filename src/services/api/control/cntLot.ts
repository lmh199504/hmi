import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageCtnLotDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
  CtnLotDataDTO,
  LayerParams,
  EmptyParams,
  PageCtnLotBayAreaDTO,
} from "@/services/types/control/cntLot";
import request from "@/utils/axios";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageCtnLotDTO>>(
    "/cds-zk/ctn-lot/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/ctn-lot", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-zk/ctn-lot", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-zk/ctn-lot", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-zk/ctn-lot/enable", Method.PATCH, params);
};

// 获取箱位 /ctn-lot/bay/{areaCode}
export const reqAreaCode = (areaCode: string) => {
  return https.request<RequestResult<CtnLotDataDTO>>(
    `/cds-zk/ctn-lot/bay/${areaCode}`
  );
};

// 设置层高
export const reqSetLayer = (data: LayerParams[]) => {
  return request({
    url: "/cds-zk/ctn-lot/layer/setting",
    method: "PATCH",
    data,
  });
};
// 设置禁用启用
export const reqEnable = (data: LayerParams[]) => {
  return request({
    url: "/cds-zk/ctn-lot/enable/setting",
    method: "PATCH",
    data,
  });
};

// 空箱贝位区查询
export const reqEmptyBay = (params: EmptyParams) => {
  return https.request<RequestResult<PageCtnLotBayAreaDTO>>(
    "/cds-zk/ctn-lot/empty/bay",
    Method.POST,
    params
  );
};
