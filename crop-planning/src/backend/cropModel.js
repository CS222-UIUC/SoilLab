/*

attributes: a dictionary.

what an dictionary input should look like:
{
    LowerTemperatureLimit: (float, unit in Farenheit), UpperTemperatureLimit: (float, unit in Farenheit),
    LowerIrrigationLimit: (float, unit in cm), UpperIrrigationLimit: (float, unit in cm), (these are the depth of water per week)
    LowerSunLightHour: (float, unit in hour), 
    Radius(unit in cm, radius of the area needed for growth): (float)
    LowerSoilPH: (float, unit in PH), UpperSoilPH: (float, unit in PH),
    PlantFamily: String containing name of plant family that the crop belongs to
    BadNeighbors: Array of strings containing names of crops that should not be grown with this crop
    (can add more)
}

a sample attributes dictionary input:


{
    LowerTemperatureLimit: 59.0, UpperTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, UpperIrrigationLimit: 100.0,
    LowerSunLightHour: 1500.0,
    Radius(unit in cm, radius of the area needed for growth): 20.0
    ** the area needed for the plant is a square, the side length of the square is 2 * radius + 1
    LowerSoilPH: 4.0, UpperSoilPH: 5.0,
    PlantFamily: "Nightshade"
    BadNeighbors: ["Onion", "Garlic", "Chives"]
    (can add more)
}

*/

import { Crop } from "./crop";

class CropAttrs {
    constructor (attributes) {
        this.lowerTemperatureLimit = attributes.LowerTemperatureLimit;
        this.upperTemperatureLimit = attributes.UpperTemperatureLimit;
        this.lowerIrrigationLimit = attributes.LowerIrrigationLimit;
        this.upperIrrigationLimit = attributes.UpperIrrigationLimit;
        this.lowerSunLightHour = attributes.LowerSunLightHour; 
        this.radius = attributes.Radius;
        this.lowerSoilPH = attributes.LowerSoilPH;
        this.upperSoilPH = attributes.UpperSoilPH;
        this.plantFamily = attributes.PlantFamily;
        this.badNeighbors = attributes.BadNeighbors;
    }
}

class CropModel {
    name = "Crop";
    description = "N/A";

    constructor (name, description, attributes, bn) {
        this.name = name;
        this.description = description;
        if (attributes instanceof CropAttrs) {
            this.attributes = attributes;
        } else {
            this.attributes = new CropAttrs(attributes);
        }
    }
}

export {CropModel, CropAttrs};