export interface PageParams {
  current?: number;
  order?: string[];
  size?: number;
  /**
   * 用户账号ID
   */
  userId?: number;
  /**
   * 用户账号名
   */
  userName?: string;
}

export interface PageLoginLogDTO {
  current?: number;
  size?: number;
  total?: number;
  pages?: number;
  records?: LoginLogDTO[];
}

export interface LoginLogDTO {
  /**
   * 浏览器类型
   */
  browser?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 登录状态（0成功 1失败）
   */
  enable?: number;
  id?: string;
  /**
   * 登录IP地址
   */
  ipaddr?: string;
  /**
   * 登录地点
   */
  loginLocation?: string;
  /**
   * 访问时间
   */
  loginTime?: Date;
  /**
   * 提示消息
   */
  msg?: string;
  /**
   * 操作系统
   */
  os?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 用户账号ID
   */
  userId?: number;
  /**
   * 用户账号名
   */
  userName?: string;
  version?: number;
}

// 查询条件
export interface QueryParams {
  /**
   * 用户账户名
   */
  userName?: string;
  /**
   * 起始登录时间
   */
  loginTimeBegin?: string;
  /**
   * 结束登录时间
   */
  loginTimeEnd?: string;
  /**
   * 登录状态 0成功 1失败
   */
  enable?: number;

  /**
   * 前端专用 [起始时间, 结束时间]
   */
  loginTime?: Date[];
}
