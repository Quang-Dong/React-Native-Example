import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

export default class Search extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <Text>Search</Text>
      </View>
    );
  }
}
