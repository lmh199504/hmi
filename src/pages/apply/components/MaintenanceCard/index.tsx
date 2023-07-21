import React, { useMemo, useState } from "react";
import { Col, Button } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";
import { MaintenanceDTO } from "@/services/types/check";
import { reqConfirmAcceptance } from "@/services/api/check";

interface Props {
  maintenance: MaintenanceDTO[];
}

const MaintenanceCard: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const maintenanceInfo = useMemo(() => {
    if (props.maintenance?.length) {
      return props.maintenance[0];
    } else {
      return undefined;
    }
  }, [props.maintenance]);
  // 确认验收
  const handleConfirm = () => {
    if (maintenanceInfo) {
      setLoading(true);
      reqConfirmAcceptance({
        id: maintenanceInfo?.id,
        acceptType: "maintenance",
        workOrderNum: maintenanceInfo.workOrderNum,
      })
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };
  return (
    <Col span={5}>
      <div className={`${styles.maintenance_card} ${styles.card}`}>
        <div className={styles.icon}>
          <SvgIcon name="maintenance" />
        </div>
        {!maintenanceInfo ? (
          //  无保养
          <div>
            <div className={styles.title}>保养计划</div>
            <div className={styles.card_remark}>暂无保养计划</div>
          </div>
        ) : maintenanceInfo.approvalStatusCode == "in" ? (
          // 保养计划
          <div style={{ display: "none" }}>
            <div className={styles.title}>保养计划</div>
            <div className={styles.card_remark}>
              预计2023-01-01进行保养，请注意接收保养通知！
            </div>
          </div>
        ) : (
          // 保养中
          <div>
            <div className={styles.title}>保养中...</div>
            <div className={styles.card_remark}>
              请在完成保养后，查验保养结果，完成验收后车辆自动恢复为作业中。
            </div>
            <div className={styles.apply_btn}>
              <Button onClick={handleConfirm} loading={loading}>
                确认验收
              </Button>
            </div>
          </div>
        )}
      </div>
    </Col>
  );
};

export default MaintenanceCard;
