# Sharrit Installation Guide

## Environment Installation

*Make sure Node.js is already installed for npm installs*

### Steps:
1. Run `npm i` to install the necessary libraries
2. Run `react-native run-ios` for iOS (Mac only), `react-native run-android` for Windows/Mac (Android emulator must be already open) - with ADB server running

### Android
1. Make sure the android sdk tools are already installed - Check react native website for setup for Android
2. Set the `$ANDROID_HOME` variable in the `~/.bash_profile` and `echo` the variable to make sure it is loaded (reload by `source ~/.bash_profile`)

### Optional
Install eslint linter on the editor(Atom/Sublime/etc) to allow better coding practices
