import React, { useMemo } from "react";
import styles from "./index.less";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import BoxList from "../BoxList";
import Map from "../Map";
import { LeftOutlined } from "@ant-design/icons";

interface Props {
  className?: string;
}

const DetailMap: React.FC<Props> = (props) => {
  const className = useMemo(() => {
    const arr = [styles.home];
    if (props.className) {
      arr.push(props.className);
    }
    return arr.join(" ");
  }, [props.className]);
  return (
    <div className={className}>
      <div className={styles.left}>
        <div className={styles.input}>
          <Input
            placeholder="请输入车号/箱号数据查询"
            prefix={<SearchOutlined />}
          />
        </div>

        <div className={styles.tool_wrapper}>
          <div className={styles.tool_btn}>
            <div className={`${styles.btn} ${styles.btn_active}`}>全部</div>
            <div className={styles.btn}>提箱</div>
            <div className={styles.btn}>落箱</div>
          </div>
          <div className={styles.todos}>待办任务：148</div>
        </div>

        <div className={styles.sroll_list}>
          <BoxList />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.nav}>
          <div className={styles.back}>
            <LeftOutlined />
            <div className={styles.text}>返回</div>
          </div>
          <div className={styles.nav_title}>1Q01</div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default DetailMap;
