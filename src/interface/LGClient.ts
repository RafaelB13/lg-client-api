import { GetDeviceList, IGetDeviceList } from "@application/use-cases/GetDeviceStatus";
import { LGDeviceRepository } from "@infrastructure/repositories/LGDeviceRepository.repository";
 

export class LGApiClient {
    private readonly deviceList: IGetDeviceList;

    constructor() {
        const deviceRepository = new LGDeviceRepository
        this.deviceList = new GetDeviceList(deviceRepository)
    }

    async DeviceList() {
        return this.deviceList.execute()
    }
}