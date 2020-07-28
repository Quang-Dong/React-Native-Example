import React, {Component} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';

export default class OrderHistory extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />

        <Text>OrderHistory Screen</Text>
      </View>
    );
  }
}
