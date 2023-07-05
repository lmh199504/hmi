export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
  userIds?: string;
}

export interface PageMoveUserCodeDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: MoveUserCodeDTO[];
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
 * MoveUserCodeDTO，基础数据管理—租户移箱目的 DTO
 * 接口数据返回值
 */
export interface MoveUserCodeDTO {
  /**
   * 移箱代码 --movecode表
   */
  code?: string;
  /**
   * 公司ID -小飞鱼
   */
  companyId?: number;
  /**
   * 公司名 -小飞鱼
   */
  companyName?: string;
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
   * 精准度要求
   */
  precision?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 小飞鱼用户ID
   */
  userId?: number;
  /**
   * 用户名-小飞鱼
   */
  userName?: string;
  version: number;
}
export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  code: string;
  userId: string;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  userId: string;
}

export interface StatusParams {
  id: string;
  version: number;
}
