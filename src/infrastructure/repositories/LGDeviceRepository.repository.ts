import { IDeviceList } from "@domain/entities/Device/device-list.interface";
import { IDeviceRepository } from "@domain/repositories/device/device.repository";

export class LGDeviceRepository implements IDeviceRepository {
    async DeviceList(): Promise<IDeviceList> {

        const data: IDeviceList = {
            messageId: 'a7sy8a7syas7as',
            timestamp: '17263817263',
            response: [
                {
                    deviceId: '123651826318726',
                    deviceInfo: {
                        alias: '123612783612',
                        deviceType: 'a7sy8a7syas7as',
                        groupId: '1237612',
                        modelName: 'diasdiuaisdas',
                        reportable: true
                    }
                }
            ]
        }
        return Promise.resolve(data);
    }

}