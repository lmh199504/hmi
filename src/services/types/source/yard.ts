export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
}

export interface PageYardDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: YardDTO[];
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

export interface YardDTO {
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 所属公司
   */
  companyName?: string;
  companyId: string;
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
  remark?: string;
  remarkEn?: string;
  /**
   * 联系电话
   */
  telephone?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 堆场性质
   */
  type?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  cooperationCompanyName: string;
  cooperationCompanyId: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  code: string;
  name?: string;
  nameEn?: string;
  type: string;
  company: string;
  address: string;
  telephone: string;
  longitude: string;
  latitude: string;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
  type: string;
  company: string;
  address: string;
  telephone: string;
  longitude: string;
  latitude: string;
}

export interface StatusParams {
  id: string;
  version: number;
}
