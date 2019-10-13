import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default class Game extends Component {
  render() {
    return (
      <View style={styles.gameCon}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "00")}
            >
              <Image source={this.props.imgs[0]} />
            </TouchableOpacity>
          </View>
          <View style={[styles.tile, { borderTopWidth: 0 }]}>
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "01")}
            >
              <Image source={this.props.imgs[1]} />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}
          >
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "02")}
            >
              <Image source={this.props.imgs[2]} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.tile, { borderLeftWidth: 0 }]}>
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "10")}
            >
              <Image source={this.props.imgs[3]} />
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "11")}
            >
              <Image source={this.props.imgs[4]} />
            </TouchableOpacity>
          </View>
          <View style={[styles.tile, { borderRightWidth: 0 }]}>
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "12")}
            >
              <Image source={this.props.imgs[5]} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
          >
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "20")}
            >
              <Image source={this.props.imgs[6]} />
            </TouchableOpacity>
          </View>
          <View style={[styles.tile, { borderBottomWidth: 0 }]}>
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "21")}
            >
              <Image source={this.props.imgs[7]} />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}
          >
            <TouchableOpacity
              underlayColor="red"
              onPress={this.props.fun.bind(this, "22")}
            >
              <Image source={this.props.imgs[8]} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gameCon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
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
