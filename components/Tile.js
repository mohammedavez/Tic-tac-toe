import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class Tile extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          underlayColor="red"
          onPress={this.props.fun.bind(this, this.props.id)}
        >
          <View style={styles.button}>
            <Image source={require("../assets/x.png")} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tile: {
    width: 100,
    height: 100
  },
  button: {
    marginBottom: 30,
    width: 100,
    height: 100,
    alignItems: "center"
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
