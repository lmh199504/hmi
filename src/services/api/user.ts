import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  LoginData,
  LoginResult,
  DDloginData,
  TenantParams,
  TenantDTO,
  ExchangeParams,
} from "@/services/types/user";

// 钉钉登录
export const userDDLogin = (data: DDloginData) => {
  return https.request<RequestResult<LoginResult>>(
    "/cds-user/auth/qc-code",
    Method.POST,
    data
  );
};

// 账号登录
export const userLogin = (data: LoginData) => {
  return https.request<RequestResult<LoginResult>>(
    "/cds-user/auth/username",
    Method.POST,
    data
  );
};

// 退出登录
export const reqLogout = () => {
  return https.request("/cds-user/auth/logout", Method.POST);
};

// 用户信息
export const reqUserInfo = () => {
  return https.request<RequestResult<LoginResult>>(
    "/cds-user/user/info",
    Method.GET
  );
};

// 租户列表
export const reqTenantList = (params: TenantParams) => {
  return https.request<RequestResult<TenantDTO[]>>(
    "/cds-user/user/findTenantList",
    Method.POST,
    params
  );
};

// 切换租户
export const reqExchangeTenant = (params: ExchangeParams) => {
  return https.request("/cds-user/auth/exchange-tenant", Method.POST, params);
};
