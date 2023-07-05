export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
  tenantName?: string;
  productId?: string;
}

export interface PageProductTenantDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: ProductTenantDTO[];
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
 * ProductTenantDTO，基础数据管理—租户产品维护 DTO
 * 接口数据返回值
 */
export interface ProductTenantDTO {
  subpackageId: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 跨结算公司结算：0：否；1：是  （默认不勾选）
   */
  crossSettlementFlag?: number;
  delFlag?: number;
  id: string;
  /**
   * 内部组织 0：否；1：是 （默认为空）
   */
  internalFlag?: number;
  /**
   * 关联的产品ID
   */
  productId?: string;
  /**
   * 产品名称
   */
  productName?: string;
  /**
   * 产品服务
   */
  productService?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 服务分包商
   */
  subpackage?: string;
  tenantId?: number;
  /**
   * 租户名
   */
  tenantName?: string;
  /**
   * 租户产品名称
   */
  tenantProductName?: string;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  /**
   * 内部组织 0：否；1：是 （默认为空）
   */
  internalFlag?: number;
  /**
   * 关联的产品ID
   */
  productId: string;
  /**
   * 产品名称
   */
  productName: string;
  /**
   * 产品服务
   */
  productService: string;
  /**
   * 服务分包商
   */
  subpackage: string;
  /**
   * 服务分包商Id
   */
  subpackageId: string;
  /**
   * 租户名
   */
  tenantName: string;
  /**
   * 租户产品名称
   */
  tenantProductName?: string;
}

export interface EditParams {
  /**
   * 跨结算公司结算：0：否；1：是  （默认不勾选）
   */
  crossSettlementFlag?: number;
  id: string;
  /**
   * 内部组织 0：否；1：是 （默认为空）
   */
  internalFlag?: number;
  /**
   * 关联的产品ID
   */
  productId: string;
  /**
   * 产品名称
   */
  productName: string;
  /**
   * 产品服务
   */
  productService: string;
  /**
   * 服务分包商
   */
  subpackage: string;
  /**
   * 服务分包商Id
   */
  subpackageId: string;
  /**
   * 租户名
   */
  tenantName: string;
  /**
   * 租户产品名称
   */
  tenantProductName?: string;
  version: number;
}

export interface StatusParams {
  id: string;
  version: number;
}

export interface SaveNameParams {
  productId: string;
  tenantProductName: string;
  productName: string;
}
