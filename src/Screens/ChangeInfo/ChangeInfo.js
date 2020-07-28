import React, {Component} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';

export default class ChangeInfo extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View>
          <Text>ChangeInfo Screen</Text>
          <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
          <Button
            title="Toggle drawer"
            onPress={() => navigation.toggleDrawer()}
          />
          <Button title="Go Main" onPress={() => navigation.navigate('Main')} />
        </View>
      </View>
    );
  }
}
