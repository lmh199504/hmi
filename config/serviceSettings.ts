import { HttpClientConfig } from "axios-mapper";
import { baseURL } from "@/constant/service";

const config: HttpClientConfig = {
  baseURL,
  log: false,
  checkQuickClick: false,
  timeout: 30 * 1000,
  headers: {
    Authorization: "",
  },
};

export default config;
