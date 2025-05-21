export interface DeviceInfo {
  deviceType: string;
  modelName: string;
  alias: string;
  reportable: boolean;
  groupId: string;
}

export interface Device {
  deviceId: string;
  deviceInfo: DeviceInfo;
}

export interface IDeviceList {
  messageId: string;
  timestamp: string;
  response: Device[];
}
