export interface LoginData {
  userCode: string;
  password: string;
}
export interface LoginResult {
  /**
   * 订单业务-数据权限组所属用户id集合
   */
  bizorderDpgUserIds?: string;
  /**
   * 手机号
   */
  cellPhone?: string;
  /**
   * 通用数据业务-数据权限组所属用户id集合
   */
  commdataDpgUserIds?: string;
  /**
   * 所属公司companyId集合
   */
  companyIdList?: string[];
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 钉钉组织id
   */
  dddeptId?: string;
  /**
   * 钉钉id
   */
  ddid?: string;
  /**
   * 钉钉用户id
   */
  dduserId?: string;
  /**
   * 下属用户id集合
   */
  downwardUserIds?: string[];
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 企业微信号
   */
  ewechat?: string;
  /**
   * 财务业务-数据权限组所属用户id集合
   */
  financeDpgUserIds?: string;
  /**
   * 是否订单审核人,0-否,1-是
   */
  isOrderAudit?: number;
  /**
   * 员工工号
   */
  jobNumber?: string;
  /**
   * 登录时间
   */
  loginTime?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 采购业务-数据权限组所属用户id集合
   */
  purchaseDpgUserIds?: string;
  roleList?: RoleDTO[];
  /**
   * 所属公司sap code集合
   */
  sapCodeList?: string[];
  /**
   * 报表业务-数据权限组所属用户id集合
   */
  statementsDpgUserIds?: string;
  /**
   * 超级权限
   */
  superAuth?: boolean;
  /**
   * 租户id
   */
  tenantId?: number;
  /**
   * 租户名
   */
  tenantName?: string;
  token?: string;
  /**
   * 上级用户id集合
   */
  upwardUserIds?: string[];
  userCode?: string;
  userId?: string;
  userName?: string;
}

/**
 * RoleDTO
 */
export interface RoleDTO {
  createTime?: string;
  createUser?: string;
  /**
   * 说明
   */
  description?: string;
  /**
   * 是否取消：0-否; 1-是
   */
  isCancel?: string;
  /**
   * 系统自动生成
   */
  isSys?: number;
  /**
   * 角色代码
   */
  roleCode?: string;
  roleId?: number;
  /**
   * 角色名
   */
  roleName?: string;
  /**
   * 租户
   */
  tenantId?: string;
  updateTime?: string;
  updateUser?: string;
}

export interface DDloginData {
  code: string;
}

/**
 * TenantQuery，租户表请求参
 */
export interface TenantParams {
  /**
   * 当前页
   */
  current: number;
  exampleModel?: ExampleModel;
  /**
   * 每页数量
   */
  pageSize: number;
}

/**
 * TenantModel
 */
export interface ExampleModel {
  /**
   * 是否活跃：0-被取消; 1-活跃
   */
  isActive?: number;
  /**
   * 租户代码
   */
  tenantCode?: string;
  /**
   * tenantId
   */
  tenantId?: number;
  /**
   * 租户名
   */
  tenantName?: string;
}

/**
 * TenantDTO
 */
export interface TenantDTO {
  /**
   * 创建日期
   */
  createTime?: string;
  /**
   * 创建人
   */
  createUser?: number;
  /**
   * 页脚
   */
  foot?: string;
  /**
   * 是否活跃：0-被取消; 1-活跃
   */
  isActive?: number;
  /**
   * 项目id
   */
  reqProjectId?: number;
  /**
   * 租户代码
   */
  tenantCode?: number;
  /**
   * tenantId
   */
  tenantId?: number;
  /**
   * 租户名
   */
  tenantName?: string;
  /**
   * 修改日期
   */
  updateTime?: string;
  /**
   * 修改人
   */
  updateUser?: number;
}

// 切换租户参数
export interface ExchangeParams {
  userId: string | number | undefined;
  tenantId: string | number | undefined;
}
