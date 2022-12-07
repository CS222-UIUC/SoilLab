# :seedling: SoilLab
###### developed by Team Atla, CS222 Fall 2022 Group 77
###### [Presentation Slides](https://bit.ly/team-atla-cs222) · [App Demo (YouTube)](https://www.youtube.com/watch?v=cA-NzZy-1nY) · [Presentation Video (YouTube)](https://youtu.be/CCxbg2uZWBI)
- - - 
## Goal
Simplify the seeding process for large-scale farming. 

## Motivation
Help farmers who may not have access to many resources improve their crop yields.

## Functionality
- Input planned crop distribution using a standard grid & pre-populated crop model presets
- Generate crop model analysis based on size of space for ideal growth and ideal growth season according to temperature, precipitation, and available light
- Receive suggestions for seeding based on data about desired crops, planting environment, & season, as well as models present in the grid
- Save progress via account registration

## Technical Architecture 
<img width="550" alt="navbar" src="https://user-images.githubusercontent.com/90294056/206100461-9d295925-8848-427a-84d1-37cbf4bce68c.png">
<img width="400" alt="sidebar" src="https://user-images.githubusercontent.com/90294056/206100478-29644cca-8013-4f8c-a0ff-595a96c0ba82.png">
<img width="300" alt="firebase" src="https://user-images.githubusercontent.com/90294056/206100499-235e4ded-6d04-48b3-878f-457956d295d7.png">
<img width="400" alt="backend" src="https://user-images.githubusercontent.com/90294056/206100714-79a3bb58-87e7-49a2-88dd-5f443b1b767d.png">
<img width="400" alt="cropboard" src="https://user-images.githubusercontent.com/90294056/206100832-b1e70a6f-b02c-42a4-953b-4a1caafee381.png">

###### Refer to the presentation for more in-depth information.
## Installation
1. Clone this repository.
2. Execute `cd crop-planning` to change directory to the crop planning folder.
3. Run `npm install` to install Node.js.
4. Run `npm install --save react @trendmicro/react-sidenav` to install dependencies to load the sidebar.
5. To run the app, execute `npm start`. This will run the app in development mode and the app can be viewed on http://localhost:3000 in any browser.
6. To execute tests within the app, run `npm test`.

## Development Team
Anagha S. - Firebase data storage & app integration, user authentication, dashboard, EnvironmentModel library & implementation, UI styling

Lily Z. - Suggestion functionalities, farm grid, Crop class, CropBoard class, CropModel library & implementation, backend maintenance

Trisha C. - Drag-and-drop icons, farm grid, feedback form, location/temperature dropdown form, form UI

Anjana G. - Web app UI: Navigation bar, sidebar, footer, page layouts, styling. CropModel library population & implementation
