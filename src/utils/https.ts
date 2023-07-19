import type { HttpClientConfig } from "axios-mapper";
import HttpClient from "axios-mapper";
import config from "../../config/serviceSettings";
import { message } from "antd";
import { getToken, removeToken } from "@/utils/auth";
import { getLocale } from "umi";
// import { removeMenu } from "@/utils/menu";

class Https {
  public static manager: HttpClient;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public static shared(httpConfig: HttpClientConfig) {
    if (!Https.manager) {
      Https.manager = new HttpClient(httpConfig);
      // Add a request interceptor
      Https.manager.httpClient.interceptors.request.use(function (config) {
        // Do something before request is sent 'BEARER'
        const token = getToken();
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
        config.headers.Locale = getLocale();
        return config;
      });
      // Add a response interceptor
      Https.manager.httpClient.interceptors.response.use(
        function (response) {
          const code = response.data.code;
          const errorMsg = response.data.error || response.data.msg || "网络错误，请稍后再试~";
          // 文件
          if (typeof response.data == "string") {
            return response;
          }
          if (code == 0 || response.data.success) {
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
            return Promise.reject("");
          }
        },
        function (error) {
          message.error("网络错误，请稍后再试~");
          return Promise.reject(error);
        }
      );
    }
    return Https.manager;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public static updateConfig(httpConfig?: HttpClientConfig) {
    if (Https.manager) {
      Https.manager.httpClient.defaults = Object.assign(
        Https.manager.httpClient.defaults,
        httpConfig
      );
    } else {
      throw new Error("为创建Https实例");
    }
  }
}

export default Https.shared(config);
