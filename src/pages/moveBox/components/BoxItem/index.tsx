import React, { useMemo } from "react";
import styles from "./index.less";
import SvgIcon from "@/components/SvgIcon";
import { Button, Input, Form } from "antd";

interface Props {
  selectId?: string | number;
  id: string | number;
  onSelect: (id: string | number) => void;
}

const BoxItem: React.FC<Props> = (props) => {
  const [form] = Form.useForm();
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
            <Form layout="vertical" form={form}>
              <div className={styles.form}>
                <div>
                  <Form.Item label="起始场位">
                    <Input readOnly />
                  </Form.Item>
                </div>
                <div className={styles.car_input}>
                  <Form.Item label="车辆">
                    <Input readOnly />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item label="目的场位">
                    <Input readOnly />
                  </Form.Item>
                </div>
              </div>
            </Form>
            <Form layout="vertical">
              <Form.Item
                label={<span className={styles.label_span}>确认</span>}
              >
                <Button type="primary">确认</Button>
              </Form.Item>
            </Form>
          </div>
          <div className={styles.remark}>备注：这里显示备注文本。</div>
        </div>
      )}
    </div>
  );
};

export default BoxItem;
