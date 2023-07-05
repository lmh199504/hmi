export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
  productType?: string;
  tradeType?: string;
  search?: string;
}

export interface PageProductDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: ProductDTO[];
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
 * ProductDTO，基础数据管理—产品维护 DTO
 * 接口数据返回值
 */
export interface ProductDTO {
  ctnRepairObj?: string;
  ctnMangerObj?: string;
  machineRepairObj: string;
  transObj?: string;
  name: string;
  /**
   * 绑定界面
   */
  bindPage?: string;
  /**
   * 产品编码
   */
  code: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 产品说明
   */
  description?: string;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  id: string;
  /**
   * 中文名
   */
  nameCn?: string;
  /**
   * 英文名
   */
  nameEn?: string;
  /**
   * 产品类型 数据字典
   */
  productType: string;
  remark?: string;
  /**
   * 备注CN
   */
  remarkCn?: string;
  remarkEn?: string;
  /**
   * 排序
   */
  sortNum?: number;
  tenantId?: number;
  /**
   * 贸易方式 数据字典 贸易方式
   */
  tradeType?: string;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  tenantNames?: string;
}

export interface EditProductDTO {
  ctnRepairObj?: string;
  ctnMangerObj?: string;
  machineRepairObj: string;
  transObj?: string;
  name: string;
  /**
   * 绑定界面
   */
  bindPage?: string;
  /**
   * 产品编码
   */
  code: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 产品说明
   */
  description?: string;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  id: string;
  /**
   * 中文名
   */
  nameCn?: string;
  /**
   * 英文名
   */
  nameEn?: string;
  /**
   * 产品类型 数据字典
   */
  productType: string;
  remark?: string;
  /**
   * 备注CN
   */
  remarkCn?: string;
  remarkEn?: string;
  /**
   * 排序
   */
  sortNum?: number;
  tenantId?: number;
  /**
   * 贸易方式 数据字典 贸易方式
   */
  tradeType?: string;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  tenantNames?: TenantNames[];
}
export interface TenantNames {
  tenantId: string;
  tenantName: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  code: string;
  name?: string;
  nameEn?: string;
  tradeType: string;
  description: string;
  tenantNames?: TenantNames[];
  bindPage: string;
  ctnMangerObj?: string;
  ctnRepairObj?: string;
  transObj?: string;
  machineRepairObj?: string;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
  tradeType: string;
  description: string;
  tenantNames?: TenantNames[];
  bindPage: string;
  ctnMangerObj?: string;
  ctnRepairObj?: string;
  transObj?: string;
  machineRepairObj?: string;
}

export interface StatusParams {
  id: string;
  version: number;
}
