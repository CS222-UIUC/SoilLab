import {Environment, EnvironmentModel} from './cropEnvironment';

/* Data estimated from https://www.isws.illinois.edu/warm/weather/ */

let CUAutumnAttributes = {
    lowTemperatureRange: 43,
    highTemperatureRange: 67,
    lowSoilTemperatureRange: 58,
    highSoilTemperatureRange: 62,
    avgPrecipitation: 3.0
}

let CUWinterAttributes = {
    lowTemperatureRange: 21,
    highTemperatureRange: 39,
    lowSoilTemperatureRange: 34,
    highSoilTemperatureRange: 40,
    avgPrecipitation: 1.7
}

let CUSpringAttributes = {
    lowTemperatureRange: 31,
    highTemperatureRange: 72,
    lowSoilTemperatureRange: 40,
    highSoilTemperatureRange: 69,
    avgPrecipitation: 3.5
}

let CUSummerAttributes = {
    lowTemperatureRange: 62,
    highTemperatureRange: 87,
    lowSoilTemperatureRange: 65,
    highSoilTemperatureRange: 83,
    avgPrecipitation: 3.5
}

const CUAutumnModel = new EnvironmentModel("Autumn", "Champaign, IL", CUAutumnAttributes);
const CUWinterModel = new EnvironmentModel("Winter", "Champaign, IL", CUWinterAttributes);
const CUSpringModel = new EnvironmentModel("Spring", "Champaign, IL", CUSpringAttributes);
const CUSummerModel = new EnvironmentModel("Summer", "Champaign, IL", CUSummerAttributes);

const ChampaignModel = {
    Autumn: CUAutumnModel,
    Winter: CUWinterModel,
    Spring: CUSpringModel,
    Summer: CUSummerModel
}

export {ChampaignModel};