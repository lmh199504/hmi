import type { Reducer } from "umi";

export enum Layout {
  reverse = "reverse",
  normal = "normal",
}

export interface SystemState {
  homeLayout: Layout;
  moveLayout: Layout;
}

export interface SystemModel {
  namespace: string;
  state: SystemState;
  reducers: {
    setLayout: Reducer<SystemModel>;
  };
}

export enum ActionType {
  home = "home",
  move = "move",
}

export interface Payload {
  type: ActionType;
}

const systemModel = {
  namespace: "system",
  state: {
    homeLayout: Layout.normal,
    moveLayout: Layout.normal,
  },
  reducers: {
    setLayout: (
      state: SystemState,
      { payload }: { payload: Payload; type: string }
    ) => {
      if (payload.type == ActionType.move) {
        return {
          ...state,
          moveLayout:
            state.moveLayout == Layout.normal ? Layout.reverse : Layout.normal,
        };
      } else if (payload.type == ActionType.home) {
        return {
          ...state,
          homeLayout:
            state.homeLayout == Layout.normal ? Layout.reverse : Layout.normal,
        };
      } else {
        return state;
      }
    },
  },
};

export default systemModel;
