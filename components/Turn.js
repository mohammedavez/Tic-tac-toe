import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Turn extends Component {
  render() {
    return (
      <View style={styles.turnCon}>
        <Text style={styles.turnText}>Turn:player-{this.props.turn}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  turnCon: {
    alignItems: "center",
    marginTop: 20
  },
  turnText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2
  }
});
