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

export default class Authenticaton extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#34B089" barStyle="light-content" />

        <View style={styles.body_view}>
          <View style={styles.body_input_view}>
            <TextInput placeholder="Email" style={styles.body_input} />
            <TextInput placeholder="Password" style={styles.body_input} />
          </View>

          <TouchableOpacity style={styles.body_btn}>
            <Text style={{color: 'white', fontSize: (20 / stHeight) * height}}>
              Sign in
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
});
