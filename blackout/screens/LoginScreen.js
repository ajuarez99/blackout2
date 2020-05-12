import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { AppLoading, SplashScreen } from "expo";

class LoginScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: <Text>Header</Text>,
          headerRight: <Text>Right</Text>,
          headerStyle: {
            style: { shadowColor: "transparent", fontFamily: "monospace" }
          }
        };
      };
    render(){

        return(
            <View>
                <Text>Login Screen </Text>
            </View>
        );
    }

}
export default LoginScreen;