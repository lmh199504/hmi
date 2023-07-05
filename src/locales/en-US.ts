import btn from "./en-US/btn";
import dictType from "./en-US/source/dictType";
import global from "./en-US/global";
import menu from "./en-US/menu";
import fullMap from "./en-US/fullMap";
import sourceCntSize from "./en-US/source/cntSize";
import sourceCntMaterial from "./en-US/source/cntMaterial";
import sourceLocationCode from "./en-US/source/locationCode";
import sourceComponentCode from "./en-US/source/componentCode";
import sourceDamagtType from "./en-US/source/damageType";
import sourceDamageCode from "./en-US/source/damageCode";
import sourceRepairCode from "./en-US/source/repairCode";
import sourceCntCondition from "./en-US/source/cntCondition";
import sourceYard from "./en-US/source/yard";
import sourceMoveBox from "./en-US/source/moveBox";
import sourceTenantMoveBox from "./en-US/source/tenantMoveBox";
import sourceCustomer from "./en-US/source/customer";
import sourceProducer from "./en-US/source/producer";
import sourceShipDynamics from "./en-US/source/shipDynamics";
import sourcePort from "./en-US/source/port";
import sourceLocation from "./en-US/source/location";
import sourcePricingArea from "./en-US/source/pricingArea";
import sourceProduct from "./en-US/source/product";
import sourceCusProduct from "./en-US/source/cusProduct";

// 订单
import orderEnterReservation from "./en-US/order/enterReservation";
import preOrder from "./en-US/order/preOrder";
import orderMaintenance from "./en-US/order/orderMaintenance";
import leadSealing from "./en-US/order/leadSealing";
// 中控
import controlCntAreaMana from "./en-US/control/cntAreaMana";
import controlCntLot from "./en-US/control/cntLot";
import controlReservationMsg from "./en-US/control/reservationMsg";
import controlVehicleBlacklist from "./en-US/control/vehicleBlacklist";
import controlTruck from "./en-US/control/truck";

// 机械
import machineService from "./en-US/machine/machineService";
// 场地策划
import sitePlanDropBoxPlan from "./en-US/sitePlan/dropBoxPlan";
export default {
  ...menu,
  ...global,
  ...dictType,
  ...btn,
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
