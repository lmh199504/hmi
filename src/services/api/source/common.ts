/**
 * 基础数据-通用接口
 */
import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageFieldsParams,
  PageFieldsDTO,
} from "@/services/types/source/common";

// 根据pageName获取页面字段
export const reqPageFieldsByName = (params: PageFieldsParams) => {
  return https.request<RequestResult<PageFieldsDTO[]>>(
    "/cds-basic/page-field/detail",
    Method.GET,
    params
  );
};
