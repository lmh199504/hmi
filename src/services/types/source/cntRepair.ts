import type { DataNode } from "antd/es/tree";

/**
 * 条件查询分页数据
 */
export interface PageParams {
  /**
   * 当前层级： 1位置代码 2部件代码 3损坏代码 4修理代码
   */
  level?: number;
  cntArea?: string;
  current?: number;
  size?: number;
  order?: Array<string>;
  id?: string;
  code?: string;
  nameEn?: string;
  name?: string;
  damageType?: string;
  /**
   * 是否启用： 0未启用   1启用
   */
  enable?: number;
  tenantId?: number;
  createTime?: Date;
  createId?: number;
  createBy?: string;
  /**
   * 是否删除： 0否   1是
   */
  delFlag?: number;
  updateId?: number;
  updateBy?: string;
  updateTime?: Date;
  remark?: string;
  remarkEn?: string;
  version?: number;
  pCode?: string;
  search?: string;
  ancestors?: string;
  ids?: string;
}

export interface PageCtnConditionlDTO {
  records?: CtnConditionlDTO[];
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
}

export interface CtnConditionlDTO extends DataNode {
  id: string;
  tenantId?: number;
  delFlag?: number;
  version?: number;
  createId?: number;
  updateId?: number;
  updateBy?: string;
  createTime?: Date;
  updateTime?: Date;
  remark?: string;
  remarkEn?: string;
  code: string;
  nameEn?: string;
  name?: string;
  damageType?: string;
  enable?: number;
  pcode?: string;
  transMap?: object;
  /**
   * 是否存在子节点（0.否   1.是）
   */
  isSubset?: number;
  ancestors?: null | string;
  level?: number;

  isLeaf?: boolean;
  children?: CtnConditionlDTO[];
}

/**
 * 修改
 */
export interface EditParams {
  id: string;
  version: number;
  code: string;
  nameEn?: string;
  name?: string;
  damageType?: string;
  ancestors?: string;
  cntArea?: string;
  level?: number;
}

/**
 * 添加
 */
export interface CreateParams {
  code: string;
  nameEn: string;
  name: string;
  damageType?: string;
  ancestors?: string;
  cntArea?: string;
  level?: number;
}

/**
 * 删除
 */
export interface DeleteParams {
  id: string;
  version: number;
}

/**
 * 修改状态
 */
export interface StatusParams {
  id: string;
  version: number;
}
