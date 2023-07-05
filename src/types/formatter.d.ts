interface injectDataIndexParams {
  pages: number;
  size: number;
  data: Array<any>;
  /**
   * 偏移量，默认值为1
   */
  offset?: number;
  /**
   * 索引键名，默认值为index
   */
  indexName?: string;
}
