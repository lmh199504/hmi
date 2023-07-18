import { SystemState } from "@/models/system";
import { UserState } from "@/models/user";

interface RootModelState {
  system: SystemState;
  user: UserState;
}

export default RootModelState;
