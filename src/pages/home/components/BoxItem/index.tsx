import React, { useMemo } from "react";
import styles from "./index.less";
import SvgIcon from "@/components/SvgIcon";
import { Button } from "antd";

interface Props {
  selectId?: string | number;
  id: string | number;
  onSelect: (id: string | number) => void;
}

const BoxItem: React.FC<Props> = (props) => {
  const selected = useMemo(() => {
    return props.id == props.selectId;
  }, [props.id, props.selectId]);
  const handleSelect = () => {
    props.onSelect(props.id);
  };
  return (
    <div
      className={`${styles.box_item} ${
        props.id == props.selectId ? styles.select : ""
      }`}
      onClick={handleSelect}
    >
      <div className={styles.top}>
        <div className={styles.name_status}>
          <div className={styles.car_no}>浙C1597</div>
          <div className={styles.status_icon}>
            <div className={styles.icon}>
              <SvgIcon name="urgent" />
            </div>
            <div className={styles.text}>加急</div>
          </div>
          <div className={[styles.status_icon, styles.overTime].join(" ")}>
            <div className={styles.icon}>
              <SvgIcon name="overTime" />
            </div>
            <div className={styles.text}>即将超时</div>
          </div>
        </div>
        <div className={styles.box_no}>1Q01 0321</div>
      </div>
      {selected && (
        <div>
          <div className={styles.info}>
            <div className={styles.info_left}>
              <div className={styles.info_item}>CAIU 4604947</div>
              <div className={styles.info_item}>40GP</div>
            </div>
            <Button type="primary">确认</Button>
          </div>
          <div className={styles.remark}>备注：这里显示备注文本。</div>
        </div>
      )}
    </div>
  );
};

export default BoxItem;
