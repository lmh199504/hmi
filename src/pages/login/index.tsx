import React, { useEffect, useState } from "react";
import styles from "./index.less";
import { Form, Input, Select, message } from "antd";
import { ArrowRightOutlined, LoadingOutlined } from "@ant-design/icons";
import { userLogin } from "@/services/api/user";
import { reqAsset } from "@/services/api/hmi";
import { AssetMasterDTO } from "@/services/types/hmi";
import { setToken } from "@/utils/auth";
import { history } from "umi";
import { setCar } from "@/utils/setCar";
import { reqSaveLogin } from "@/services/api/hmi";

const Login: React.FC = () => {
  const [carList, setCarList] = useState<AssetMasterDTO[]>([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [carLoading, setCarLoading] = useState(false);
  const fetchCar = (val?: string) => {
    setCarLoading(true);
    reqAsset({
      current: 1,
      pageSize: 10,
      exampleModel: {
        assetName: val,
        enable: 1,
      },
    })
      .then((res) => {
        setCarList(res?.data?.collection || []);
        setCarLoading(false);
      })
      .catch(() => {
        setCarLoading(false);
      });
  };
  const handleSearch = (val: string) => {
    fetchCar(val);
  };

  useEffect(() => {
    fetchCar();
  }, []);

  // 登录
  const handleLogin = async () => {
    try {
      const data = form.getFieldsValue();
      if (!data.loginLocation) {
        message.warn("请选择车号");
        return;
      }
      if (!data.userCode) {
        message.warn("请输入用户名");
        return;
      }
      if (!data.password) {
        message.warn("请输入密码");
        return;
      }
      if (loading) {
        return;
      }
      setLoading(true);
      const res = await userLogin({
        ...data,
      });
      setToken(res?.data.token || "");
      setCar(data.loginLocation);
      await reqSaveLogin({ deviceCode: data.loginLocation });
      history.push("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    // console.log(res);
  };
  return (
    <div className={styles.login}>
      <div className={styles.login_content}>
        <div className={styles.title}>欢迎登录车载系统</div>
        <Form form={form}>
          <Form.Item name="loginLocation">
            <Select
              onSearch={handleSearch}
              placeholder="请选择车号"
              options={carList}
              showSearch
              fieldNames={{
                label: "assetName",
                value: "assetName",
              }}
              allowClear
              loading={carLoading}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </Form.Item>
          <Form.Item name="userCode">
            <Input
              allowClear
              autoComplete="off"
              placeholder="请输入用户名"
              maxLength={10}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              allowClear
              autoComplete="off"
              placeholder="请输入密码"
              type="password"
            />
          </Form.Item>
        </Form>
        <div className={styles.login_btn_wrapper}>
          <div className={styles.login_btn} onClick={handleLogin}>
            {loading ? (
              <LoadingOutlined />
            ) : (
              <>
                <div>登录</div>
                <ArrowRightOutlined />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
