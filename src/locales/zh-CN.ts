import btn from "./zh-CN/btn";
import dictType from "./zh-CN/source/dictType";
import global from "./zh-CN/global";
import menu from "./zh-CN/menu";
import fullMap from "./zh-CN/fullMap";
import sourceCntSize from "./zh-CN/source/cntSize";
import sourceCntMaterial from "./zh-CN/source/cntMaterial";
import sourceLocationCode from "./zh-CN/source/locationCode";
import sourceComponentCode from "./zh-CN/source/componentCode";
import sourceDamagtType from "./zh-CN/source/damageType";
import sourceDamageCode from "./zh-CN/source/damageCode";
import sourceRepairCode from "./zh-CN/source/repairCode";
import sourceCntCondition from "./zh-CN/source/cntCondition";
import sourceYard from "./zh-CN/source/yard";
import sourceMoveBox from "./zh-CN/source/moveBox";
import sourceTenantMoveBox from "./zh-CN/source/tenantMoveBox";
import sourceCustomer from "./zh-CN/source/customer";
import sourceProducer from "./zh-CN/source/producer";
import sourceShipDynamics from "./zh-CN/source/shipDynamics";
import sourcePort from "./zh-CN/source/port";
import sourceLocation from "./zh-CN/source/location";
import sourcePricingArea from "./zh-CN/source/pricingArea";
import sourceProduct from "./zh-CN/source/product";
import sourceCusProduct from "./zh-CN/source/cusProduct";

// 订单
import orderEnterReservation from "./zh-CN/order/enterReservation";
import preOrder from "./zh-CN/order/preOrder";
import orderMaintenance from "./zh-CN/order/orderMaintenance";
import leadSealing from "./zh-CN/order/leadSealing";
// 中控
import controlCntAreaMana from "./zh-CN/control/cntAreaMana";
import controlCntLot from "./zh-CN/control/cntLot";
import controlReservationMsg from "./zh-CN/control/reservationMsg";
import controlVehicleBlacklist from "./zh-CN/control/vehicleBlacklist";
import controlTruck from "./zh-CN/control/truck";

// 机械
import machineService from "./zh-CN/machine/machineService";

// 场地策划
import sitePlanDropBoxPlan from "./zh-CN/sitePlan/dropBoxPlan";
export default {
  ...menu,
  ...global,
  ...btn,
  ...dictType,
  ...fullMap,
  ...sourceCntSize,
  ...sourceCntMaterial,
  ...sourceLocationCode,
  ...sourceComponentCode,
  ...sourceDamagtType,
  ...sourceDamageCode,
  ...sourceRepairCode,
  ...sourceCntCondition,
  ...sourceYard,
  ...sourceMoveBox,
  ...sourceTenantMoveBox,
  ...machineService,
  ...sourceCustomer,
  ...sourceProducer,
  ...sourceShipDynamics,
  ...sourcePort,
  ...sourceLocation,
  ...sourcePricingArea,
  ...orderEnterReservation,
  ...preOrder,
  ...orderMaintenance,
  ...leadSealing,
  ...sourceProduct,
  ...sourceCusProduct,
  ...controlCntAreaMana,
  ...controlCntLot,
  ...sitePlanDropBoxPlan,
  ...controlReservationMsg,
  ...controlVehicleBlacklist,
  ...controlTruck,
};
