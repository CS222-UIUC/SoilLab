import {CropModel, CropAttrs} from './cropModel';

let CornAttributes = {
    LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
    LowerLightLimit: 1500.0, HigherLightLimit: 1800.0,
    Radius: 20.0
}

let BroccoliAttributes = {
    LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
    LowerLightLimit: 1500.0, HigherLightLimit: 1800.0,
    Radius: 20.0
}

let CarrotAttributes = {
    LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
    LowerLightLimit: 1500.0, HigherLightLimit: 1800.0,
    Radius: 5.0
}

let LettuceAttributes = {
    LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
    LowerLightLimit: 1500.0, HigherLightLimit: 1800.0,
    Radius: 20.0
}

const CornModel = new CropModel("Corn", "Wow", CornAttributes);
const BroccoliModel = new CropModel("Broccoli", "Wow", BroccoliAttributes);
const CarrotModel = new CropModel("Carrot", "Wow", CarrotAttributes);
const LettuceModel = new CropModel("Carrot", "Wow", LettuceAttributes);

const CropModels = {
    Corn: CornModel,
    Broccoli: BroccoliModel,
    Carrot: CarrotModel,
    Lettuce: LettuceModel
}

export {CropModels};