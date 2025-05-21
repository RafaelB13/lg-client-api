import { IAirConditioner } from "@domain/entities/AirConditioner/status.interface";

export interface AirConditionerRepository {
    Status(): Promise<IAirConditioner>;
}