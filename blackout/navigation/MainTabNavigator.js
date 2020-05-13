import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../screens/LoginScreen";

const config = Platform.select({
    web: { headerMode: "screen" },
    default: {}
  });

const LoginStack = createStackNavigator();

function RootStack(){
  return(
    <LoginStack.Navigator
      intialRouteName="Login"
      screenOptions={{ gestureEnabled: false }}
      >
        <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title:'Login'}}
        />
      </LoginStack.Navigator>
  );

}