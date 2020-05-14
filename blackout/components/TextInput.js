import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { TextInput as Text} from "react-native-paper";

class TextInput extends Component {
  

  render(){
      return (
          <Text style={styles.headerWrapper}
            label={this.props.name}
            
            returnKeyType = {this.props.return}
            secureTextEntry = {this.props.input}
            
          />
      )
  }
}

export default TextInput;

const styles = StyleSheet.create({
    headerWrapper: {
        width: '100%',
        marginVertical: 12,
    }
});