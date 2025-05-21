import { IDeviceList } from "@domain/entities/Device/device-list.interface";

export interface IDeviceRepository {
    DeviceList():Promise<IDeviceList>;
}