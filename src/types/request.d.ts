interface RequestResult<T> {
  code: string;
  data: T;
  error: string | null;
  message: string;
  success: boolean;
}

interface ResponseMmt<T = any> {
  /**
   * 数据包
   */
  data?: T;
  /**
   * 成功/失败附加信息
   */
  msg?: string;
  /**
   * 附加信息,可能附带其他成功失败结果
   */
  msgAppend?: string;
  /**
   * 标识/序号
   */
  seq?: number;
  /**
   * 是否成功
   */
  success?: boolean;
  /**
   * 附加任务是否成功
   */
  successAppend?: boolean;
  /**
   * 车辆加油状态返回值
   */
  tag?: T;
}
