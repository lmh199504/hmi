import React from "react";
import { Col, Button, Row, Timeline } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";

const RepairCard: React.FC = () => {
  return (
    <Col span={10}>
      <div className={`${styles.repair_card} ${styles.card}`}>
        <div className={styles.icon}>
          <SvgIcon name="repair" />
        </div>
        {/* 初始状态 */}
        <div style={{ display: "none" }}>
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
            </Row>
          </div>
          <div className={styles.apply_btn}>
            <Button>维修申请</Button>
          </div>
        </div>
        {/* 申请中 */}
        <div style={{ display: "none" }}>
          <div className={styles.title}>维修申请</div>
          <div className={styles.repair_tip}>
            <span>请于</span>
            <span className={styles.tip_time}>2023-01-02 13:00</span>
            <span>前往维修地点</span>
          </div>
          <div className={styles.time_line}>
            <Timeline>
              <Timeline.Item color="blue" className={styles.active_time}>
                <div className={styles.repair_status_title}>
                  <div className={styles.repair_title}>提交申请</div>
                  <div className={styles.repair_status}>已通过</div>
                </div>
                <div className={styles.repair_time}>2023-01-01 13:21:36</div>
              </Timeline.Item>
              <Timeline.Item color="blue" className={styles.active_time}>
                <div className={styles.repair_status_title}>
                  <div className={styles.repair_title}>车队长审批</div>
                  <div className={styles.repair_status}>已通过</div>
                </div>
                <div className={styles.repair_time}>2023-01-01 13:21:36</div>
              </Timeline.Item>
              <Timeline.Item color="blue" className={styles.active_time}>
                <div className={styles.repair_status_title}>
                  <div className={styles.repair_title}>中控审批</div>
                  <div className={styles.repair_status}>已通过</div>
                </div>
                <div className={styles.repair_time}>2023-01-01 13:21:36</div>
              </Timeline.Item>
              <Timeline.Item color="blue" className={styles.active_time}>
                <div className={styles.repair_status_title}>
                  <div className={styles.repair_title}>机务部</div>
                  <div className={styles.repair_status}>已通过</div>
                </div>
                <div className={styles.repair_time}>2023-01-01 13:21:36</div>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
        {/* 维修中 */}
        <div>
          <div className={styles.title}>维修中...</div>
          <div className={styles.repair_ing}>
            请在完成修理后，查验维修结果，完成验收后车辆自动恢复为作业中。
          </div>
          <div className={styles.apply_btn}>
            <Button>确认验收</Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RepairCard;
