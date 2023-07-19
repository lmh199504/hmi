import React, { useState } from "react";
import { Modal, message } from "antd";
import styles from "./index.less";
import { CloseCircleOutlined } from "@ant-design/icons";
import Refueling from "@/assets/imgs/refueling.png";
import { reqVehicleRefuelStatus } from "@/services/api/check";
import { CarStatus } from "@/enums/refuel";
import { getCar } from "@/utils/setCar";

interface Props {
  show: boolean;
  setShow: (flag: boolean) => void;
}
const RefuelDialog: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    if (loading) {
      return;
    }
    reqVehicleRefuelStatus({
      assetName: getCar(),
    })
      .then((res) => {
        if (res?.data?.statusCode == CarStatus.IN_REFUEL) {
          message.warn("当前状态不可取消，请在移动短完成加油申请。");
        } else {
          props.setShow(false);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <Modal
      width="100%"
      open={props.show}
      maskClosable={false}
      className={styles.fefuelDialog}
      closeIcon={
        <div className={styles.cancel}>
          <div>取消</div>
          <div>
            <CloseCircleOutlined />
          </div>
        </div>
      }
      centered
      footer={false}
      onCancel={handleCancel}
    >
      <div className={styles.content}>
        <div className={styles.main_content}>
          <div className={styles.refuelImg_wrapper}>
            <img src={Refueling} className={styles.refuelImg} />
          </div>
          <div className={styles.title}>加油中</div>
          <div className={styles.text}>
            当前车辆正在加油，请在移动端填写加油信息。
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RefuelDialog;
