# Expo Persona Plugin

**Expo Persona Plugin** is an **unofficial** plugin for Expo projects, designed to seamlessly add the Persona Maven repository to the Android build.gradle file. This makes integrating [Persona's SDK](https://docs.withpersona.com/docs/react-native-sdk-integration) with React Native a straightforward process.

## Installation

To add the plugin to your project, run:

```bash
npm install expo-persona-plugin
```

## Usage

To use the plugin, include `expo-persona-plugin` in the `plugins` array in your `app.config.js` or `app.json` file:

```ts
// app.config.js
export default {
  plugins: ["expo-persona-plugin"],
};
```

Run `expo prebuild --platform android` to see the changes in your `android/build.gradle` file.

## How it works

The plugin modifies your `android/build.gradle` file by appending the following block which is needed to resolve dependencies from Persona’s Maven repository:

```gradle
// @generated by Expo plugin - with-persona
allprojects {
    repositories {
        maven {
            url 'https://sdk.withpersona.com/android/releases'
        }
    }
}
```

This configuration allows your project to resolve dependencies from Persona’s Maven repository, which is required for using the Persona SDK with React Native.

## Prerequisites

Ensure that you’ve already set up the Persona SDK for React Native in your project. This plugin is simply a helper for adding the Maven repository; additional setup for the Persona SDK may still be required.

## Disclaimer

This project is **not affiliated, associated, authorized, endorsed by, or in any way officially connected** with Persona or any of its subsidiaries or affiliates. This is an unofficial plugin created independently to help developers integrate the Persona Maven repository in Expo projects. For official resources and support, please refer to the [Persona SDK documentation](https://docs.withpersona.com/docs/react-native-sdk-integration).

For more information on how to use the Persona SDK with React Native, see the [Persona SDK documentation](https://docs.withpersona.com/docs/react-native-sdk-integration).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
