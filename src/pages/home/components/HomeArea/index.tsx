import React, { useMemo } from "react";
import styles from "./index.less";
import { Badge } from "antd";

interface Props {
  className?: string;
  onDetail: () => void;
}

const HomeArea: React.FC<Props> = (props) => {
  const className = useMemo(() => {
    const arr = [styles.homeArea];
    if (props.className) {
      arr.push(props.className);
    }
    return arr.join(" ");
  }, [props.className]);

  const handleDetail = () => {
    props.onDetail();
  };
  return (
    <div className={className}>
      <div className={styles.content}>
        <div className={styles.box}>1T</div>

        <div
          className={`${styles.box} ${styles.box_active}`}
          style={{
            left: "20px",
          }}
          onClick={handleDetail}
        >
          <Badge count={99} offset={[10, -10]}>
            <div className={styles.areaCode}>1T</div>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default HomeArea;
