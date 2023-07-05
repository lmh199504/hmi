export interface PageParams {
  current?: number;
  size?: number;
  search?: string;
  dictType?: string;
  dictTypeId?: string;
}
// 修改
export interface EditParams {
  /**
   * 字典标签
   */
  dictLabel: string;
  /**
   * 字典类型
   */
  dictType?: string;
  /**
   * 字段类型的ID
   */
  dictTypeId: string;
  /**
   * 字典键值
   */
  dictValue: string;

  id: string;
  version: number;
}

/**
 * DictDataRequest，基础数据管理—字典数据表 Query
 * 查询接口入参
 */
export interface CreateParams {
  /**
   * 字典标签
   */
  dictLabel: string;
  /**
   * 字典类型
   */
  dictType?: string;
  /**
   * 字段类型的ID
   */
  dictTypeId: string;
  /**
   * 字典键值
   */
  dictValue: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface StatusParams {
  id: string;
  version: number;
}

export interface PageDictDataDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: DictDataDTO[];
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
 * DictDataDTO，基础数据管理—字典数据表 DTO
 * 接口数据返回值
 */
export interface DictDataDTO {
  dictValueEn?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 样式属性（其他样式扩展）
   */
  cssClass?: string;
  /**
   * 是否默认（1是 0否）
   */
  defaultFlag?: number;
  delFlag?: number;
  /**
   * 字典标签
   */
  dictLabel?: string;
  /**
   * 字典类型
   */
  dictType?: string;
  /**
   * 字段类型的ID
   */
  dictTypeId?: string;
  /**
   * 字典键值
   */
  dictValue?: string;
  /**
   * 状态（1正常 0停用）
   */
  enable?: number;
  id: string;
  /**
   * 表格回显样式
   */
  listClass?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
}
