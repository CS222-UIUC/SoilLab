/*

attributes: a dictionary.

what an dictionary input should look like:
{
    LowerTemperatureLimit: (float, unit in Farenheit), higherTemperatureLimit: (float, unit in Farenheit),
    LowerIrrigationLimit: (float, unit in mL), HigherIrrigationLimit: (float, unit in mL),
    LowerLightLimit: (float, unit in cd), HigherLightLimit: (float, unit in cd)],
    Radius(unit in cm, radius of the area needed for growth): (float)
    (can add more)
}

a sample attributes dictionary input:

{
    TemperatureRange: [59.0, 77.0],
    IrrigationRange: [20.0, 100.0],
    LightIntensityRange: [1500.0, 1800.0],
    Radius: 20.0
}

{
    LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
    LowerLightLimit: 1500.0, HigherLightLimit: 1800.0,
    Radius(unit in cm, radius of the area needed for growth): 20.0
    (can add more)
}

*/

class CropAttrs {
    constructor (attributes) {
        this.lowerTemperatureLimit = attributes.LowerTemperatureLimit;
        this.higherTemperatureLimit = attributes.HigherTemperatureLimit;
        this.lowerIrrigationLimit = attributes.LowerIrrigationLimit;
        this.higherIrrigationLimit = attributes.HigherIrrigationLimit;
        this.lowerLightLimit = attributes.LowerLightLimit;
        this.higherLightLimit = attributes.HigherLightLimit;
        this.radius = attributes.Radius;
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