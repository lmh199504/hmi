export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
}

export interface PageCtnLotDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: CtnLotDTO[];
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
 * CtnLotDTO
 */
export interface CtnLotDTO {
  /**
   * 箱区代码
   */
  areaCode?: string;
  /**
   * 贝位
   */
  bay?: number;
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
   * 是否删除
   * 0: 否
   * 1: 是
   */
  delFlag?: number;
  /**
   * 启用标准：0：未启用；1：启用
   */
  enable?: number;
  /**
   * 主键
   */
  id?: string;
  /**
   * 层
   */
  layer?: number;
  /**
   * 最大层高
   */
  maxLayer?: number;
  /**
   * 备注CN
   */
  remark?: string;
  /**
   * 备注EN
   */
  remarkEn?: string;
  /**
   * 排号
   */
  rowNo?: number;
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
  version?: number;
  /**
   * 堆场代码
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
  code: string;
  name?: string;
  nameEn?: string;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
}

export interface StatusParams {
  id: string;
  version: number;
}

/**
 * 返回数据体
 *
 * CtnLotDataDTO
 */
export interface CtnLotDataDTO {
  /**
   * 偶数贝
   */
  evenBay: LocationData[];
  /**
   * 奇数贝
   */
  oddBay: LocationData[];
}

export interface LocationData {
  /**
   * 区
   */
  areaCode: string;
  /**
   * 贝
   */
  bay: number;
  /**
   * 是否启用
   */
  enable: number;
  /**
   * 层
   */
  layer: number;
  /**
   * 排
   */
  row: number;
}

// 设置层高
export interface LayerParams {
  /**
   * 区
   */
  areaCode: string;
  /**
   * 贝位
   */
  bay: number;
  /**
   * 是否启用
   */
  enable?: number;
  /**
   * 层
   */
  layer?: number;
  /**
   * 排号
   */
  rowNo: number;
}

/**
 * 空箱贝查询参数
 */
export interface EmptyParams {
  /**
   * 箱区
   */
  areaCode?: string;
  /**
   * 第几页
   */
  current?: number;
  /**
   * 每页几个
   */
  size?: number;
  tenantId?: number;
  /**
   * 堆场代码
   */
  yardCode?: string;
}

/**
 * 空箱贝位区
 *
 * CtnLotBayAreaDTO
 */
export interface CtnLotBayAreaDTO {
  id: string;
  /**
   * 区
   */
  areaCode?: string;
  /**
   * 可用箱数量
   */
  availableNum?: number;
  /**
   * 贝
   */
  bay?: string;
  /**
   * 贝位
   */
  bayDetail?: string;
  /**
   * 已占用箱数量
   */
  occupyNum?: number;
  /**
   * 总数量
   */
  totalNum?: number;
  /**
   * 堆场代码
   */
  yardCode?: string;
  /**
   * 堆场名称
   */
  yardName?: string;
}

/**
 * 返回数据体
 *
 * Page«CtnLotBayAreaDTO»
 */
export interface PageCtnLotBayAreaDTO {
  /**
   * countId
   */
  countId?: string;
  /**
   * 当前页
   */
  current?: number;
  /**
   * countId
   */
  maxLimit?: number;
  /**
   * 自动优化 COUNT SQL
   */
  optimizeCountSql?: boolean;
  /**
   * {@link #optimizeJoinOfCountSql()}
   */
  optimizeJoinOfCountSql?: boolean;
  /**
   * 排序字段信息
   */
  orders?: OrderItem[];
  /**
   * 查询数据列表
   */
  records?: CtnLotBayAreaDTO[];
  /**
   * 是否进行 count 查询
   */
  searchCount?: boolean;
  /**
   * 每页显示条数，默认 10
   */
  size?: number;
  /**
   * 总数
   */
  total?: number;
}
