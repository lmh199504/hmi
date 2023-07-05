/**
 * axios-mapper 不支持FormaData+file
 * 文件上传不了
 * https://github.com/RainManGO/axios-mapper/issues/4
 */

import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken, removeToken } from "@/utils/auth";
import config from "../../config/serviceSettings";
import { message } from "antd";
import { getLocale } from "umi";

const service = axios.create({
  baseURL: config.baseURL,
  timeout: 60 * 1000,
  withCredentials: true,
  headers: {},
});
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    config.headers.Locale = getLocale();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // const res = response.data;
    const code = response.data.code;
    const errorMsg =
      response.data.error &&
      response.data.error?.indexOf("java.sql.SQLSyntaxErrorException") > -1
        ? response.data.message
        : response.data.error;
    // console.log(response)
    // 文件下载
    if (response.request.responseType === "blob") {
      return response;
    }
    if (code == 0) {
      return response;
    } else if (code == "401" || code == "500") {
      removeToken();
      // removeMenu();
      message.error("登录状态失效");
      window.location.href = "/login";
      return Promise.reject("");
    } else if (code == "403") {
      message.error("无权访问");
      return Promise.reject("");
    } else {
      message.error(errorMsg);
      return Promise.reject(response);
    }
  },
  (error) => {
    message.error("网络错误，请稍后再试~");
    return Promise.reject(error);
  }
);

function request<T = any>(config: AxiosRequestConfig): AxiosPromise<T> {
  return service(config);
}
export default request;
