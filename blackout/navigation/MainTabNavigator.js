import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../screens/LoginScreen";

const config = Platform.select({
    web: { headerMode: "screen" },
    default: {}
  });

const LoginStack = createStackNavigator(
      {
          Login: LoginScreen,
      },
      config
  );
LoginStack.path = "";