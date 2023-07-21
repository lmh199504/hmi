import React, { useEffect, useState } from "react";
import { Row } from "antd";
import styles from "./index.less";
import RefuelCard from "./components/RefuelCard";
import RepairCard from "./components/RepairCard";
import MaintenanceCard from "./components/MaintenanceCard";
import { reqCheckData } from "@/services/api/check";
import { getCar } from "@/utils/setCar";
import { CheckAcceptDataModel } from "@/services/types/check";
const Apply: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checkAcceptData, setCheckAcceptData] = useState<CheckAcceptDataModel>({
    repair: [],
    maintenance: [],
  });
  // 获取维修保养的状态
  // const fetchStatus = () => {
  //   reqVehicleStatus({
  //     assetName: getCar()?.assetName || "",
  //   })
  //     .then((res) => {
  //       setLoading(false);
  //       console.log(res);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // };
  // 获取维修、保养明细
  const getDetails = () => {
    setLoading(true);
    reqCheckData({
      assetName: getCar()?.assetName || "",
    })
      .then((res) => {
        if (res?.data) {
          setCheckAcceptData(res.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log(loading);
    // fetchStatus();
    getDetails();
  }, []);

  return (
    <>
      <div className={styles.apply}>
        <div className={styles.apply_title}>发起申请</div>
        <Row gutter={20}>
          <RefuelCard />
          <RepairCard repair={checkAcceptData.repair} />
          <MaintenanceCard maintenance={checkAcceptData.maintenance} />
        </Row>
      </div>
    </>
  );
};
export default Apply;
