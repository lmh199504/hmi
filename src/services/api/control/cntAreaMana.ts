import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  // PageCtnBlockDTO,
  ListCtnBlockDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
  CtnBlockDTO,
  PageCtnBlockDTO,
  AreaOfStatusParams,
  AreaTypeParams,
} from "@/services/types/control/cntAreaMana";
import request from "@/utils/axios";

// 分页
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageCtnBlockDTO>>(
    "/cds-zk/ctn-block/page",
    Method.GET,
    params
  );
};

// 获取列表
export const reqList = (params: PageParams) => {
  return https.request<ListCtnBlockDTO>(
    "/cds-zk/ctn-block/list",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/ctn-block", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-zk/ctn-block", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-zk/ctn-block", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-zk/ctn-block/enable", Method.PATCH, params);
};
// 箱子移动
export const reqMove = (data: CtnBlockDTO[]) => {
  return request({
    url: "/cds-zk/ctn-block/move",
    method: Method.POST,
    data,
  });
};
// 设置好坏箱
export const reqSetAreaOfStatus = (data: AreaOfStatusParams) => {
  return request({
    url: "/cds-zk/ctn-block/area/status/setting",
    method: "PATCH",
    data,
  });
};
// 设置空重
export const reqSetAreaType = (data: AreaTypeParams) => {
  return request({
    url: "/cds-zk/ctn-block/area/setting",
    method: "PATCH",
    data,
  });
};

/**
 * 箱区导入
 */
export const reqImport = (data: FormData) => {
  return request({
    url: "/cds-zk/ctn-block/import",
    method: "POST",
    data,
  });
};
