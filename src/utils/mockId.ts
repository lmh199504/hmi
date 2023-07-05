const MOCK_ROW_PREFIX = "MOCK_ROW_ID_";

interface MockIDType {
  prefix: string;
  get: () => string;
  isMock: (id: string) => boolean;
}

class MockId implements MockIDType {
  prefix = "";

  constructor(prefix: string = MOCK_ROW_PREFIX) {
    this.prefix = prefix;
  }

  /**
   * 获取唯一id
   * @returns string
   */
  get() {
    return `${this.prefix}${(Math.random() * 1000000).toFixed(0)}`;
  }

  /**
   * 是否为mockid
   * @param id 唯一id
   * @returns boolean
   */
  isMock(id: string) {
    return !!(id && id.startsWith(this.prefix));
  }
}

export default MockId;
