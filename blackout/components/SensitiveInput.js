import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { TextInput as Text} from "react-native-paper";

class SensitiveInput extends Component {
  state = { text: "" };

  render(){
      return (
          <Text style={styles.headerWrapper}
            label={this.props.name}
            value={this.state.text}
            onChangeText={text =>this.setState({text})}
          />
      )
  }
}

export default SensitiveInput;

const styles = StyleSheet.create({
    headerWrapper: {
        width: '100%',
        marginVertical: 12,
    }
});