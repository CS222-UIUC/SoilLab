import {CropModel, CropAttrs} from './cropModel';

let CornAttributes = {
    LowerTemperatureLimit: 60.0, higherTemperatureLimit: 95.0,
    LowerIrrigationLimit: 2.0, HigherIrrigationLimit: 4.0,
    LowerSunLightHour: 6.0,
    Radius: 4.0
}

let TomatoAttributes = {
    LowerTemperatureLimit: 55.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 2.0, HigherIrrigationLimit: 4.0,
    LowerSunLightHour: 8.0,
    Radius: 40.0
}

let CarrotAttributes = {
    LowerTemperatureLimit: 45.0, higherTemperatureLimit: 75.0,
    LowerIrrigationLimit: 2.5, HigherIrrigationLimit: 4.0,
    LowerSunLightHour: 6.0,
    Radius: 4.0
}

let LettuceAttributes = {
    LowerTemperatureLimit: 45.0, higherTemperatureLimit: 70.0,
    LowerIrrigationLimit: 1.5, HigherIrrigationLimit: 2.2,
    LowerSunLightHour: 6.0,
    Radius: 13
}

const CornModel = new CropModel("Corn", "Wow", CornAttributes);
const TomatoModel = new CropModel("Tomato", "Wow", TomatoAttributes);
const CarrotModel = new CropModel("Carrot", "Wow", CarrotAttributes);
const LettuceModel = new CropModel("Lettuce", "Wow", LettuceAttributes);

const CropModels = {
    Corn: CornModel,
    Tomato: TomatoModel,
    Carrot: CarrotModel,
    Lettuce: LettuceModel
}

export {CropModels};