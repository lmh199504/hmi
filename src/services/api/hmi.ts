import https from "@/utils/https";
import { Method } from "axios-mapper";
import {
  BaseResponse,
  AssettParams,
  PageableResponseModelAssetMasterDTO,
  CheckInspectionModel,
  InspectionModel,
  SaveSpotCheckParams,
  RemindParams,
  SaveLoginParams,
  RemindResponse,
} from "@/services/types/hmi";

// 获取车牌号列表
export const reqAsset = (params: AssettParams) => {
  return https.request<BaseResponse<PageableResponseModelAssetMasterDTO>>(
    "/cds-zk/him/queryAssetName",
    Method.POST,
    params
  );
};

// 获取点检的数据
export const reqSpotCheckData = () => {
  return https.request<BaseResponse<InspectionModel[]>>(
    "/cds-zk/him/selectInspectionType",
    Method.GET
  );
};
// 获取当日是否检点过
export const reqSpotCheckStatus = (params: {assetName: string}) => {
  return https.request<BaseResponse<CheckInspectionModel>>(
    "/cds-zk/him/checkInspectionStatus",
    Method.POST,
    params
  );
};
// 保存点检
export const reqSaveSpotCheck = (params: SaveSpotCheckParams) => {
  return https.request("/cds-zk/him/addInspectionRecord", Method.POST, params);
};
// 车牌号获取维修保养提醒
export const reqRemind = (params: RemindParams) => {
  return https.request<ResponseMmt<RemindResponse>>("/cds-zk/him/getStatus", Method.GET, params);
};

// 车载登录保存
export const reqSaveLogin = (params: SaveLoginParams) => {
  return https.request("/cds-zk/work-region/save-hmi-login-user", Method.POST, params)
}