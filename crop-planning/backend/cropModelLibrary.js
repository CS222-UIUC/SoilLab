import {CropModel, CropAttrs} from './cropModel';

/*

References:
https://www.almanac.com/plant/

*/

let CornAttributes = {
    LowerTemperatureLimit: 60.0, higherTemperatureLimit: 95.0,
    LowerIrrigationLimit: 2.0, HigherIrrigationLimit: 4.0,
    LowerSunLightHour: 6.0,
    Radius: 4.0,
    BadNeighbors: [""]
    
}

let TomatoAttributes = {
    LowerTemperatureLimit: 55.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 2.0, HigherIrrigationLimit: 4.0,
    LowerSunLightHour: 8.0,
    Radius: 40.0,
    BadNeighbors: [""]
}

let CarrotAttributes = {
    LowerTemperatureLimit: 45.0, higherTemperatureLimit: 75.0,
    LowerIrrigationLimit: 2.5, HigherIrrigationLimit: 4.0,
    LowerSunLightHour: 6.0,
    Radius: 4.0,
    BadNeighbors: [""]
}

let LettuceAttributes = {
    LowerTemperatureLimit: 45.0, higherTemperatureLimit: 70.0,
    LowerIrrigationLimit: 1.5, HigherIrrigationLimit: 2.2,
    LowerSunLightHour: 6.0,
    Radius: 13.0,
    BadNeighbors: [""]
}

let PeaAttributes = {
    LowerTemperatureLimit: 40.0, higherTemperatureLimit: 85.0,
    LowerIrrigationLimit: 1.0, HigherIrrigationLimit: 1.0,
    LowerSunLightHour: 6.0,
    Radius: 2.0,
    BadNeighbors: ["Onion", "Garlic", "Chives"]
}

let SoybeanAttributes = {
    LowerTemperatureLimit: 70.0, higherTemperatureLimit: 95.0,
    LowerIrrigationLimit: 1.0, HigherIrrigationLimit: 1.75,
    LowerSunLightHour: 6.0,
    Radius: 4.0,
    BadNeighbors: [""]
}

let PotatoAttributes = {
    LowerTemperatureLimit: 45.0, higherTemperatureLimit: 55.0,
    LowerIrrigationLimit: 1.0, HigherIrrigationLimit: 2.0,
    LowerSunLightHour: 6.0,
    Radius: 12.0,
    BadNeighbors: ["Carrot", "Cucumber", "Onion", "Tomato", "Pepper", "Pumpkin", "Raspberry", "Squash", "Turnip"]
}

const CornModel = new CropModel("Corn", "Description", CornAttributes);
const TomatoModel = new CropModel("Tomato", "Description", TomatoAttributes);
const CarrotModel = new CropModel("Carrot", "Description", CarrotAttributes);
const LettuceModel = new CropModel("Lettuce", "Description", LettuceAttributes);
const PeaModel = new CropModel("Pea", "Description", PeaAttributes);
const SoybeanModel = new CropModel("Soybean", "Description", SoybeanAttributes);
const PotatoModel = new CropModel("Potato", "Description", PotatoAttributes);

const CropModels = {
    Corn: CornModel,
    Tomato: TomatoModel,
    Carrot: CarrotModel,
    Lettuce: LettuceModel,
    Pea: PeaModel,
    Soyeabean: SoybeanModel,
    Potato: PotatoModel
 }

export {CropModels};



/*
*
* referencing Farmer's Almanac & https://www.thespruce.com
*
*/