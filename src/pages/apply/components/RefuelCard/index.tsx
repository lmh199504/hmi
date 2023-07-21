import React, { useEffect, useState } from "react";
import { Col, Button } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";
import RefuelDialog from "../RefuelDialog";
import { reqVehicleRefuelStatus, reqVehicleRefuel } from "@/services/api/check";
import { getCar } from "@/utils/setCar";
import { connect } from "umi";
import RootModelState from "@/types/rootModelState";
import { CarStatus } from "@/enums/CarStatus";

interface Props {
  dddeptId?: string;
  dduserId?: string;
}

const RefuelCard: React.FC<Props> = (props) => {  
  // 加油中弹窗
  const [showRefuel, setShowRefuel] = useState(false);
  // 申请按钮加载中
  const [loading, setLoading] = useState(false);
  const handleRefuel = () => {
    setLoading(true);
    reqVehicleRefuel({
      assetName: getCar()?.assetName || "",
      dddeptId: props.dddeptId as string,
      dduserId: props.dduserId as string,
    })
    .then(() => {
      setShowRefuel(true);
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    })
  };
  // 获取加油状态
  const fetchState = () => {
    reqVehicleRefuelStatus({
      assetName: getCar()?.assetName || "",
    }).then((res) => {
      if (res?.data?.statusCode == CarStatus.IN_REFUEL) {
        setShowRefuel(true);
      }
    });
  };
  useEffect(() => {
    fetchState();
  }, []);
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
            <Button onClick={handleRefuel} loading={loading}>加油申请</Button>
          </div>
        </div>
      </Col>

      <RefuelDialog show={showRefuel} setShow={setShowRefuel} />
    </>
  );
};

export default connect((state: RootModelState) => ({
  dddeptId: state.user.userInfo?.dddeptId,
  dduserId: state.user.userInfo?.dduserId,
}))(RefuelCard);
