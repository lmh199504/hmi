import React, { useMemo } from "react";
import styles from "./index.less";
import { Row, Col, Switch, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { setCheck } from "@/utils/check"

interface Props {
  className?: string;
  onFinish: () => void
}

const SpotCheck: React.FC<Props> = (props) => {
  const className = useMemo(() => {
    const arr = [styles.spotCheck];
    if (props.className) {
      arr.push(props.className);
    }
    return arr.join(" ");
  }, [props.className]);

  const handleFinish = () => {
    props.onFinish()
    setCheck()
  };
  return (
    <div className={className}>
      <div className={styles.title}>车辆日常点检</div>
      <div className={styles.content}>
        <Row gutter={20} itemType="flex">
          <Col span={8}>
            <div className={styles.card}>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>发动机机油</div>
                  <div className={styles.check_content}>
                    停机检查时，机油必须在尺度线二分之一以上
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>水箱水位</div>
                  <div className={styles.check_content}>
                    肉眼看水位在水箱口为标准
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>电瓶电解液</div>
                  <div className={styles.check_content}>
                    须高出极板5-10mm，正负极必须干净，并涂有凡士林
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>液压油油位</div>
                  <div className={styles.check_content}>
                    油位须在尺度线二分之一以上
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.card}>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>空气滤清器</div>
                  <div className={styles.check_content}>
                    保持干净，2-3天须吹灰一次
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>轮胎气压及螺丝</div>
                  <div className={styles.check_content}>
                    检查轮胎气压及螺丝是否正常
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>门架各部位、吊具链条</div>
                  <div className={styles.check_content}>
                    门架各部位连接销是否松动、脱出等现象，链条是否有异样；吊具是否有裂纹、破损、变形
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>仪表指示</div>
                  <div className={styles.check_content}>
                    打开电门检查仪表指示（机油压力、水温、充电等）是否正常
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.card}>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>所有灯光</div>
                  <div className={styles.check_content}>所有灯光是否正常</div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>变速箱油位</div>
                  <div className={styles.check_content}>
                    发动机起动后，变速箱油位须在尺度线的二分之一以上
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>仪表板</div>
                  <div className={styles.check_content}>
                    发动起动后，仪表板工作是否正常
                  </div>
                </div>
              </div>
              <div className={styles.swith_item}>
                <div className={styles.left_switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
                <div className={styles.right_content}>
                  <div className={styles.check_title}>刹车制动</div>
                  <div className={styles.check_content}>
                    检查刹车制动是否正常
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.check_btn}>
        <Button type="primary" onClick={handleFinish}>点检完成</Button>
      </div>
    </div>
  );
};

export default SpotCheck;
