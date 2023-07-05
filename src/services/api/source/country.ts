import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageRegionCountryDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/country";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageRegionCountryDTO>>(
    "/cds-basic/region-country/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/region-country", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/region-country", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/region-country", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-basic/region-country/enable",
    Method.PATCH,
    params
  );
};
