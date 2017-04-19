import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { getLoginStatus } from '../actions/login.js'
class FirstContainer extends Component {

  componentWillMount() {

  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps ==>", nextProps.loginStatus)
  }
  _btn1Click = () => {
    this.props.getLoginStatus({ "userName": "liche" })
  }
  _btn2Click = () => {
    this.props.getLoginStatus({age:"29" })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>
          {this.props.loginStatus.userName}
          {this.props.loginStatus.age}
          
        </Text>
        <Button title="btn1" onPress={this._btn1Click} />
        <Button title="btn2" onPress={this._btn2Click} />
        
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.login
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginStatus: (param) => dispatch(getLoginStatus(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});