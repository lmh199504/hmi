import React, { useState } from "react";
import { Col, Button } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";
import RefuelDialog from "../RefuelDialog";

const RefuelCard: React.FC = () => {
  const [showRefuel, setShowRefuel] = useState(false);
  const handleRefuel = () => {
    setShowRefuel(true);
  };
  return (
    <>
      <Col span={9}>
        <div className={`${styles.refuel_card} ${styles.card}`}>
          <div className={styles.icon}>
            <SvgIcon name="refuel" />
          </div>
          <div className={styles.title}>加油申请</div>
          <div className={styles.card_remark}>
            起申请后，车辆状态将变更为加油中，请在移动端完成加油审批，车辆自动恢复为作业中。
          </div>
          <div className={styles.apply_btn}>
            <Button onClick={handleRefuel}>加油申请</Button>
          </div>
        </div>
      </Col>

      <RefuelDialog show={showRefuel} setShow={setShowRefuel} />
    </>
  );
};

export default RefuelCard;
