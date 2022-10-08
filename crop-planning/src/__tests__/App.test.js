import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import {Crop} from '../../backend/crop';
import {CropModel, CropAttrs} from '../../backend/cropModel';

test('renders header', () => {
  render(<App/>);

  // await userEvent.click(screen.getByText('Load Greeting'))

  const headerElement = screen.getByText('Crop Planner');
  expect(headerElement).toBeInTheDocument();
});

test('renders cropModelBoard components', async () => {
  render(<App url="/cropModelBoard" />)

  fireEvent.click(screen.getByText('Crops'));
  // await userEvent.click(screen.getByText('Load Greeting'))

  expect(screen.getByText('Carrot')).toBeInTheDocument();
  expect(screen.getByText('Corn')).toBeInTheDocument();
  expect(screen.getByText('Soybean')).toBeInTheDocument();
  expect(screen.getByText('Cabbage')).toBeInTheDocument();
  expect(screen.getByText('Rice')).toBeInTheDocument();
});

test('test Crop & CropModel Classes', () => {
  let attributes = {
    LowerTemperatureLimit: 59.0, higherTemperatureLimit: 77.0,
    LowerIrrigationLimit: 20.0, HigherIrrigationLimit: 100.0,
    LowerLightLimit: 1500.0, HigherLightLimit: 1800.0,
    Radius: 20.0
}
  var myCropAttrs = new CropAttrs(attributes);
  var myCropModel = new CropModel("My Plant", "Wow", myCropAttrs);
  var myCrop = new Crop("Crop1", "This is a crop", myCropAttrs, 2, 2);

  expect(myCropModel.name == "My Plant");
  expect(myCropModel.description == "Wow");
  expect(myCrop.name == "Crop1");
  expect(myCrop.description == "This is a crop");
  expect(myCrop.xcoord == 2 && myCrop.ycoord == 2);
});