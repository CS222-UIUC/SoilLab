import {Environment, EnvironmentModel} from './cropEnvironment';

/* Numerical data collected / estimated from https://www.isws.illinois.edu/warm/weather/ */
/* Growing recommendations from https://www.almanac.com/gardening/planting-calendar/IL/Champaign */

let CUAutumnAttributes = {
    lowTemperatureRange: 43,
    highTemperatureRange: 67,
    lowSoilTemperatureRange: 58,
    highSoilTemperatureRange: 62,
    avgPrecipitation: 3.0,
    dewPoint: 56.8,
    recommendedCrops: ['arugula','beet','bellpepper','broccoli', 'cabbage', 'cantaloupe', 
                        'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant',
                        'greenbeans', 'kale', 'lettuce', 'okra', 'parsnip', 'pea', 'potato',
                        'pumpkin', 'radish', 'spinach', 'tomato', 'turnip', 'watermelon', 'zucchini']
}

let CUWinterAttributes = {
    lowTemperatureRange: 21,
    highTemperatureRange: 39,
    lowSoilTemperatureRange: 34,
    highSoilTemperatureRange: 40,
    avgPrecipitation: 1.7,
    dewPoint: 15.0,
    recommendedCrops: []
}

let CUSpringAttributes = {
    lowTemperatureRange: 31,
    highTemperatureRange: 72,
    lowSoilTemperatureRange: 40,
    highSoilTemperatureRange: 69,
    avgPrecipitation: 3.5,
    dewPoint: 40.8,
    recommendedCrops: ['arugula','basil', 'beet', 'bellpepper', 'broccoli', 'cabbage', 'cantaloupe', 
                        'carrot', 'cauliflower', 'celery', 'chive', 'cilantro', 'corn', 'cucumber', 'dill', 'eggplant',
                        'greenbeans', 'kale', 'lettuce', 'okra', 'onion', 'parsley', 'parsnip', 'pea', 'potato',
                        'pumpkin', 'radish', 'spinach', 'tomato', 'turnip', 'watermelon', 'zucchini']
}

let CUSummerAttributes = {
    lowTemperatureRange: 62,
    highTemperatureRange: 87,
    lowSoilTemperatureRange: 65,
    highSoilTemperatureRange: 83,
    avgPrecipitation: 3.5,
    dewPoint: 68.9,
    recommendedCrops: []
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