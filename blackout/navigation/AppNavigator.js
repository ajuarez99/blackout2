import React from 'react';
import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';

import MainTabNavigator from './MainTabNavigator';

export default NavigationContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);