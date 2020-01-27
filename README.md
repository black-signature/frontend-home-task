This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Libraries used
React, Redux, SASS 
Have used container / component pattern with react hooks.

## Folder Structure
* `actions/` - All the action creators and action types
* `containers/` - All containers for the project
* `components/` - All components
* `reducers/` - All reducers
* `pages/` - Main page of the app (Can be scaled to have multiple pages too)
* `lib/` - All 3rd party libraries can go here. (Library for fetching currency exchange rates (FX Rates))

## Scope of Improvement
* More error handling can be added when there is no data provided by the FX API
* Have used https://exchangeratesapi.io/ for fetching FX rates, not sure about the reliability. Its free and no registration needed. Seems alright.
* Better ways to show errors or messages. Currently I have added the errors and messages as console.logs() for the sake of this demo. Kindly bear with me.