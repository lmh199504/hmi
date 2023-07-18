import { reqUserInfo } from "@/services/api/user";
import { LoginResult } from "@/services/types/user";
import { Effect, Reducer } from "umi";

export type UserInfo = LoginResult | undefined;

export interface UserState {
  userInfo: UserInfo;
}

export interface UserModel {
  namespace: "user";
  state: UserState;
  reducers: {
    setUserInfo: Reducer<UserState>;
  };
  effects: {
    getInfo: Effect;
  };
}

const userModel: UserModel = {
  namespace: "user",
  state: {
    userInfo: undefined,
  },
  reducers: {
    setUserInfo: (state, { payload }) => {
      if (state) {
        return { ...state, userInfo: payload };
      }
      return {
        userInfo: undefined,
      };
    },
  },
  effects: {
    *getInfo(_, { call, put }) {
      const { data } = yield call(reqUserInfo);
      yield put({ type: "setUserInfo", payload: data.data });
    },
  },
};

export default userModel;
