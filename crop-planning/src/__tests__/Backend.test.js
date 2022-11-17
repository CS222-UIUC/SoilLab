import {Crop} from '../../backend/crop';
import {CropModel, CropAttrs} from '../../backend/cropModel';
import {CropModels} from '../../backend/cropModelLibrary';
import {CropBoard} from '../../backend/cropBoard';

test('test Crop & CropModel Classes', () => {
    let attributes = {
      LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
      LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
      LowerSunlightHour: 1500.0, 
      Radius: 20.0
    }
    var myCropAttrs = new CropAttrs(attributes);
    var myCropModel = new CropModel("My Plant", "Wow", attributes);
    var myCrop = new Crop("Crop1", "This is a crop", attributes, 2, 2);
  
    expect(myCropModel.name == "My Plant");
    expect(myCropModel.description == "Wow");
    expect(myCropModel.attributes.higherIrrigationLimit === 100.0);
    expect(myCropModel.attributes.LowerSunlightHour === 1500.0);
    expect(myCrop.name == "Crop1");
    expect(myCrop.description == "This is a crop");
    expect(myCrop.xcoord == 2 && myCrop.ycoord == 2);
    let test = myCropModel.attributes.lowerIrrigationLimit;
    // console.log(myCropModel);
});

test('test Crop Model Library', () => {

  expect(CropModels.Corn.name == "Corn");
  expect(CropModels.Tomato.name == "Tomato");
  expect(CropModels.Carrot.name == "Carrot");
  expect(CropModels.Lettuce.name == "Lettuce");

});

test('test CropBoard check_adjacent', () => {

  let board = new CropBoard(30,30);
  //let s = board.semicircle_width(10);
  board.add_crop(CropModels.Carrot, 10, 10);
  board.add_crop(CropModels.Carrot, 10, 20);
  board.add_crop(CropModels.Corn, 20, 20);
  board.visualization();
  let r = board.check_adjacent();
  console.log(r);

  expect(r.length == 1);
  expect(r[0][0].name == "Carrot");
  expect(r[0][1].name == "Corn");

});

test('test CropBoard check_temperature', () => {

  let board = new CropBoard(30,30);
  board.visualization();
  //let s = board.semicircle_width(10);
  board.add_crop(CropModels.Carrot, 10, 10);
  board.add_crop(CropModels.Carrot, 10, 20);
  board.add_crop(CropModels.Corn, 20, 20);

  let r = board.check_temperature(90);
  console.log(r);

  expect(r.length == 2);
  // expect(r[0][0].name == "Carrot");
  // expect(r[0][1].name == "Corn");

});

test('test CropBoard clear', () => {

  let board = new CropBoard(30,30);
  board.visualization();
  //let s = board.semicircle_width(10);
  board.add_crop(CropModels.Carrot, 10, 10);
  board.add_crop(CropModels.Carrot, 10, 20);
  board.add_crop(CropModels.Corn, 20, 20);
  board.visualization();
  let r = board.check_adjacent();
  console.log(r);

  board.clear();

  let is_empty = true;

  for (var i = 0; i < board.height; i++) {
    for (var j = 1; j < board.width; j++) {
        if (! (board.board[i][j] == 0)) {
          is_empty = false;
          break;
        }
    }
    if (!is_empty) {
      break;
    }
  }
  expect(is_empty);

});