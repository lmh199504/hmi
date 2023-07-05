export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
}

export interface PagePortDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: PortDTO[];
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

// PortDTO
export interface PortDTO {
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 代码
   */
  code: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  /**
   * 热门港口标志:0:否；1：是
   */
  hotFlag?: number;
  /**
   * IATA代码
   */
  iata?: string;
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
  remark?: string;
  remarkEn?: string;
  /**
   * 航线类型/内部航线
   */
  routeType?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 港口类型
   */
  type?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  countryCode: string;
  regionCode: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  code: string;
  name?: string;
  nameEn?: string;
  hotFlag?: number;
  iata?: string;
  latitude?: number;
  longitude?: number;
  routeType?: string;
  type: string;
  countryCode: string;
  regionCode?: string;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
  hotFlag?: number;
  iata?: string;
  latitude?: number;
  longitude?: number;
  routeType?: string;
  type: string;
  countryCode?: string;
}

export interface StatusParams {
  id: string;
  version: number;
}
