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

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-collector.git
Navigate to the project directory:
bash
Copy code
cd task-collector
Install dependencies:
bash
Copy code
npm install
Run the app:
bash
Copy code
npm start
This will start the Expo development server and open the app in Expo Go on your device or simulator.

License
This project is licensed under the MIT License - see the LICENSE file for details.

vbnet
Copy code

This README.md provides a comprehensive overview of the Task Collector app, including its structure, custom hooks, dependencies, scripts, and instructions for getting started. Feel free to customize it further based on your specific needs and preferences.