import React, { Component } from "react";
import { StyleSheet, View, Alert, Button } from "react-native";
import Turn from "./components/Turn";
import Game from "./components/Game";
import x from "./assets/x2.png";
import o from "./assets/o2.png";
import transparent from "./assets/transparent.png";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      imgs: [
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent
      ],
      game: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      lastWin: 0,
      win: 0,
      pressedButton: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    this.setGame = this.setGame.bind(this);
    this.check = this.check.bind(this);
  }

  _onPressButton = id => {
    var counter = this.state.count;
    var turn = 0;
    var pressedButton = this.state.pressedButton;

    if (counter % 2 == 0) {
      if (this.state.lastWin == 0) {
        var img = o;
        turn = 1;
      } else if (this.state.lastWin == 1) {
        var img = o;
        turn = 1;
      } else if (this.state.lastWin == 2) {
        var img = x;
        turn = 2;
      }
    } else {
      if (this.state.lastWin == 0) {
        var img = x;
        turn = 2;
      } else if (this.state.lastWin == 1) {
        var img = x;
        turn = 2;
      } else if (this.state.lastWin == 2) {
        var img = o;
        turn = 1;
      }
    }
    if (id == "00") {
      if (this.state.pressedButton[0] == 0) {
        this.setGame(0, 0, turn);
        var images = this.state.imgs;
        images[0] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[0]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "01") {
      if (this.state.pressedButton[1] == 0) {
        this.setGame(0, 1, turn);
        var images = this.state.imgs;
        images[1] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[1]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "02") {
      if (this.state.pressedButton[2] == 0) {
        this.setGame(0, 2, turn);
        var images = this.state.imgs;
        images[2] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[2]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "10") {
      if (this.state.pressedButton[3] == 0) {
        this.setGame(1, 0, turn);
        var images = this.state.imgs;
        images[3] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[3]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "11") {
      if (this.state.pressedButton[4] == 0) {
        this.setGame(1, 1, turn);
        var images = this.state.imgs;
        images[4] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[4]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "12") {
      if (this.state.pressedButton[5] == 0) {
        this.setGame(1, 2, turn);
        var images = this.state.imgs;
        images[5] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[5]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "20") {
      if (this.state.pressedButton[6] == 0) {
        this.setGame(2, 0, turn);
        var images = this.state.imgs;
        images[6] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[6]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "21") {
      if (this.state.pressedButton[7] == 0) {
        this.setGame(2, 1, turn);
        var images = this.state.imgs;
        images[7] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[7]++;
      this.setState({ pressedButton: pressedButton });
    } else if (id == "22") {
      if (this.state.pressedButton[8] == 0) {
        this.setGame(2, 2, turn);
        var images = this.state.imgs;
        images[8] = img;
        this.setState({ imgs: images });
        counter++;
        this.setState({ count: counter });
      }
      pressedButton[8]++;
      this.setState({ pressedButton: pressedButton });
    }
  };
  setGame(i, j, turn) {
    var game = this.state.game;
    if (turn == 1) {
      game[i][j] = 1;
      this.setState(() => ({ game }));
      this.check(game, 1);
      this.check(game, 2);
    } else if (turn == 2) {
      game[i][j] = 2;
      this.setState(() => ({ game }));
      this.check(game, 1);
      this.check(game, 2);
    }
  }
  check(game, p1) {
    var count = 0;
    if (this.state.win == 0) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (game[i][j] == p1) {
            count++;
          }
        }
        if (count == 3) {
          this.setState({ win: 1, lastWin: p1 });
          Alert.alert(`player ${p1} won`, "Congragulations", [
            {
              text: "OK",
              onPress: () =>
                this.setState({
                  count: 0,
                  imgs: [
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent
                  ],
                  game: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                  pressedButton: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  win: 0
                })
            }
          ]);
          break;
        }
        count = 0;
      }
    }
    if (this.state.win == 0) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (game[j][i] == p1) {
            count++;
          }
        }
        if (count == 3) {
          this.setState({ win: 1, lastWin: p1 });

          Alert.alert(`player ${p1} won`, "Congragulations", [
            {
              text: "OK",
              onPress: () =>
                this.setState({
                  count: 0,
                  imgs: [
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent
                  ],
                  game: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                  pressedButton: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  win: 0
                })
            }
          ]);
          break;
        }
        count = 0;
      }
    }
    if (this.state.win == 0) {
      if (game[0][0] == p1 && game[1][1] == p1 && game[2][2] == p1) {
        this.setState({ win: 1, lastWin: p1 });
        Alert.alert(`player ${p1} won`, "Congragulations", [
          {
            text: "OK",
            onPress: () =>
              this.setState({
                count: 0,
                imgs: [
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent
                ],
                game: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                pressedButton: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                win: 0
              })
          }
        ]);
      } else if (game[0][2] == p1 && game[1][1] == p1 && game[2][0] == p1) {
        this.setState({ win: 1, lastWin: p1 });
        Alert.alert(`player ${p1} won`, "Congragulations", [
          {
            text: "OK",
            onPress: () =>
              this.setState({
                count: 0,
                imgs: [
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent,
                  transparent
                ],
                game: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                pressedButton: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                win: 0
              })
          }
        ]);
      }
    }
  }
  reset = () => {
    this.setState({
      count: 0,
      imgs: [
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent,
        transparent
      ],
      game: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      pressedButton: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      win: 0
    });
  };
  render() {
    if (this.state.count % 2 == 0 && this.state.lastWin == 1) {
      var turn = 1;
    } else if (this.state.count % 2 == 0 && this.state.lastWin == 0) {
      var turn = 1;
    } else {
      var turn = 2;
    }
    return (
      <View style={styles.container}>
        <Turn turn={turn} />
        <Game
          fun={this._onPressButton}
          imgs={this.state.imgs}
          turn={this.state.turn}
        />
        <Button onPress={this.reset} title="Reset" color="#FF0000" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
