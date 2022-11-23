import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import CropModelBoard from '../pages/cropModelBoard';
import Dashboard from '../pages/dashboard/Dashboard';
import Dropdown from '../pages/dropdown';
import Form from '../pages/form';
import Grid from '../pages/grid';

import { useAuthState } from "../__mocks__/auth"



// test('renders header', () => {
//   render(<App/>);

//   // await userEvent.click(screen.getByText('Load Greeting'))

//   const headerElement = screen.getByText('Crop Planner');
//   expect(headerElement).toBeInTheDocument();
// });

test('renders cropModelBoard components', async () => {
  render(<CropModelBoard/>);
  expect(screen.getByText('Carrot')).toBeInTheDocument();
  expect(screen.getByText('Corn')).toBeInTheDocument();
  expect(screen.getByText('Soybean')).toBeInTheDocument();
  expect(screen.getByText('Cabbage')).toBeInTheDocument();
  expect(screen.getByText('Rice')).toBeInTheDocument();
});

test('Renders entire responsive, draggable grid', async() => {
  await act( async () => render(<CropModelBoard/>));

  expect(screen.getByText('Carrot')).toBeInTheDocument();
  expect(screen.getByText('Corn')).toBeInTheDocument();
  expect(screen.getByText('Soybean')).toBeInTheDocument();
  expect(screen.getByText('Cabbage')).toBeInTheDocument();
  expect(screen.getByText('Rice')).toBeInTheDocument();
});

test('Check that hoverable information for each icon is not displayed until hover, and then displayed when hovered', async() => {
  await act( async () => render(<Grid/>));
  //await fireEvent.click(screen.getByText('Grid'));
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
  await act( async () => render(<Grid/>));

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


test('Renders entire form (all fields + submit button)', async() => {
  render(<Dropdown/>);
  //await fireEvent.click(screen.getByText('Dropdown'));
  expect(screen.getByText('Before you start planning...')).toBeInTheDocument();
  expect(screen.getByText('Location')).toBeInTheDocument();
  expect(screen.getByText('Temperature Range')).toBeInTheDocument();
  expect(screen.getByText('Submit')).toBeInTheDocument();
});

test('Renders geolocation button and gets user location', async() => {
  await act( async () => render(<Dropdown/>));
  //await fireEvent.click(screen.getByText('Dropdown'));
  expect(screen.getByText("Get Location")).toBeInTheDocument();

  const button = screen.getByRole('button', {name: 'Get Location'});
  fireEvent.click(button);

  expect(screen.getByText('Geolocation is not supported by your browser')).toBeInTheDocument();
});

test('Page loads properly & shows correct landing screen', async() => {
  useAuthState.mockReturnValue([true, false]);
  await act( async () => {
    await render(<BrowserRouter><Dashboard/></BrowserRouter>)
  });
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today_str = new Date().toLocaleDateString("en-US", options);
  const headerElement = screen.getByText('Today is ' + today_str + '.');
  expect(headerElement).toBeInTheDocument();
});

// Not valid after merge
test.skip('Page shows app description', async () => {
  await act( async () => render(<App/>));
  const pageDescript = screen.getByText('Get help with your crop planning!');
  expect(pageDescript).toBeInTheDocument();
});


test.skip('Page shows nav bar', async () => {
  render(<App/>);
  const nav_one = screen.getByText('About us');
  const nav_two = screen.getByText('Contact us');
  const nav_three = screen.getByText('Sign in');
  const nav_four = screen.getByText('Sign up');

  expect(nav_one).toBeInTheDocument();
  expect(nav_two).toBeInTheDocument();
  expect(nav_three).toBeInTheDocument();
  expect(nav_four).toBeInTheDocument();
});

test('Test change URL', async () => {
  global.window = { location: { pathname: null } };
  expect(global.window.location.pathname).toEqual('/');
});

test.skip('Shows bar with about link', async () => {
  render(<App/>);
  const headerElement = screen.getByText('About');
  expect(headerElement).toBeInTheDocument();
});