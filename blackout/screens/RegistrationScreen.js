import React, { Component } from "react";
import {
  ScrollView,
  Button,
  View,
  Alert,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { connect } from "react-redux";

class RegistrationScreen extends Component {
   
    state={email:"",password:"",confirmPassword:"",username:"",name:""}
    handleRegister = () =>{
      const data ={
        email:this.state.email,
        password:this.state.password,
        username: this.state.username,
        name:this.state.name
      }
      this.props.RegisterUserData(data);
    }
  render() {
 //   const{navigate}=this.props.navigation;
    return (
         
      <View style={styles.container}>
   
        <Text style={styles.logo}>Sign Up</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ username: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Full Name"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ confirmPassword: text })}
          />
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleRegister(this)}
        >
          <Text style={styles.bold}>Sign up! </Text>
        </TouchableOpacity>


      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return{
    RegisterUserData: user =>{
      dispatch({
        type:"REGISTER_USER",
        payload:{user}
      })
    }
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontSize: 20,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#171616",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ccbaba",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
  button: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
