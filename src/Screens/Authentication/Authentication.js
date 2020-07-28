import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authenticaton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
    };
  }
  render() {
    const {navigation} = this.props;

    const {isSignIn} = this.state;

    const mainJSX = isSignIn ? <SignIn /> : <SignUp />;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#34B089" barStyle="light-content" />
        {mainJSX}

        <View style={isSignIn ? styles.foot_view : styles.foot_view_1}>
          <TouchableOpacity
            style={styles.foot_btn_view}
            onPress={() => this.setState({isSignIn: true})}>
            <Text style={isSignIn ? styles.foot_btn : styles.foot_btn_1}>
              Sign in
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: (55 / stHeight) * height,
              width: 2,
              backgroundColor: '#34B089',
            }}
          />
          <TouchableOpacity
            style={styles.foot_btn_view}
            onPress={() => this.setState({isSignIn: false})}>
            <Text style={isSignIn ? styles.foot_btn_1 : styles.foot_btn}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const stWidth = 540; //Standard Width
const stHeight = 936; // Standard Height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    alignItems: 'center',
  },
  body_view: {
    width: width,
    alignItems: 'center',
    marginTop: (80 / stHeight) * height,
  },
  body_input: {
    height: (55 / stHeight) * height,
    width: width - (100 / stHeight) * height,
    marginTop: (20 / stHeight) * height,
    paddingHorizontal: (20 / stHeight) * height,
    backgroundColor: 'white',
    fontSize: (20 / stHeight) * height,
    borderRadius: (30 / stHeight) * height,
  },
  body_btn: {
    height: (55 / stHeight) * height,
    width: width - (100 / stHeight) * height,
    marginTop: (20 / stHeight) * height,
    paddingHorizontal: (20 / stHeight) * height,
    fontSize: (20 / stHeight) * height,
    borderRadius: (30 / stHeight) * height,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  foot_view: {
    height: (55 / stHeight) * height,
    width: width - (100 / stHeight) * height,
    marginTop: (450 / stHeight) * height,
    flexDirection: 'row',
    borderRadius: (27 / stHeight) * height,
    backgroundColor: 'white',
  },
  foot_view_1: {
    height: (55 / stHeight) * height,
    width: width - (100 / stHeight) * height,
    marginTop: (300 / stHeight) * height,
    flexDirection: 'row',
    borderRadius: (27 / stHeight) * height,
    backgroundColor: 'white',
  },
  foot_btn_view: {
    height: (55 / stHeight) * height,
    width: (width - (100 / stHeight) * height) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foot_btn: {
    color: '#34B089',
    fontSize: (20 / stHeight) * height,
  },
  foot_btn_1: {
    color: '#E1E1E1',
    fontSize: (20 / stHeight) * height,
  },
});
