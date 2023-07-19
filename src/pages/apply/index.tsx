import React, { useEffect, useState } from "react";
import { Row } from "antd";
import styles from "./index.less";
import RefuelCard from "./components/RefuelCard";
import RepairCard from "./components/RepairCard";
import MaintenanceCard from "./components/MaintenanceCard";
import { reqVehicleStatus, reqCheckData } from "@/services/api/check";
import { getCar } from "@/utils/setCar";
const Apply: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // 获取维修保养的状态
  const fetchStatus = () => {
    reqVehicleStatus({
      assetName: getCar(),
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  // 获取维修、保养明细

  const getDetails = () => {
    reqCheckData({
      assetName: getCar(),
    }).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    console.log(loading);
    fetchStatus();
    getDetails();
  }, []);

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
