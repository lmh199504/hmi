import React from "react";
import { Col, Button } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";

const MaintenanceCard: React.FC = () => {
  return (
    <Col span={5}>
      <div className={`${styles.maintenance_card} ${styles.card}`}>
        <div className={styles.icon}>
          <SvgIcon name="maintenance" />
        </div>
        <div className={styles.title}>保养计划</div>
        <div className={styles.card_remark}>
          预计2023-01-01进行保养，请注意接收保养通知！
        </div>
        <div className={styles.apply_btn}>
          <Button>确认验收</Button>
        </div>
      </div>
    </Col>
  );
};

export default MaintenanceCard;
