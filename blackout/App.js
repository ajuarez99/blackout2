import "react-native-gesture-handler";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Button,
  AsyncStorage,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";
import { getUser } from "./repositories/UserRepository";

const store = createStore(reducer);
store.subscribe(() => {});
const defaultUser = {
  user:{
  email: "",
  password: "",
  username: "",
  name: "",
  LoggedIn: false,
  }
};
const Stack = createStackNavigator();
console.ignoredYellowBox = ["Remote debugger"];

export default function App(props) {
  const [state, dispatch] = React.useReducer(reducer, defaultUser);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else if (!isLoadingComplete) {
    return <SplashScreen />;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Lo gin" headerMode="float">
              {state.user.LoggedIn == false ? (
                <>
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={LoginScreen}
                  />
                  <Stack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                    options={{
                      title: "",
                      headerStyle: {
                        backgroundColor: "#f5f5f5",
                        shadowColor: "transparent",
                      },
                    }}
                  />
                </>
              ) : (
                <Stack.Screen
                  options={{ headerShown: true }}
                  name="Home"
                  component={HomeScreen}
                />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png"),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
