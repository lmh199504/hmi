enum ESelectUrl {
  COUNTRY = "/cds-basic/region-country/page", // 国家
  PRICEAREA = "/cds-basic/price-area/page", // 计价区域
  REGION = "/cds-basic/region/page", // 行政区域
  MOVE_BOX = "/cds-basic/move-code/page", // 移箱子目的
  PORT = "/cds-basic/port/page", // 港口
  USERLIST = "/cds-user/user/userList", // 用户列表
  /**
   * 船舶
   */
  VESSEL = "/cds-basic/vessel/page",
  /**
   * 堆场合作公司-物流角色为堆场
   */
  COMPANY_LIST = `/cds-basic/cscust/cscustBytype?custType=CM`,
  /**
   * 箱属公司 (物流角色为箱属公司)
   */
  CNT_BELONG_COMPANY_LIST = `/cds-basic/cscust/cscustBytype?custType=CM`,
  USER_COMPANY = "/cds-user/user/companyList", // 所属公司
  SETTLE_OFFICE = "/cds-basic/cscust/settleOffice", // 结算公司
  TENNALIST = "/cds-user/user/findTenantList", // 租户
  /**
   * 客商接口
   */
  CUSTOMER = "/cds-basic/cscust/page",
  /**
   * 委托单位 (物流角色为委托人)
   */
  ENTRUSTED_ORG_LIST = `/cds-basic/cscust/cscustBytype?custType=CM`,
  /**
   * 客商管理中角色为供应商的数据列表
   */
  SUPPLIER = `/cds-basic/cscust/cscustBytype?custType=CM`,
  LOCATION = `/cds-basic/location/page`, // 地点
  /**
   * 客商管理中角色为车队的数据列表
   */
  MOTORCADE = `/cds-basic/cscust/cscustBytype?custType=CM`,
  /**
   * 提箱规则列表
   */
  EXTRACT_RULE = "/cds-cts/packing-rule/page",
  // 字典
  DICT = "/cds-basic/dict-data/all",
  /**
   * 堆场
   */
  YARD = "/cds-basic/yard/page",
  /**
   * 箱区代码
   */
  AREA_CODE = "/cds-zk/ctn-block/list",
  /**
   * 业务类型
   */
  BUSINESS_TYPE = "/cds-basic/product/page",
  /**
   * 箱型尺寸
   */
  CNT_SIZE = "/cds-basic/ctn-properties/page",
  /**
   * 箱况
   */
  CNT_CONDITION = "/cds-basic/ctn-condition/page",
  /**
   * 产品类型
   */
  PRODUCT_TYPE = "/cds-basic/product/type",
}

/**
 * 键值名称
 */
export const FieldNames = {
  PORT: { label: "name", value: "id" },
  VESSEL: { label: "vesselName", value: "vesselCode" },
  CNT_BELONG_COMPANY_LIST: { label: "custNameCn", value: "custCode" },
  ENTRUSTED_ORG_LIST: { label: "custNameCn", value: "custCode" },
  SUPPLIER: { label: "custNameCn", value: "custCode" },
  LOCATION: { label: "name", value: "id" },
  SETTLE_OFFICE: { label: "settleOfficeName", value: "settleOfficeCode" },
  MOTORCADE: { label: "custNameCn", value: "custCode" },
  EXTRACT_RULE: { label: "ruleType", value: "id" },
  BUSINESS_TYPE: { label: "name", value: "code" },
  CUSTOMER: { label: "custNameCn", value: "custCode" },
};

/**
 * 数据路径 默认data.record
 */
export const DataPath = {
  SETTLE_OFFICE: "data",
  PRODUCT_TYPE: "data",
};

/**
 * 多字段
 */
export const MultipleFileds = {
  VESSEL: { vesselName: "vesselName", vesselCode: "vesselCode" },
  CNT_BELONG_COMPANY_LIST: {
    shipCorpName: "custNameCn",
    shipCorpCode: "custCode",
    shipCorpId: "id",
  },
  ENTRUSTED_ORG_LIST: {
    entrustOrgName: "custNameCn",
    entrustOrgId: "id",
  },
};

export default ESelectUrl;
