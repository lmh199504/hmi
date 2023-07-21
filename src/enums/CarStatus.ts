/**
 * 车辆状态
 */

export enum CarStatus {
  /**
   * 保养中
   */
  IN_MAINTENANCE = "IN_MAINTENANCE",
  /**
   * 待机中
   */
  IN_STANDBY = "IN_STANDBY",
  /**
   * 加油中
   */
  IN_REFUEL = "IN_REFUEL",
  /**
   * 维修中
   */
  IN_REPAIR = "IN_REPAIR",
  /**
   * 作业中
   */
  AT_WORK = "AT_WORK",
}

export enum CarStatusId {
  /**
   * 保养中
   */
  IN_MAINTENANCE = "2710dcdc4cdd4ead9a3c060fa2030eb1",
  /**
   * 待机中
   */
  IN_STANDBY = "70fce713793a4a7fa7123867ffe68846",
  /**
   * 加油中
   */
  IN_REFUEL = "8b93d23f77124104aebd2cf290283ff7",
  /**
   * 维修中
   */
  IN_REPAIR = "a296b49509df4ef59089bb04fecb8ce7",
  /**
   * 作业中
   */
  AT_WORK = "d6d4c5fa02194d78b8842609c23b030c",
}

export enum CarStatusName {
  /**
   * 保养中
   */
  IN_MAINTENANCE = "保养中",
  /**
   * 待机中
   */
  IN_STANDBY = "待机中",
  /**
   * 加油中
   */
  IN_REFUEL = "加油中",
  /**
   * 维修中
   */
  IN_REPAIR = "维修中",
  /**
   * 作业中
   */
  AT_WORK = "作业中",
}

export const VehicleStatusOptions = [
  {
    id: CarStatusId.AT_WORK,
    code: CarStatus.AT_WORK,
    name: CarStatusName.AT_WORK,
  },
  {
    id: CarStatusId.IN_REPAIR,
    code: CarStatus.IN_REPAIR,
    name: CarStatusName.IN_REPAIR,
  },
  {
    id: CarStatusId.IN_MAINTENANCE,
    code: CarStatus.IN_MAINTENANCE,
    name: CarStatusName.IN_MAINTENANCE,
  },
  {
    id: CarStatusId.IN_STANDBY,
    code: CarStatus.IN_STANDBY,
    name: CarStatusName.IN_STANDBY,
  },
  {
    id: CarStatusId.IN_REFUEL,
    code: CarStatus.IN_REFUEL,
    name: CarStatusName.IN_REFUEL,
  },
];

export const AT_WORK = {
  vehicleStatusId: CarStatusId.AT_WORK,
  vehicleStatusCode: CarStatus.AT_WORK,
  vehicleStatus: CarStatusName.AT_WORK,
};
