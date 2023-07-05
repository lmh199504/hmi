import { CustomFile } from "@/types/upfile";
import { Moment } from "moment";

export interface PageParams {
  /**
   * 创建人姓名
   */
  createBy?: string;
  /**
   * 创建结束时间
   */
  createEndTime?: string;
  createTime?: [Date, Date];
  /**
   * 创建人id
   */
  createId?: number;
  /**
   * 创建开始时间
   */
  createStartTime?: string;
  current?: number;
  /**
   * 是否有效:0:失效；1:有效
   */
  enable?: number;
  /**
   * 订单有效期止
   */
  expirationEnd?: string;
  /**
   * 订单有效期起
   */
  expirationStart?: string;
  expiration?: [Date, Date];
  order?: string[];
  size?: number;
  tenantId?: number;
  /**
   * 车辆代码
   */
  truckCode?: string;
  /**
   * 修改人姓名
   */
  updateBy?: string;
  /**
   * 修改结束时间
   */
  updateEndTime?: string;
  updateTime?: [Date, Date];
  /**
   * 修改人id
   */
  updateId?: number;
  /**
   * 修改开始时间
   */
  updateStartTime?: string;
}

export interface PageMcTruckBlacklistDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: McTruckBlacklistDTO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
}

/**
 * OrderItem
 */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/**
 * McTruckBlacklistDTO，机械-集卡车黑名单 DTO
 * 接口数据返回值
 */
export interface McTruckBlacklistDTO {
  /**
   * 创建人姓名
   */
  createBy?: string;
  /**
   * 创建人id
   */
  createId?: number;
  /**
   * 创建时间
   */
  createTime?: Date;
  delFlag?: number;
  /**
   * 是否有效:0:失效；1:有效
   */
  enable?: number;
  /**
   * 订单有效期止
   */
  expirationEnd?: Date;
  /**
   * 订单有效期起
   */
  expirationStart?: Date;
  id: string;
  /**
   * 原因
   */
  reason?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 车辆代码
   */
  truckCode?: string;
  /**
   * 修改人姓名
   */
  updateBy?: string;
  /**
   * 修改人id
   */
  updateId?: number;
  /**
   * 修改时间
   */
  updateTime?: Date;
  version: number;
  /**
   * 附件id
   */
  attachmentId?: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  /**
   * 是否有效:0:失效；1:有效
   */
  enable?: number;
  /**
   * 订单有效期止
   */
  expirationEnd?: string;
  /**
   * 订单有效期起
   */
  expirationStart?: string;
  /**
   * 原因
   */
  reason?: string;
  /**
   * 车辆代码/车牌号
   */
  truckCode?: string;
  expiration?: [Moment, Moment];

  file: CustomFile[];
}

export interface EditParams extends CreateParams {
  id: string;
  version: number;
}

export interface StatusParams {
  id: string;
  version: number;
}
