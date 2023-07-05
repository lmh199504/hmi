export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
}

export interface PageProductSubpackageDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: ProductSubpackageDTO[];
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
 * ProductSubpackageDTO，基础数据管理—租户产品分包商维护 DTO
 * 接口数据返回值
 */
export interface ProductSubpackageDTO {
  /**
   * 业务要素
   */
  bizFactor?: string;
  /**
   * 业务对象
   */
  bizOb?: string;
  /**
   * 条件值
   */
  conditionValue?: string;
  /**
   * 控件类型
   */
  controlType?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  id?: string;
  /**
   * 逻辑符
   */
  logicalSymbol?: string;
  /**
   * 产品名称
   */
  productName?: string;
  /**
   * 关联的租户产品ID
   */
  productTenantId?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  /**
   * 租户名
   */
  tenantName?: string;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
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
