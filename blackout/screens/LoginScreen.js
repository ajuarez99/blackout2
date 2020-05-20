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

class LoginScreen extends Component {
  state = { email: "", password: "" };

  alert() {
    Alert.alert(this.state.email + " " + this.state.password);
  }
  render() {
    const{navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Blackout</Text>
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
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={() => Alert.alert(this.state.email)}
       >
         <Text style={styles.bold}>Login </Text>
 </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText} onPress={() => navigate('Registration')}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveUserData: (data) => {
      dispatch({
        type: "REGISTER_USER",
        payload: { data },
      });
    },
  };
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  bold:{
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
