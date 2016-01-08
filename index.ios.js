// import code
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React;

// create a component
var Cal = React.createClass({
  getInitialState: function () {
    return {
      isAC: true,
      memory: 0, // memory varialble
      current: 0, // add value of display
      operation: 0, // records code for +, -, * and / etc.,
      MAXLENGHT: 15,
      buttonBorderColor: 'green',
      buttonBorderRightWidth: 1,
      buttonBorderLeftWidth: 1,
      buttonUnderlayColor: 'green'
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
  specialButtonBorder: function () {
    return {
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
    }
  },
  acButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
            style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        {this.state.isAC ? 'AC': 'C'}
      </Text>
    </TouchableHighlight>
  },
  plusMinusButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        +/-
      </Text>
    </TouchableHighlight>
  },
  percentageButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
    style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        %
      </Text>
    </TouchableHighlight>
  },
  divButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      style={[styles.specialButtonView, this.specialButtonBorder()]}>
      <Text style={styles.text}>
        ÷
      </Text>
    </TouchableHighlight>
  },
  sevenButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.addDigit.bind(this, 7)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        7
      </Text>
    </TouchableHighlight>
  },
  eightButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.addDigit.bind(this, 8)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        8
      </Text>
    </TouchableHighlight>
  },
  nineButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.addDigit.bind(this, 9)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        9
      </Text>
    </TouchableHighlight>
  },
  mulButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
      style={[styles.specialButtonView, this.specialButtonBorder()]}>
      <Text style={styles.text}>
        *
      </Text>
    </TouchableHighlight>
  },
  fourButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      onPress = {this.addDigit.bind(this, 4)}  
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        4
      </Text>
    </TouchableHighlight>
  },
  fiveButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.addDigit.bind(this, 5)}   
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        5
      </Text>
    </TouchableHighlight>
  },
  sixButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
      onPress = {this.addDigit.bind(this, 6)} 
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        6
      </Text>
    </TouchableHighlight>
  },
  minuButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  
    style={[styles.specialButtonView, this.specialButtonBorder()]}>
      <Text style={styles.text}>
        -
      </Text>
    </TouchableHighlight>
  },
  oneButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.addDigit.bind(this, 1)}
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        1
      </Text>
    </TouchableHighlight>
  },
  twoButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
    onPress = {this.addDigit.bind(this, 2)}  
    style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, this.state.buttonBorderLeftWidth)]}>
      <Text style={styles.text}>
        2
      </Text>
    </TouchableHighlight>
  },
  threeButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor} 
      onPress = {this.addDigit.bind(this, 3)} 
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
      onPress = {this.addDigit.bind(this, 0)} 
      style={[styles.zeroButton]}>
      <Text style={styles.text}>
        0
      </Text>
    </TouchableHighlight>
  },
  periodButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}
      onPress = {this.addDigit.bind(this, '.')}  
      style={[styles.buttonView, this.border(this.state.buttonBorderColor, this.state.buttonBorderRightWidth, 0)]}>
      <Text style={styles.text}>
        .
      </Text>
    </TouchableHighlight>
  },
  equalButton: function () {
    return <TouchableHighlight underlayColor={this.state.buttonUnderlayColor}  style={[styles.specialButtonView]}>
      <Text style={styles.text}>
        =
      </Text>
    </TouchableHighlight>
  },
  _onPressButton: function (event, value) {
    console.log(event);
  },
  addDigit: function (dig, event) {
    switch (dig) {
      case '+':
        console.log('plusButton');
        return;
    }
    
    if (this.state.current.toString().length > this.state.MAXLENGHT) {
      this.setState({
        current: 'Aargh! Too long'
      });
    } else {
      if (this.state.current == 0 && this.state.current.toString().indexOf('.') == -1) {
        this.setState({
          current: dig
        });
      } else {
        if (dig == '.' && this.state.current.toString().indexOf('.')  != -1) {
          return;
        } else {
          this.setState({
            current: this.state.current + dig.toString()
          });
        }
      }
    }
  },
  onShowUnderlay: function () {
    console.log('onShowUnderlay');
  }
});

// style the component
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18, 
    fontWeight: 'bold'
  },
  resultView: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#2C2C27'
  },
  resultText: {
    fontSize: 48,
    fontWeight: 'normal',
    color: '#EBEBEB',
    right: 10
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
    // backgroundColor: 'red',  
  },
  zeroButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    borderRightColor: 'green',
  },
  specialButtonView: {
    backgroundColor: '#EEBC3F',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

// add the component
// one per application
AppRegistry.registerComponent('cal', () => Cal);
