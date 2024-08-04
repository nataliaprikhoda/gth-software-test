# GTH Software Test

This project is the test task for [GTH Software company](https://gthsoftware.com/)

<details>
    <summary>Task requirements</summary>

    1. Create a new Vue or React project, where you can start working on the task.
    2. Prepare a page that has 3 sections, as demonstrated in the above example. Design the UI as you wish. Make sure it’s also responsive.
    3. In the right section of the page, embed the provided webpage as an iframe in your web application and render it on the screen.
    4. Listen for the messages posted by the embedded page and store them, as you will need to use the data received in the next steps.
    5. Create a counter that starts with the number 0 and position it in the middle section of the page.
    6. Every time a new message is received from the embedded page, increment the counter by the random number received in the message.
    7. In the left section of the page, show a history of the last 5 numbers received.
    8. Add a README file to your project, with the following information:

    - Instructions on how to build and run the project locally.
    - A brief description of your solution, project structure and components.

    9. Pack your solution in a ZIP file and send it to us. Alternatively, you can upload it to a public Git repository (e.g. GitHub) and share the link with us.
</details>

## Tech Stack

![Static Badge](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Static Badge](https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white)
![Static Badge](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Static Badge](https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Static Badge](https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Static Badge](https://img.shields.io/badge/css_modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## Prerequisites

- [node](https://nodejs.org)

```bash
npm install yarn -g
```

- [yarn](https://yarnpkg.com)

```bash
npm install yarn -g
```

## Setup for development

1. Clone this repo
2. Install dependencies

```bash
yarn install
```

3. Run the app in the development mode

```bash
yarn start
```

4. Open http://localhost:3000 to view the app in the browser.

🚀 The app is ready for editing!

## Setup for production

1. Clone this repo
2. Install dependencies

```bash
yarn install
```

3. Build the app for production

```bash
yarn build
```

4. The build is minified, optimized, and saved into the `./build` folder

🚀 The app is ready to be deployed!

## About the project

### Folder structure

Initial folder structure is generated from `create-react-app`

```
.
├── public                  # Files which are not processed by webpack
│                           # and will be copied directly to the build
│
├── src                     # Source code of the app, which is processed
│   │                       # by webpack and transformed into a single
│   │                       # bundle file
│   │
│   ├── components          # Shared UI components used across the entire
│   │                       # application
│   │
│   ├── features            # Feature based modules that contain
│   │   │                   # feature-specific code for routes,
│   │   │                   # state, types, etc
│   │   │
│   │   ├── App             # Main feature that defines routes and
│   │   │                   # global store with feature-based slices
│   │   │
│   │   └── ...             # Other features
│   │
│   ├── index.css           # Main styling file which imports normalized
│   │                       # styles used across the entire application
│   │
│   └── index.tsx           # Entry point for the application that
│                           # initializes routing and state management
│                           # functionality, and renders App feature
│
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

### State management

State management is implemented with [@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit) package. Global store is initialized within `index.tsx`, and includes store slices from each of the rest features.

### Routing

Routing functionality is implemented with [react-router-dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom) package. BrowserRouter is initialized within `index.tsx`, and routes are defined within `App` feature.

### Implemented solution

Given task can be separated into 2 parts:

1. Listen to and store data provided by embedded webpage
2. Process stored data and display the result

Main logic for both of the parts can be found in `./src/feature/RandomNumbers/RandomNumbers.tsx`.

- Listening to the posted messages is implemented through `window.addEventListener()` function which is called on first render of the `RandomNumbers` screen
- Each posted number is stored within `randomNumbers` state slice in `allNumbers` array after dispatching `addNumber()` action
- Every time `randomNumbers` slice in global store is updated - `RandomNumbers` screen is re-rendered
- Values for last posted 5 numbers and counter are calculated using utils functions - `getLast5Numbers()`, `formatArrayToString()` and `getSumFromArray()`
- Each UI section has repetitive UI (title and some content) which is separated into reusable component - `Grid.Item` - which represents an atom of composite UI component - `Grid`
