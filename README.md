# :seedling: [SoilLab](https://docs.google.com/presentation/d/1yV6RGyYFzDldGatFKGZM_0RRbOfMpfLaAFe7VQAqMqE/edit?usp=sharing)
###### [bit.ly/team-atla-cs222](https://bit.ly/team-atla-cs222) · developed by Team Atla, CS222 Fall 2022 Group 77
- - - 
## Goal
Simplify the seeding process for large-scale farming. 
## Motivation
Help farmers who may not have access to many resources improve their crop yields
## Functionality
- Input planned crop distribution using a standard grid & pre-populated crop model presets
- Generate crop model analysis based on size of space for ideal growth and ideal growth season according to temperature, precipitation, and available light
- Receive suggestions for seeding based on data about desired crops, planting environment, & season, as well as models present in the grid
- Save progress via account registration
## Technical Architecture 
Frontend: 

Backend:


###### Refer to the presentation for more in-depth information.
## Installation
1. Execute `cd crop-planning` to change directory to the crop planning folder.
2. Run `npm install` to install Node.js.
3. Run `npm install --save react @trendmicro/react-sidenav` to install dependencies to load the sidebar.
4. To run the app, execute `npm start`. ​​This will run the app in development mode and the app can be viewed on http://localhost:3000 in any browser.
5. To execute tests within the app, run `npm test`.
## Development Team
Anagha S. - Firebase data storage & app integration, user authentication, dashboard, EnvironmentModel library & implementation, UI styling
Lily Z. - Suggestion functions, farm grid, Crop class, CropModel library & implementation, backend maintenance
Trisha C. - Drag-and-drop icons, farm grid, feedback form, location/temperature dropdown form, form UI
Anjana G. - Web app UI: Navigation bar, sidebar, footer, page layouts, styling. CropModel library population & implementation
