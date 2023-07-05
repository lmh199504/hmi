import React from "react";
import { Row } from "antd";
import styles from "./index.less";
import RefuelCard from "./components/RefuelCard";
import RepairCard from "./components/RepairCard";
import MaintenanceCard from "./components/MaintenanceCard";

const Apply: React.FC = () => {
  return (
    <>
      <div className={styles.apply}>
        <div className={styles.apply_title}>发起申请</div>
        <Row gutter={20}>
          <RefuelCard />
          <RepairCard />
          <MaintenanceCard />
        </Row>
      </div>
    </>
  );
};
export default Apply;
