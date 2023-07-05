export interface PageParams {
  /**
   * 尺寸
   */
  ctnSize?: string;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 第几页
   */
  current?: number;
  /**
   * 排序方式（正序还是反序）
   * ASC :升序
   * DESC :降序
   */
  order0Direction?: string;
  /**
   * 排序的字段
   */
  order0Field?: string;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 箱属公司ID
   */
  shipCorpId?: string;
  /**
   * 箱属公司名称
   */
  shipCorpName?: string;
  /**
   * 每页几个
   */
  size?: number;
  tenantId?: string;
  /**
   * 堆场编码
   */
  yardCode?: string;
  /**
   * 堆场名称
   */
  yardName?: string;
}

export interface PageReservationMsgDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: ReservationMsgDTO[];
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
 * yard场地管理---预约消息 DTO
 * 接口数据返回值
 *
 * ReservationMsgDTO
 */
export interface ReservationMsgDTO {
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
  createTime?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 是否删除
   * 0: 否
   * 1: 是
   */
  delFlag?: number;
  /**
   * 有效：0：无效；1：有效
   */
  enable?: number;
  /**
   * 主键
   */
  id: string;
  /**
   * 消息
   */
  msg?: string;
  /**
   * 备注CN
   */
  remark?: string;
  /**
   * 备注EN
   */
  remarkEn?: string;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 箱属公司ID
   */
  shipCorpId?: string;
  /**
   * 箱属公司名称
   */
  shipCorpName?: string;
  /**
   * 数据所属租户id
   */
  tenantId?: number;
  /**
   * 最后修改人姓名
   */
  updateBy?: string;
  /**
   * 最后修改人id
   */
  updateId?: number;
  /**
   * 最后修改时间
   */
  updateTime?: string;
  /**
   * 版本号
   */
  version: number;
  /**
   * 堆场编码
   */
  yardCode?: string;
  /**
   * 堆场名称
   */
  yardName?: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  /**
   * 尺寸
   */
  ctnSize: number;
  /**
   * 箱型
   */
  ctnType: string;
  /**
   * 有效：0：无效；1：有效
   */
  enable: number;
  /**
   * 消息
   */
  msg: string;
  /**
   * 箱属公司代码
   */
  shipCorpCode: string;
  /**
   * 箱属公司ID
   */
  shipCorpId: string;
  /**
   * 箱属公司名称
   */
  shipCorpName: string;
  /**
   * 堆场编码
   */
  yardCode: string;
  /**
   * 堆场名称
   */
  yardName: string;
}

export interface EditParams extends CreateParams {
  id: string;
  version: number;
}

export interface StatusParams {
  id: string;
  version: number;
}
