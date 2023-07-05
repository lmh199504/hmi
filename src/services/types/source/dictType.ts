export interface PageParams {
  current?: number;
  /**
   * 字典主键
   */
  id?: string;
  /**
   * 字典名称
   */
  name?: string;
  order?: any[];
  size?: number;
  /**
   * 状态（0停用 1正常）
   */
  status?: number;
  /**
   * 字典类型
   */
  type?: string;
  search: string;
}

/**
 * DictTypeRequest，基础数据管理—字典类型表 Query
 * 查询接口入参
 */
export interface EditParams {
  id: string;
  /**
   * 字典名称
   */
  name?: string;
  /**
   * 字典名称EN
   */
  nameEn?: string;
  /**
   * 状态（0停用 1正常）
   */
  status?: number;
  /**
   * 字典类型
   */
  type?: string;
  version: number;
}

/**
 * DictTypeRequest，基础数据管理—字典类型表 Query
 * 查询接口入参
 */
export interface CreateParams {
  // id: string;
  /**
   * 字典名称
   */
  name?: string;
  /**
   * 字典名称EN
   */
  nameEn?: string;
  /**
   * 状态（0停用 1正常）
   */
  status?: number;
  /**
   * 字典类型
   */
  type?: string;
  version?: number;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface PageDictType {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: DictTypeDTO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
}
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

export interface DictTypeDTO {
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  id: string;
  /**
   * 字典名称
   */
  name?: string;
  /**
   * 字典名称EN
   */
  nameEn?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 状态（0停用 1正常）
   */
  status?: number;
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 字典类型
   */
  type?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  hover?: boolean;
}

export interface ListParams {
  search?: string;
}
