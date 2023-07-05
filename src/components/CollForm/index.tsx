import React, { ReactNode, useEffect, useRef, useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Form, Row, Col, Button, Space } from "antd";
import styles from "./index.less";
import { FormInstance, FormProps } from "antd/es/form";
import { useIntl } from "umi";

interface Props extends FormProps {
  children: ReactNode;
  handleSearch?: () => void;
  handleReset?: () => void;
  form?: FormInstance<any>;
  loading?: boolean;
  showCloseIcon?: boolean;
}
// 一行三个
const COLUMNS = 3;
// 单行高度
const COL_HEIGHT = 56;
const CollForm: React.FC<Props> = (props) => {
  const { formatMessage } = useIntl();

  const refDiv = useRef<HTMLDivElement>(null);
  const [close, setClose] = useState(true);
  const [span, setSpan] = useState(8);
  const [height, setHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const {
    handleSearch,
    handleReset,
    form,
    children,
    loading,
    showCloseIcon = true,
    ...other
  } = props;

  // 计算按钮占多少格
  useEffect(() => {
    const colList = refDiv.current?.querySelectorAll(".form-col") || [];
    if (colList.length > COLUMNS - 1) {
      for (let i = COLUMNS - 1; i < colList.length; i++) {
        if (close) {
          const classArr = colList[i].className.split(" ");
          classArr.push(styles.hidden);
          colList[i].className = classArr.join(" ");
          setSpan(24 / COLUMNS);
        } else {
          colList[i].className = colList[i].className.replace(
            styles.hidden,
            ""
          );
          const l = COLUMNS - (colList.length % COLUMNS);
          setSpan((l * 24) / COLUMNS);
        }
      }
    } else {
      setSpan(8);
    }
    if (close) {
      setHeight(COL_HEIGHT);
    } else {
      setHeight(maxHeight);
    }
  }, [close]);

  // 计算最大高度
  useEffect(() => {
    const colList = refDiv.current?.querySelectorAll(".form-col") || [];

    const colHeight = colList[0].clientHeight || COL_HEIGHT;

    const rows = Math.ceil((colList.length + 1) / COLUMNS);

    if (close) {
      setMaxHeight(colHeight * rows);
    } else {
      setHeight(colHeight);
    }
    setClose(true);
  }, []);
  return (
    <div
      ref={refDiv}
      className={styles.form_wrapper}
      style={{
        height: height ? height + "px" : "auto",
      }}
    >
      <Form
        labelCol={{ span: 7 }}
        colon={false}
        labelWrap={true}
        form={form}
        {...other}
      >
        <Row gutter={16}>
          {children}
          <Col span={span}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Form.Item>
                <Space>
                  <Button onClick={handleReset}>
                    {formatMessage({ id: "btn.reset" })}
                  </Button>
                  <Button
                    onClick={handleSearch}
                    type="primary"
                    loading={loading}
                  >
                    {formatMessage({ id: "btn.search" })}
                  </Button>
                  {showCloseIcon && (
                    <div
                      className={styles.close}
                      onClick={() => setClose(!close)}
                    >
                      {close ? (
                        <div>
                          {formatMessage({ id: "btn.open" })}
                          <DownOutlined />
                        </div>
                      ) : (
                        <div>
                          {formatMessage({ id: "btn.close" })}
                          <UpOutlined />
                        </div>
                      )}
                    </div>
                  )}
                </Space>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CollForm;
