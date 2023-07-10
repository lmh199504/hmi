import React from "react";
import styles from "./index.less";
import { Form, Input } from "antd";
import { ArrowRightOutlined, LoadingOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login_content}>
        <div className={styles.title}>欢迎登录车载系统</div>
        <Form>
          <Form.Item>
            <Input
              allowClear
              autoComplete="off"
              placeholder="请选择车号"
              maxLength={8}
            />
          </Form.Item>
          <Form.Item>
            <Input allowClear autoComplete="off" placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item>
            <Input
              allowClear
              autoComplete="off"
              placeholder="请输入密码"
              type="password"
            />
          </Form.Item>
        </Form>
        <div className={styles.login_btn_wrapper}>
          <div className={styles.login_btn}>
            <LoadingOutlined />
            <div>登录</div>
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
