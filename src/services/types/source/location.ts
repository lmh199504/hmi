export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
  type?: string;
  portId?: string;
  portName?: string;
}

export interface PageLocationDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: LocationDTO[];
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

export interface LocationDTO {
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 编码
   */
  code: string;
  /**
   * 联系人姓名
   */
  contacts?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  id: string;
  /**
   * 维度
   */
  latitude?: number;
  /**
   * 经度
   */
  longitude?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 英文名
   */
  nameEn?: string;
  /**
   * 计价区域
   */
  priceArea?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 联系人电话
   */
  telephone?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 地点类型
   */
  type?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  portId?: string;
  portName?: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  code: string;
  name?: string;
  nameEn?: string;
  type?: string;
  priceArea?: string;
  latitude?: number;
  longitude?: number;
  address?: string;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
  type?: string;
  priceArea?: string;
  latitude?: number;
  longitude?: number;
  address?: string;
}

export interface StatusParams {
  id: string;
  version: number;
}
