import React, { Component } from "react";
import { ScrollView, Button, View, Alert  } from "react-native";
import { connect } from "react-redux";
import { AppLoading, SplashScreen } from "expo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../components/HeaderTitle";
import TextInput from "../components/TextInput";
class LoginScreen extends Component {
  state = { email: "", password: "" };
  handleEmailChange(value){
    this.setState({email:value});
  }
  handlePasswordChange(value){
    this.setState({password:value});
  }
  alert(){
    Alert.alert(this.state.email +" " +this.state.password)
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <HeaderTitle text="Login" />

          <TextInput
            textContentType="emailAddress"
            keyboardType="email-address"
            input={false}
            autoCapitalize="none"
            autoCompleteType="email"
            name="Email"
            return="next"
            value={this.state.email.value}
            onChangeText={(text) => this.handleEmailChange(text)}
          />
          <TextInput
            name="Password"
            return="done"
            input={true}
            value={this.state.password.value}
            onChangeText={(text) => this.handlePasswordChange(text)}
          />
          <Button title="Login"
          onPress={() =>  this.alert()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;
