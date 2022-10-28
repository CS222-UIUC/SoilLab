/*

attributes: a dictionary.

what an dictionary input should look like:
{
    LowerTemperatureLimit: (float, unit in Farenheit), higherTemperatureLimit: (float, unit in Farenheit),
    LowerIrrigationLimit: (float, unit in cm), HigherIrrigationLimit: (float, unit in cm), (these are the depth of water per week)
    LowerSunLightHour: (float, unit in hour), 
    Radius(unit in cm, radius of the area needed for growth): (float)
    BadNeighbors: Array of strings containing names of crops that should not be grown with this crop
    (can add more)
}

a sample attributes dictionary input:


{
    LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
    LowerSunLightHour: 1500.0,
    Radius(unit in cm, radius of the area needed for growth): 20.0
    ** the area needed for the plant is a square, the side length of the square is 2 * radius + 1
    (can add more)
}

*/

class CropAttrs {
    constructor (attributes) {
        this.lowerTemperatureLimit = attributes.LowerTemperatureLimit;
        this.higherTemperatureLimit = attributes.higherTemperatureLimit;
        this.lowerIrrigationLimit = attributes.LowerIrrigationLimit;
        this.higherIrrigationLimit = attributes.HigherIrrigationLimit;
        this.lowerSunLightHour = attributes.LowerSunLightHour; 
        this.radius = attributes.Radius;
        this.badNeighbors = attributes.BadNeighbors;
    }
}

class CropModel {
    name = "Crop";
    description = "N/A";

    constructor (name, description, attributes) {
        this.name = name;
        this.description = description;
        this.attributes = new CropAttrs(attributes);
    }
}

export {CropModel, CropAttrs};