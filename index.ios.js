import React, { Component } from 'react';
//import AppContainer from './app/containers/index';
import Application from './app/containers/app';
import { AppRegistry, Platform, StatusBar } from 'react-native';
//noinspection JSCheckFunctionSignatures
if (Platform.OS === 'ios') {
  StatusBar.setBarStyle('light-content', true);
}
AppRegistry.registerComponent('startone', () => Application);
