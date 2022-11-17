class Environment {
    constructor (attributes) {
        this.lowTemperatureRange = attributes.lowTemperatureRange;
        this.highTemperatureRange = attributes.highTemperatureRange;
        this.lowSoilTemperatureRange = attributes.lowSoilTemperatureRange;
        this.highSoilTemperatureRange = attributes.highSoilTemperatureRange;
        this.avgPrecipitation = attributes.avgPrecipitation;
    }
}

class EnvironmentModel {
    name = "New Model";
    location = "Unknown Location";

    constructor (name, location, attributes) {
        this.name = name;
        this.location = location;
        this.attributes = new Environment(attributes);
    }
}

export {EnvironmentModel, Environment};