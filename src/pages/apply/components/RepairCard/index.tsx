import React, { useEffect, useState, useMemo } from "react";
import { Col, Button, Row, message } from "antd";
import styles from "../../index.less";
import SvgIcon from "@/components/SvgIcon";
import {
  reqApplyRepair,
  reqFaultDesc,
  reqConfirmAcceptance,
} from "@/services/api/check";
import { getCar } from "@/utils/setCar";
import type { RepairDTO, VehicleTroubleModel } from "@/services/types/check";
import { connect } from "umi";
import RootModelState from "@/types/rootModelState";

interface Props {
  repair: RepairDTO[];
  dddeptId?: string;
  dduserId?: string;
}

const RepairCard: React.FC<Props> = (props) => {
  const [descList, setDescList] = useState<VehicleTroubleModel[]>([]);
  const [selectList, setSelectList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchList = () => {
    reqFaultDesc({
      assetName: getCar()?.assetName || "",
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
      message.warn("请先选择维修类型");
      return;
    }
    setLoading(true);
    reqApplyRepair({
      assetName: getCar()?.assetName || "",
      assetType: getCar()?.assetType || "",
      assetTypeId: getCar()?.assetTypeId || "",
      dddeptId: props.dddeptId as string,
      dduserId: props.dduserId as string,
      faultDescription: selectList.join("|"),
    })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const repairInfo = useMemo(() => {
    if (props.repair?.length) {
      return props.repair[0];
    } else {
      return undefined;
    }
  }, [props.repair]);

  const tagList = useMemo(() => {
    if (repairInfo) {
      return repairInfo.faultDescription?.split("|") || [];
    } else {
      return [];
    }
  }, [repairInfo]);
  // 确认验收
  const handleConfirm = () => {
    if (repairInfo) {
      setLoading(true)
      reqConfirmAcceptance({
        id: repairInfo?.id,
        acceptType: "repair",
        workOrderNum: repairInfo.workOrderNum
      })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
    }
  };
  return (
    <Col span={10}>
      <div className={`${styles.repair_card} ${styles.card}`}>
        <div className={styles.icon}>
          <SvgIcon name="repair" />
        </div>
        {/* 初始状态 */}
        {!repairInfo ? (
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
        ) : (
          <div>
            <div className={styles.title}>维修申请</div>
            <div className={styles.repair_ing}>
              <div className={styles.repair_ing_item}>
                <div className={styles.repair_ing_item_label}>工单编号：</div>
                <div className={styles.repair_ing_item_val}>
                  {repairInfo.workOrderNum}
                </div>
              </div>
              <div className={styles.repair_ing_item}>
                <div className={styles.repair_ing_item_label}>故障描述：</div>
                <div className={styles.repair_ing_item_val}>
                  <div className={styles.falied_wrapper}>
                    {tagList.map((item) => (
                      <div className={styles.falied_item} key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.repair_ing_item}>
                <div className={styles.repair_ing_item_label}>
                  预计维修时间：
                </div>
                <div className={styles.repair_ing_item_val}>
                  {repairInfo.estimateTime || "-"}
                </div>
              </div>
              <div className={styles.repair_ing_item}>
                <div className={styles.repair_ing_item_label}>工单状态：</div>
                <div className={styles.repair_ing_item_val}>
                  {repairInfo.approvalStatusName}
                </div>
              </div>
            </div>
            <div className={styles.apply_btn}>
              <Button onClick={handleConfirm} loading={loading}>确认验收</Button>
            </div>
          </div>
        )}
      </div>
    </Col>
  );
};

export default connect((state: RootModelState) => ({
  dddeptId: state.user.userInfo?.dddeptId,
  dduserId: state.user.userInfo?.dduserId,
}))(RepairCard);
