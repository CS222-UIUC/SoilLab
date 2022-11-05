import {Crop} from '../../backend/crop';
import {CropModel, CropAttrs} from '../../backend/cropModel';
import {CropModels} from '../../backend/cropModelLibrary';
import {CropBoard} from '../../backend/cropBoard';
import { Environment, EnvironmentModel } from '../../backend/cropEnvironment';
import { ChampaignModel } from '../../backend/cropEnvironmentLibrary';

test('test Crop & CropModel Classes', () => {
    let attributes = {
      LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
      LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
      LowerLightLimit: 1500.0, HigherLightLimit: 1800.0,
      Radius: 20.0
    }
    var myCropAttrs = new CropAttrs(attributes);
    var myCropModel = new CropModel("My Plant", "Wow", attributes);
    var myCrop = new Crop("Crop1", "This is a crop", attributes, 2, 2);
  
    expect(myCropModel.name == "My Plant");
    expect(myCropModel.description == "Wow");
    expect(myCropModel.attributes.higherIrrigationLimit === 100.0);
    expect(myCropModel.attributes.LowerLightLimit === 1500.0);
    expect(myCrop.name == "Crop1");
    expect(myCrop.description == "This is a crop");
    expect(myCrop.xcoord == 2 && myCrop.ycoord == 2);
    let test = myCropModel.attributes.lowerIrrigationLimit;
    console.log(myCropModel);
});

test('test Crop Model Library', () => {

  expect(CropModels.Corn.name == "Corn");
  console.log(CropModels.Corn.attributes.lowerIrrigationLimit);
  expect(CropModels.Broccoli.name == "Broccoli");
  expect(CropModels.Carrot.name == "Carrot");
  expect(CropModels.Lettuce.name == "Lettuce");

});


test('Test Environment & EnvironmentModel', () => {
  let attributes = {
    lowTemperatureRange: 30, highTemperatureRange: 50,
    lowSoilTemperatureRange: 20, highSoilTemperatureRange: 40,
    avgPrecipitation: 3.9
  }

  var champaign = new EnvironmentModel("UIUC", "Champaign, IL", attributes, 40.116421, -88.243385);

  expect(champaign.name == "UIUC");
  expect(champaign.location == "Champaign, IL");
  expect(champaign.attributes.lowTemperatureRange === 30);
  expect(champaign.latitude == 40.116421)
  console.log(champaign);
});

test('Test Environment Model Library', () => {

expect(ChampaignModel.Autumn.name == "Autumn");
expect(ChampaignModel.Autumn.lowSoilTemperatureRange == 58);
expect(ChampaignModel.Autumn.recommendedCrops == ['arugula','beet','bellpepper','broccoli', 'cabbage', 'cantaloupe', 
'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant',
'greenbeans', 'kale', 'lettuce', 'okra', 'parsnip', 'pea', 'potato',
'pumpkin', 'radish', 'spinach', 'tomato', 'turnip', 'watermelon', 'zucchini'])

});

test('test CropBoard', () => {

  let board = new CropBoard(30,30);
  board.visualization();
  //let s = board.semicircle_width(10);
  board.add_crop(CropModels.Carrot, 10, 10);
  board.visualization();
  expect(true);

});