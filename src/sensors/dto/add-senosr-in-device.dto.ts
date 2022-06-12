import { IsNumber, IsString } from "class-validator";

export class AddSensorInDevice {
  @IsString({ message: "Должно быть строкой" })
  readonly device_id: number;
  @IsNumber({}, { message: "Должно быть числом" })
  readonly sensor_id: number;
}
