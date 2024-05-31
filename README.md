# Task Collector - React Native Expo Go App

Task Collector is a mobile application built with React Native and Expo Go that allows users to manage their tasks efficiently. This documentation provides an overview of the project structure, custom hooks, and dependencies required to run the app.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Custom Hooks](#custom-hooks)
- [Dependencies](#dependencies)
- [Scripts](#scripts)

## Overview

Task Collector is a task management app designed to help users organize and prioritize their tasks. It offers features such as adding, editing, and deleting tasks, as well as fetching tasks from a backend API. The app is built using React Native and Expo Go, making it easy to develop and test on both iOS and Android devices.

## Project Structure

The project structure follows common conventions for React Native projects:

- **src/**: Contains the source code of the application.
  - **hooks/**: Custom hooks used throughout the application.
    - **useFetch.ts**: Custom hook for making HTTP requests to the backend API.
    - **useQueryTasks.ts**: Custom hook for fetching tasks from the backend API using React Query.
  - **screens/**: React components representing different screens of the application.
    - **HomeScreen.tsx**: The main screen of the app, displaying the list of tasks and providing options for adding, editing, and deleting tasks.
  - **utils/**: Utility functions and constants used across the application.
- **package.json**: Configuration file specifying dependencies, scripts, and other project metadata.
- **App.tsx**: Entry point of the application, rendering the main navigator component.
- **jest.config.js**: Configuration file for Jest, the testing framework used in the project.

## Custom Hooks

### `useFetch`

The `useFetch` hook is a custom hook for making HTTP requests to the backend API using Axios. It abstracts away the logic for handling requests, responses, and errors, making it easier to fetch data from the API. The hook accepts a function that generates the Axios request configuration and returns a function that can be called to execute the fetch operation.

### `useQueryTasks`

The `useQueryTasks` hook is responsible for fetching tasks from the backend API using the `useFetch` hook and managing the state of the fetched data using React Query. It provides options for handling successful fetches and errors, allowing for easy integration with other parts of the application.

## Dependencies

The project relies on the following dependencies:

- **@expo/vector-icons**: Provides a set of customizable icons for use in the application.
- **@react-navigation/native**: Handles navigation between different screens of the application.
- **@tanstack/react-query**: Library for managing data fetching and state using React Query.
- **axios**: HTTP client for making requests to the backend API.
- **expo**: Framework and platform for building universal React applications.
- **expo-constants**: Provides access to device information and system constants.
- **expo-font**: Allows loading custom fonts in the application.
- **expo-linking**: Handles deep linking and universal linking in the application.
- **expo-router**: Provides routing functionality for the application.
- **expo-splash-screen**: Manages the splash screen displayed when the app is launched.
- **expo-status-bar**: Component for managing the status bar appearance in the app.
- **expo-system-ui**: Provides system UI components for building interfaces.
- **expo-web-browser**: Allows opening web pages and handling redirects in the application.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods for React components.
- **react-native**: Framework for building native applications using React.
- **react-native-gesture-handler**: Library for gesture recognition in React Native.
- **react-native-reanimated**: Library for creating fluid animations in React Native.
- **react-native-safe-area-context**: Provides safe area insets for React Native applications.
- **react-native-screens**: Library for managing native screens in React Native.
- **react-native-web**: Library for running React Native components and APIs on the web.

## Scripts

The following scripts are available for running various tasks:

- **start**: Starts the Expo development server.
- **reset-project**: Resets the project to its initial state.
- **android**: Starts the Expo development server and opens the app on an Android device or emulator.
- **ios**: Starts the Expo development server and opens the app on an iOS device or simulator.
- **web**: Starts the Expo development server and opens the app in a web browser.
- **test**: Runs tests using Jest.
- **lint**: Lints the project files using Expo's linting tool.

## Getting Started

To get started with Task Collector, follow these steps:
# Clone the repository:
git clone https://github.com/your-username/task-collector.git

# Navigate to the project directory:
cd task-collector

# Install dependencies:
npm install

# Run the app:
npm start

This will start the Expo development server and open the app in Expo Go on your device or simulator.

### Integration Issue with React Native and .NET Core API Backend

#### Problem Description:
Encountering difficulties during the integration process between a React Native front end and a .NET Core API backend. Despite attempts to establish connection by adjusting HTTP ports, modifying CORS policies, and even switching emulators, the React Native application running on the emulator fails to connect to the server.

#### Attempted Solutions:
1. **Port Adjustment**: Experimented with switching to different HTTP ports to facilitate connection between the React Native application and the backend API.
2. **CORS Policy Modification**: Edited the CORS (Cross-Origin Resource Sharing) policy to potentially allow the React Native front end to communicate with the .NET Core backend.
3. **Emulator Switching**: Tried utilizing different emulators in the hope of resolving the connectivity issue.

#### Current Approach:
In response to the persistent integration problem, a temporary workaround has been implemented by creating a `server.js` file to manage the backend operations. This interim solution aims to establish a functional backend system independently from the React Native frontend, thereby allowing for continued development and troubleshooting without hindrance.

#### Next Steps:
- Continue investigating and debugging the integration issue between the React Native frontend and the .NET Core API backend.
- Explore alternative methods or configurations to enable successful communication between the frontend and backend components.
- Document any findings, solutions, or workarounds to aid in future development and troubleshooting efforts.


## License

This project is licensed under the MIT License - see the LICENSE file for details.


