import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { AppLoading, SplashScreen } from "expo";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
          <SafeAreaView
      
    >
            <View>
                <Text>Login Screen </Text>
            </View>
            </SafeAreaView>
        );
    }

}
export default LoginScreen;