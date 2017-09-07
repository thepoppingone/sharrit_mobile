# Sharrit Installation Guide

## Environment Installation

*Make sure Node.js is already installed for npm installs*

### Steps:
1. Run `npm i` to install the necessary libraries
2. Run `react-native run-ios` for iOS (Mac only), `react-native run-android` for Windows/Mac (Android emulator must be already open) - with ADB server running

### Android
1. Make sure the android sdk tools are already installed - Check react native website for setup for Android
2. Set the `$ANDROID_HOME` variable in the `~/.bash_profile`, `export ANDROID_SDK_ROOT='/Users/username/Library/Android/sdk'` `echo` the variable to make sure it is loaded (reload by `source ~/.bash_profile`) 
3. For launching the AVD in command line, make sure the ANDROID_SDK_ROOT is set, by `export ANDROID_SDK_ROOT='/Users/username/Library/Android/sdk'`
3. Follow the instructions on https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html to setup quick deploy of Android apps.
4. https://stackoverflow.com/questions/44446523/unable-to-load-script-from-assets-index-android-bundle-on-windows if faced with error

### iOS
1. Just install Xcode. (More instructions will be released soon for deployment to devices.)

## Optional
Install eslint linter on the editor(Atom/Sublime/etc) to allow better coding practices

### ESLint Settings
For our project we will be following Airbnb's ES6 JS styles and guidelines
1. Install the linter config here https://www.npmjs.com/package/eslint-config-airbnb
2. Create a .eslintrc file and add the configuration here (should be already in the project)
3. Install a linter on the editor if needed
