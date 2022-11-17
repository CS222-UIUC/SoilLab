import {CropModel, CropAttrs} from './cropModel';

/*

References:
https://www.almanac.com/plant/

*/

let CornAttributes = {
    LowerTemperatureLimit: 60.0, UpperTemperatureLimit: 95.0,
    LowerIrrigationLimit: 2.0, UpperIrrigationLimit: 4.0,
    LowerSunLightHour: 6.0,
    Radius: 4.0,
    LowerSoilPH: 5.8, UpperSoilPH: 6.2, 
    PlantFamily: "Grass",
    BadNeighbors: ["Nightshade", "Brassica", "Fennel"]
}

let TomatoAttributes = {
    LowerTemperatureLimit: 55.0, UpperTemperatureLimit: 77.0,
    LowerIrrigationLimit: 2.0, UpperIrrigationLimit: 4.0,
    LowerSunLightHour: 8.0,
    Radius: 40.0,
    LowerSoilPH: 6.2, UpperSoilPH: 6.8, 
    PlantFamily: "Nightshade",
    BadNeighbors: ["Brassica", "Corn", "Nightshade"]
}

let CarrotAttributes = {
    LowerTemperatureLimit: 45.0, UpperTemperatureLimit: 75.0,
    LowerIrrigationLimit: 2.5, UpperIrrigationLimit: 4.0,
    LowerSunLightHour: 6.0,
    Radius: 4.0,
    LowerSoilPH: 6.0, UpperSoilPH: 7.0, 
    PlantFamily: "Umbellifer",
    BadNeighbors: ["Brassica", "Allium", "Nightshade"]
}

let LettuceAttributes = {
    LowerTemperatureLimit: 45.0, UpperTemperatureLimit: 70.0,
    LowerIrrigationLimit: 1.5, UpperIrrigationLimit: 2.2,
    LowerSunLightHour: 6.0,
    Radius: 13.0,
    LowerSoilPH: 6.0, UpperSoilPH: 6.5, 
    PlantFamily: "Asteraceae", //daisy family
    BadNeighbors: ["Brassica"]
}

let PeaAttributes = {
    LowerTemperatureLimit: 40.0, UpperTemperatureLimit: 85.0,
    LowerIrrigationLimit: 1.0, UpperIrrigationLimit: 1.0,
    LowerSunLightHour: 6.0,
    Radius: 2.0,
    LowerSoilPH: 6.0, UpperSoilPH: 7.5,
    PlantFamily: "Legume",
    BadNeighbors: ["Onion", "Garlic", "Chives"]
}

let SoybeanAttributes = {
    LowerTemperatureLimit: 70.0, UpperTemperatureLimit: 95.0,
    LowerIrrigationLimit: 1.0, UpperIrrigationLimit: 1.75,
    LowerSunLightHour: 6.0,
    Radius: 4.0,
    LowerSoilPH: 5.8, UpperSoilPH: 6.2,
    PlantFamily: "Legume",
    BadNeighbors: ["Allium"]
}

let PotatoAttributes = {
    LowerTemperatureLimit: 45.0, UpperTemperatureLimit: 55.0,
    LowerIrrigationLimit: 1.0, UpperIrrigationLimit: 2.0,
    LowerSunLightHour: 6.0,
    Radius: 12.0,
    LowerSoilPH: 6.0, UpperSoilPH: 6.5,
    PlantFamily: "Nightshade",
    BadNeighbors: ["Carrot", "Cucumber", "Onion", "Tomato", "Pepper", "Pumpkin", "Raspberry", "Squash", "Turnip"]
}

let BlueberryAttributes = {
    LowerTemperatureLimit: 50.0, UpperTemperatureLimit: 90.0,
    LowerIrrigationLimit: 1.0, UpperIrrigationLimit: 2.0,
    LowerSunLightHour: 6.0,
    Radius: 48.0,
	LowerSoilPH: 4.0, UpperSoilPH: 5.0, 
    PlantFamily: "Ericaceae",
    BadNeighbors: ["Nightshade", "Brassica", "Melon", "Lettuce", "Collard Greens", "Herbs", "Bean", "Beet", "Pea"]
} 



const CornModel = new CropModel("Corn", "Description", CornAttributes);
const TomatoModel = new CropModel("Tomato", "Description", TomatoAttributes);
const CarrotModel = new CropModel("Carrot", "Description", CarrotAttributes);
const LettuceModel = new CropModel("Lettuce", "Description", LettuceAttributes);
const PeaModel = new CropModel("Pea", "Description", PeaAttributes);
const SoybeanModel = new CropModel("Soybean", "Description", SoybeanAttributes);
const PotatoModel = new CropModel("Potato", "Description", PotatoAttributes);
const BlueberryModel = new CropModel("Blueberry", "Description", BlueberryAttributes);

const CropModels = {
    Corn: CornModel,
    Tomato: TomatoModel,
    Carrot: CarrotModel,
    Lettuce: LettuceModel,
    Pea: PeaModel,
    Soyeabean: SoybeanModel,
    Potato: PotatoModel,
    Blueberry: BlueberryModel
 }

export {CropModels};



/*
*
* referencing Farmer's Almanac & https://www.thespruce.com
/https://www.starkbros.com/growing-guide/how-to-grow/berry-plants/blueberry-plants/location
//https://www.starkbros.com/growing-guide/how-to-grow/berry-plants/blueberry-plants/acclimate
*
*/