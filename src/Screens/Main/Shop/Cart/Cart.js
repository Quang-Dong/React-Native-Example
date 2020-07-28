import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

export default class Cart extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <Text>Cart</Text>
      </View>
    );
  }
}
