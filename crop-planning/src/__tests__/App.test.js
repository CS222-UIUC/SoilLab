import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

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

import { render, renderHook, screen, fireEvent, waitFor} from '@testing-library/react';
import App, { Grid } from './App';
import React from 'react';


test('Renders entire responsive, draggable grid', async() => {
  render(<App />);

  expect(screen.getByText('Carrot')).toBeInTheDocument();
  expect(screen.getByText('Corn')).toBeInTheDocument();
  expect(screen.getByText('Soybean')).toBeInTheDocument();
  expect(screen.getByText('Cabbage')).toBeInTheDocument();
  expect(screen.getByText('Rice')).toBeInTheDocument();
});

test('Check that hoverable information for each icon is not displayed until hover, and then displayed when hovered', async() => {
  render(<App />);
  
  const carrot = screen.queryByText('This vegetable is orange.');
  expect(carrot).not.toBeInTheDocument();

  const corn = screen.queryByText('This vegetable is yellow (usually).');
  expect(corn).not.toBeInTheDocument();

  const soybean = screen.queryByText('I have no clue what color this legume is. Tan?');
  expect(soybean).not.toBeInTheDocument();

  const cabbage = screen.queryByText('This vegetable is green.');
  expect(cabbage).not.toBeInTheDocument();

  const rice = screen.queryByText('This grain is brown.');
  expect(rice).not.toBeInTheDocument();


  fireEvent.mouseOver(screen.getByText('Carrot'));
  await waitFor(() => screen.getByTestId('Carrot'))
  expect(screen.getByText('This vegetable is orange.')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Corn'));
  await waitFor(() => screen.getByTestId('Corn'))
  expect(screen.getByText('This vegetable is yellow (usually).')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Soybean'));
  await waitFor(() => screen.getByTestId('Soybean'))
  expect(screen.getByText('I have no clue what color this legume is. Tan?')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Cabbage'));
  await waitFor(() => screen.getByTestId('Cabbage'))
  expect(screen.getByText('This vegetable is green.')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Rice'));
  await waitFor(() => screen.getByTestId('Rice'))
  expect(screen.getByText('This grain is brown.')).toBeInTheDocument()
});

test('Check that image is displayed for each icon before hovered over.', async() => {
  render(<App />);

  const carrot = screen.getByAltText('carrot');
  expect(carrot).toHaveAttribute('src', 'https://static.thenounproject.com/attribution/1211981-600.png');

  const corn = screen.getByAltText('corn');
  expect(corn).toHaveAttribute('src', 'https://static.thenounproject.com/attribution/1197411-600.png');

  const soybean = screen.getByAltText('soybean');
  expect(soybean).toHaveAttribute('src', 'https://static.thenounproject.com/attribution/5164867-600.png');

  const cabbage = screen.getByAltText('cabbage');
  expect(cabbage).toHaveAttribute('src', 'https://static.thenounproject.com/attribution/1482111-600.png');

  const rice = screen.getByAltText('rice');
  expect(rice).toHaveAttribute('src', 'https://static.thenounproject.com/attribution/56585-600.png');

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