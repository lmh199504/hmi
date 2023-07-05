import React from "react";
import { Col, Button, Row } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";

const RepairCard: React.FC = () => {
  return (
    <Col span={10}>
      <div className={`${styles.repair_card} ${styles.card}`}>
        <div className={styles.icon}>
          <SvgIcon name="repair" />
        </div>
        <div className={styles.title}>维修申请</div>
        <div className={styles.repair_option}>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col><Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
            <Col span={6}>
              <div className={styles.repair_option_item}>皮带异响</div>
            </Col>
          </Row>
        </div>
        <div className={styles.apply_btn}>
          <Button>维修申请</Button>
        </div>
      </div>
    </Col>
  );
};

export default RepairCard;
