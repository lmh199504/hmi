import React from "react";
import styles from "./index.less";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import BoxList from "./components/BoxList";
import Map from "./components/Map";


const Home: React.FC = () => {
  return (
    <div className={styles.moveBox}>
      <div className={styles.left}>
        <div className={styles.input}>
          <Input
            placeholder="请输入箱号数字查询"
            prefix={<SearchOutlined />}
          />
        </div>

        <div className={styles.tool_wrapper}>
          <div className={styles.move_title}>移箱任务</div>
          <div className={styles.todos}>待办任务：148</div>
        </div>

        <div className={styles.sroll_list}>
          <BoxList />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.nav}>
          <div className={styles.tabs}>
            <div className={styles.tab_item}>起始</div>
            <div className={styles.tab_item}>车辆</div>
            <div className={styles.tab_item}>目的</div>
          </div>
          <div className={styles.nav_title}>1Q01</div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Home;
