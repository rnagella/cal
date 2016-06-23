// import code
// Note: React now uses import
import React from 'react';
import {AppRegistry, StyleSheet, View, Text, TouchableHighlight, StatusBarIOS} from 'react-native';

// var {
//   AppRegistry,
//   StyleSheet,
//   View,
//   Text,
//   TouchableHighlight,
//   StatusBarIOS
// } = React;

StatusBarIOS.setStyle(1);

// create a component
var Cal = React.createClass({
  getInitialState: function () {
    return {
      isAC: true,
      memory: 0, // memory varialble - previous number you entered
      current: 0, // the number currently being entered
      operation: 0, // records code for +, -, * and / etc., - the function button we pushed
      MAXLENGHT: 30, // constant 
      buttonBorderColor: 'grey',
      buttonBorderRightWidth: 1,
      buttonBorderLeftWidth: 1,
      buttonUnderlayColor: 'grey',
      isOperationSelected: false,
      lastCurrentvalue: 0
    }
  },
  render: function () {
    return (
      <View style={[styles.container]}>
        <View style={[styles.resultView]}>
          <Text style={styles.resultText}>
            {this.state.current}
          </Text>
        </View>
        <View style={[styles.inputView]}>
          <View style={[styles.rowView]}>
            {this.acButton()}
            {this.plusMinusButton()}
            {this.percentageButton()}
            {this.divButton()}
          </View>
          <View style={[styles.rowView]}>
            {this.sevenButton()}
            {this.eightButton()}
            {this.nineButton()}
            {this.mulButton()}
          </View>
          <View style={[styles.rowView]}>
            {this.fourButton()}
            {this.fiveButton()}
            {this.sixButton()}
            {this.minuButton()}
          </View>
          <View style={[styles.rowView]}>
            {this.oneButton()}
            {this.twoButton()}
            {this.threeButton()}
            {this.plusButton()}
          </View>
          <View style={[styles.rowView]}>
            {this.zeroButton()}
            {this.periodButton()}
            {this.equalButton()}
          </View>
        </View>
      </View>
    )
  },
  border: function (color, rightWidth, bottomWidth) {
    return {
      borderColor: color ? color : 'green',
      borderRightWidth: rightWidth,
      borderBottomWidth: bottomWidth
    }
  },
  specialButtonBorder: function (color) {
    return {
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
    }
  },
  acButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
            onPress = {this.addDigit.bind(this, 'AC/C')}  
            style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        {this.state.isAC ? 'AC': 'C'}
      </Text>
    </TouchableHighlight>
  },
  plusMinusButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.addDigit.bind(this, '+/-')} 
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        +/-
      </Text>
    </TouchableHighlight>
  },
  percentageButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
    onPress = {this.addDigit.bind(this, '%')}
    style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        %
      </Text>
    </TouchableHighlight>
  },
  divButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      onPress = {this.addDigit.bind(this, '÷')}
      style={[styles.specialButtonView, this.specialButtonBorder()]}>
      <Text style={styles.text}>
        ÷
      </Text>
    </TouchableHighlight>
  },
  sevenButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.digit.bind(this, 7)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        7
      </Text>
    </TouchableHighlight>
  },
  eightButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.digit.bind(this, 8)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        8
      </Text>
    </TouchableHighlight>
  },
  nineButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.digit.bind(this, 9)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        9
      </Text>
    </TouchableHighlight>
  },
  mulButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
      onPress = {this.addDigit.bind(this, '*')}
      style={[styles.specialButtonView, this.specialButtonBorder()]}>
      <Text style={styles.text}>
        *
      </Text>
    </TouchableHighlight>
  },
  fourButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      onPress = {this.digit.bind(this, 4)}  
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        4
      </Text>
    </TouchableHighlight>
  },
  fiveButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.digit.bind(this, 5)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        5
      </Text>
    </TouchableHighlight>
  },
  sixButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
      onPress = {this.digit.bind(this, 6)} 
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        6
      </Text>
    </TouchableHighlight>
  },
  minuButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
    onPress = {this.addDigit.bind(this, '-')}
    style={[styles.specialButtonView, this.specialButtonBorder()]}>
      <Text style={styles.text}>
        -
      </Text>
    </TouchableHighlight>
  },
  oneButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.digit.bind(this, 1)}
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        1
      </Text>
    </TouchableHighlight>
  },
  twoButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
    onPress = {this.digit.bind(this, 2)}  
    style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        2
      </Text>
    </TouchableHighlight>
  },
  threeButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      onPress = {this.digit.bind(this, 3)} 
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        3
      </Text>
    </TouchableHighlight>
  },
  plusButton: function () {
    return <TouchableHighlight
      ref="plusButton" underlayColor={this.state.buttonUnderlayColor} 
      onPress = {this.addDigit.bind(this, '+')}
      style={[styles.specialButtonView, this.specialButtonBorder()]}>
      <Text style={styles.text}>
        +
      </Text>
    </TouchableHighlight>
  },
  zeroButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      onPress = {this.digit.bind(this, 0)} 
      style={[styles.zeroButton]}>
      <Text style={styles.text}>
        0
      </Text>
    </TouchableHighlight>
  },
  periodButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.digit.bind(this, '.')}  
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, 0)]}>
      <Text style={styles.text}>
        .
      </Text>
    </TouchableHighlight>
  },
  equalButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
    onPress = {this.addDigit.bind(this, '=')}
    style={[styles.specialButtonView]}>
      <Text style={styles.text}>
        =
      </Text>
    </TouchableHighlight>
  },
  operate: function (dig) {
    if (this.state.operation == 0) {
      this.setState({
        memory: this.state.current,
        current: '', // or we could use 0
        operation: dig,
        isOperationSelected: true
      });       
    } else {
      if (this.state.isOperationSelected == true) {
        return;
      }
      if (this.state.operation == dig) {
        if (this.state.operation == 1) {
          memoryVal = eval(this.state.memory) * eval(this.state.current); 
        } else if (this.state.operation == 2) {
          if (eval(this.state.current) === 0) {
            memoryVal = 'Error'; 
          } else {
            memoryVal = eval(this.state.memory) / eval(this.state.current); 
          }
        } else if (this.state.operation == 3) {
          memoryVal = eval(this.state.memory) + eval(this.state.current); 
        } else if (this.state.operation == 4) {
          memoryVal = eval(this.state.memory) - eval(this.state.current); 
        }
        this.setState({
          memory: memoryVal,
          current: memoryVal,
          isOperationSelected: true,
        });
      } else {
        if (this.state.operation == 1) {
          memoryVal = eval(this.state.memory) * eval(this.state.current); 
        } else if (this.state.operation == 2) {
          if (eval(this.state.current) === 0) {
            memoryVal = 'Error';
          } else {
            memoryVal = eval(this.state.memory) / eval(this.state.current);
          }
          
        } else if (this.state.operation == 3) {
          memoryVal = eval(this.state.memory) + eval(this.state.current); 
        } else if (this.state.operation == 4) {
          memoryVal = eval(this.state.memory) - eval(this.state.current); 
        }
        this.setState({
          memory: memoryVal,
          current: memoryVal,
          isOperationSelected: true
        });
      }
    }
  },
  digit: function (dig, event) {
    if (this.state.current.toString().length > this.state.MAXLENGHT) {
      this.setState({
        current: 'Aargh! Too long'
      });
    } else {
      // set the value to 0 if the current is a string of 'Aargh! Too long' 
      if (this.state.current == 'Aargh! Too long') {
        this.setState({
          lastCurrentvalue: 0,
          current: 0,
          memory: 0
        });
        // this.setState({
        //     current: 0,
        //     operation: 0,
        //     memory: 0,
        //     // isAC: true
        //   });
      }

      if (this.state.current == 'Error') {
        this.setState({
          lastCurrentvalue: 0,
          current: 0,
          memory: 0
        });
      }

      if (this.state.current == 0 && this.state.current.toString().indexOf('.') == -1) {
        this.setState({
          lastCurrentvalue: 0 + dig,
          current: 0 + dig
        });
      } else {
        if (dig == '.' && this.state.current.toString().indexOf('.')  != -1) {
          return;
        } else {
          if (!this.state.isOperationSelected) {
            this.setState({
              lastCurrentvalue: this.state.current + dig.toString(),
              current: this.state.current == 'Aargh! Too long' ? dig.toString() : this.state.current + dig.toString()
            });
          } else {
            this.setState({
              lastCurrentvalue: dig.toString(),
              current: dig.toString()
            });
          }
        }
      }
      this.setState({
      isOperationSelected: false,
      isAC: false
    });
    }
  },
  addDigit: function (dig, event) {
    switch (dig) {
      case '=': 
        var memoryVal;
        if (this.state.operation == 1) {
          memoryVal = eval(this.state.memory) * eval(this.state.lastCurrentvalue); 
        } else if (this.state.operation == 2) {
          if (eval(this.state.current) === 0) {
            memoryVal = 'Error';
          } else {
            memoryVal = eval(this.state.memory) / eval(this.state.lastCurrentvalue); 
          }

          if (this.state.current == 'Error') {
            this.setState({
              lastCurrentvalue: 0,
              current: 0,
              memory: 0
            });
          }
          
        } else if (this.state.operation == 3) {
          memoryVal = eval(this.state.memory) + eval(this.state.lastCurrentvalue); 
        } else if (this.state.operation == 4) {
          memoryVal = eval(this.state.memory) - eval(this.state.lastCurrentvalue); 
        }
        this.setState({
          memory: memoryVal,
          current: memoryVal,
          isOperationSelected: true
        });
        return;
      case '*': 
        this.operate(1);
        if (this.state.operation !== 0) {
          this.setState({
            operation: 1,
            isOperationSelected: true
          });
        }
        return;
      case '÷':
        this.operate(2);
        if (this.state.operation !== 0) {
          this.setState({
            operation: 2,
            isOperationSelected: true
          });
        }
        return;
      case '+':
        this.operate(3);
        if (this.state.operation !== 0) {
          this.setState({
            operation: 3,
            isOperationSelected: true
          });
        }
        return;
      case '-': 
      this.operate(4);
      if (this.state.operation !== 0) {
          this.setState({
            operation: 4,
            isOperationSelected: true
          });
        }
        return;
      case '%':
        console.log('percentageButton');
        this.setState({
          memory: (this.state.current)/100,
          current: (this.state.current)/100, 
        });
        return;
      case '+/-':
        if (this.state.current !== 0) {
          if (this.state.current.toString().indexOf('-') == 0) {
            this.setState({
              current: this.state.current.substring(1)
            });
          } else {
            this.setState({
              current: '-' + this.state.current
            });
          }
        }
      return;
      case 'AC/C':
        console.log('acButton');
        if (!this.state.isAC) {
          // clear current
          this.setState({
            current: 0,
            isAC: true
          });
        } else {
          // clear everything
          this.setState({
            current: 0,
            operation: 0,
            memory: 0,
            isAC: true
          });
        }
        return;
    }
  }
});

// style the component
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32, 
    fontWeight: '100',
    color: '#fff'
  },
  resultView: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#2C2C27',
  },
  resultText: {
    fontSize: 48,
    fontWeight: '300',
    color: '#EBEBEB',
    marginLeft: 10,
    marginRight: 10
  },
  inputView: {
    flex: 5
  },
  rowView: {
    flexDirection: 'row',
    flex: 1
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',  
  },
  zeroButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    borderRightWidth: 1,
    borderRightColor: 'grey',
    borderLeftWidth: 1,
    borderLeftColor: '#2c3e50'
  },
  specialButtonView: {
    backgroundColor: '#3B7A57',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

// add the component
// one per application
AppRegistry.registerComponent('cal', () => Cal);
