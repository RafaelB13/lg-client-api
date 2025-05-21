export interface IAirConditioner {
  airConJobMode: AirConJobMode
  airFlow: AirFlow
  operation: Operation
  powerSave: PowerSave
  temperature: Temperature
  timer: Timer
  sleepTimer: SleepTimer
}

export interface AirConJobMode {
  currentJobMode: string
}

export interface AirFlow {
  windStrength: string
  windStep: number
}

export interface Operation {
  airConOperationMode: string
}

export interface PowerSave {
  powerSaveEnabled: boolean
}

export interface Temperature {
  currentTemperature: number
  targetTemperature: number
  unit: string
}

export interface Timer {
  absoluteStopTimer: string
  absoluteStartTimer: string
}

export interface SleepTimer {
  relativeStopTimer: string
}
