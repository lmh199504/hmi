import https from "@/utils/https";
import { Method } from "axios-mapper";
import {
  AseetName,
  VehicleRefuelParams,
  VehicleRefuelStatusRe,
  VehicleRepairRequest,
  VehicleTroubleModel,
} from "@/services/types/check";

// 获取车辆的故障描述
export const reqFaultDesc = (params: AseetName) => {
  return https.request<ResponseMmt<VehicleTroubleModel[]>>(
    "/cds-zk/him/queryVehicleTrouble",
    Method.GET,
    params
  );
};

// 获取车辆状态 维修、保养
export const reqVehicleStatus = (params: AseetName) => {
  return https.request("/cds-zk/him/queryVehicleStatus", Method.GET, params);
};
// 获取维修保养明细记录
export const reqCheckData = (params: AseetName) => {
  return https.request("/cds-zk/him/getCheckAcceptData", Method.GET, params);
};
// 维修申请
export const reqApplyRepair = (params: VehicleRepairRequest) => {
  return https.request("/cds-zk/him/addVehicleRepairByPC", Method.POST, params);
};

// 确认验收
// export const req

// 获取车辆加油状态
export const reqVehicleRefuelStatus = (params: AseetName) => {
  return https.request<ResponseMmt<VehicleRefuelStatusRe>>(
    "/cds-zk/him/getVehicleRefuelStatus",
    Method.GET,
    params
  );
};

// 加油申请
export const reqVehicleRefuel = (params: VehicleRefuelParams) => {
  return https.request("/cds-zk/him/addVehicleRefuel", Method.POST, params);
};
