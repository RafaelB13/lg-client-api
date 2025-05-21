import { IDeviceList } from "@domain/entities/Device/device-list.interface";
import { IDeviceRepository } from "@domain/repositories/device/device.repository";

export interface IGetDeviceList {
    execute(): Promise<IDeviceList>
}

export class GetDeviceList implements IGetDeviceList {
    constructor(private repo: IDeviceRepository){}

    execute() {
        return this.repo.DeviceList()
    }
}