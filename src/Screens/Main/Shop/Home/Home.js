import React, {Component} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';

import Collection from './Collection';

import Category from './Category';

import TopProduct from './TopProduct';

export default class Home extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <Collection navigation={navigation} />
        <Category navigation={navigation} />
        <TopProduct navigation={navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
