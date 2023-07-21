import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.less";
import { Row, Col, Switch, Button, Form } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { reqSpotCheckData, reqSaveSpotCheck } from "@/services/api/hmi";
import { InspectionModel } from "@/services/types/hmi";
import { getCar } from "@/utils/setCar";
import { connect } from "umi";
import RootModelState from "@/types/rootModelState";

interface Props {
  className?: string;
  onFinish: () => void;
  dddeptId?: string;
  dduserId?: string;
}

const SpotCheck: React.FC<Props> = (props) => {
  const [spotCheckData, setSpotCheckData] = useState<
    Array<Array<InspectionModel>>
  >([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const className = useMemo(() => {
    const arr = [styles.spotCheck];
    if (props.className) {
      arr.push(props.className);
    }
    return arr.join(" ");
  }, [props.className]);

  const handleFinish = async () => {
    try {
      const data = form.getFieldsValue();
      setLoading(true);
      console.log(data);
      const formatData = {};
      for (const key in data) {
        formatData[key] = data[key] == true ? 1 : 0;
      }
      await reqSaveSpotCheck({
        ...formatData,
        assetName: getCar()?.assetName || "",
        dddeptId: props.dddeptId || "",
        dduserId: props.dduserId || "",
      });
      props.onFinish();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    reqSpotCheckData().then((res) => {
      const list: Array<Array<InspectionModel>> = [];
      if (res?.data) {
        const len = Math.ceil(res.data.length / 4);

        for (let i = 0; i < len; i++) {
          list.push([]);
        }

        for (let i = 0; i < res?.data?.length; i++) {
          const index = Math.floor(i / 4);
          list[index].push(res.data[i]);
          form.setFieldValue(res.data[i].code as string, true);
        }
        setSpotCheckData(list);
      }
    });
  }, []);

  return (
    <div className={className}>
      <div className={styles.title}>车辆日常点检</div>
      <div className={styles.content}>
        <Form form={form}>
          <Row gutter={20} itemType="flex">
            {spotCheckData.map((item, index) => (
              <Col key={index} span={8}>
                <div className={styles.card}>
                  {item.map((check_item) => (
                    <div key={check_item.code} className={styles.swith_item}>
                      <div className={styles.left_switch}>
                        <Form.Item
                          name={check_item.code}
                          valuePropName="checked"
                        >
                          <Switch
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                          />
                        </Form.Item>
                      </div>
                      <div className={styles.right_content}>
                        <div className={styles.check_title}>
                          {check_item.name}
                        </div>
                        <div className={styles.check_content}>
                          {check_item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Form>
      </div>
      <div className={styles.check_btn}>
        <Button type="primary" onClick={handleFinish} loading={loading}>
          点检完成
        </Button>
      </div>
    </div>
  );
};

export default connect((state: RootModelState) => ({
  dddeptId: state.user.userInfo?.dddeptId,
  dduserId: state.user.userInfo?.dduserId,
}))(SpotCheck);
