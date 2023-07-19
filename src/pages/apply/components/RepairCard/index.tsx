import React, { useEffect, useState } from "react";
import { Col, Button, Row, Timeline, message } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";
import { reqApplyRepair, reqFaultDesc } from "@/services/api/check";
import { getCar } from "@/utils/setCar";
import type { VehicleTroubleModel } from "@/services/types/check";

const RepairCard: React.FC = () => {
  const [descList, setDescList] = useState<VehicleTroubleModel[]>([]);
  const [selectList, setSelectList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchList = () => {
    reqFaultDesc({
      assetName: getCar(),
    }).then((res) => {
      setDescList(res?.data || []);
    });
  };
  useEffect(() => {
    fetchList();
  }, []);

  const handleSelectRepair = (val: string) => {
    const index = selectList.findIndex((item) => item == val);
    if (index != -1) {
      const list = selectList.filter((item) => item != val);
      setSelectList(list);
    } else {
      const list = [...selectList, val];
      setSelectList(list);
    }
  };
  // 提交维修申请
  const handleRepair = () => {
    if (selectList.length == 0) {
      message.warn("请先选择故障类型");
      return;
    }
    reqApplyRepair({
      assetName: "",
      assetType: "",
      assetTypeId: "",
      dddeptId: "",
      dduserId: "",
      faultDescription: selectList.join("|"),
    })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <Col span={10}>
      <div className={`${styles.repair_card} ${styles.card}`}>
        <div className={styles.icon}>
          <SvgIcon name="repair" />
        </div>
        {/* 初始状态 */}
        <div>
          <div className={styles.title}>维修申请</div>
          <div className={styles.repair_option}>
            <Row gutter={[16, 16]}>
              {descList.map((item) => (
                <Col key={item.faultDescription} span={6}>
                  <div
                    className={`${styles.repair_option_item} ${
                      selectList.includes(item.faultDescription)
                        ? styles.repair_option_item_active
                        : ""
                    }`}
                    onClick={() => handleSelectRepair(item.faultDescription)}
                  >
                    {item.faultDescription}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className={styles.apply_btn}>
            <Button onClick={handleRepair} loading={loading}>
              维修申请
            </Button>
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
        <div style={{ display: "none" }}>
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
