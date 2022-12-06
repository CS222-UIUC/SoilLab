class Environment {
    constructor (attributes) {
        this.lowTemperatureRange = attributes.lowTemperatureRange;
        this.highTemperatureRange = attributes.highTemperatureRange;
        this.lowSoilTemperatureRange = attributes.lowSoilTemperatureRange;
        this.highSoilTemperatureRange = attributes.highSoilTemperatureRange;
        this.avgPrecipitation = attributes.avgPrecipitation;
        this.dewPoint = attributes.dewPoint;
        this.recommendedCrops = attributes.recommendedCrops;
    }
}

class EnvironmentModel {
    name = "New Model";
    location = "Unknown Location";
    latitude = 0.0
    longitude = 0.0

    constructor (name, location, attributes, latitude, longitude) {
        this.name = name;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.attributes = new Environment(attributes);
    }
}

export {EnvironmentModel, Environment};