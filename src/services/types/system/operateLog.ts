export interface PageParams {
  current?: number;
  size?: number;
  begin?: string;
  end?: string;
  businessType?: string;
  operId?: number;
  order?: string[];
  status?: number;
}

export interface PageOperateLogDTO {
  current?: number;
  size?: number;
  total?: number;
  pages?: number;
  records?: OperateLogDTO[];
}

export interface OperateLogDTO {
  businessType?: number;
  costTime?: number;
  errorMsg?: string;
  id?: string;
  jsonResult?: string;
  method?: string;
  operatorType?: number;
  operId?: number;
  operIp?: string;
  operLocation?: string;
  operName?: string;
  operParam?: string;
  operTime?: Date;
  operUrl?: string;
  requestMethod?: string;
  status?: number;
  title?: string;
}

export interface QueryParams {
  /**
   * 业务类型 (0其它 1新增 2修改 3删除)
   */
  businessType?: string;
  /**
   *  操作状态 (1正常 0异常)
   */
  status?: number;
  /**
   *  操作人员
   */
  operName?: string;
  /**
   *  起始操作时间
   */
  beginTime?: string;
  /**
   *  结束操作时间
   */
  endTime?: string;
  /**
   * 耗时长度起始
   */
  costTimeBegin?: number;
  /**
   * 耗时长度结束
   */
  costTimeEnd?: number;
  /**
   * 请求URL
   */
  operUrl?: string;
  /**
   * 请求方式
   */
  requestMethod?: string;

  /**
   * [开始时间, 结束时间]
   */
  operTime?: Date[];
}
