import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import banner from '../../../../Assets/temp/banner.jpg';

const {height, width} = Dimensions.get('window');

const stWidth = 540;
const stHeight = 936;

export default class Collection extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View
          style={{flex: (0.7 / stHeight) * height, justifyContent: 'center'}}>
          <Text style={styles.header_title}>SPRING COLLECTION</Text>
        </View>
        <TouchableOpacity
          style={{flex: (4.3 / stHeight) * height}}
          onPress={() => navigation.navigate('ProductList')}>
          <Image source={banner} style={styles.body_banner} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: (310 / stHeight) * height,
    marginVertical: (7 / stHeight) * height,
    borderRadius: (5 / stHeight) * height,
  },
  header_title: {
    fontSize: (20 / stHeight) * height,
    color: '#A9A9A9',
    marginLeft: (10 / stWidth) * width,
  },
  body_banner: {
    height: (255 / stHeight) * height,
    width: width - (20 / stWidth) * width,
    alignSelf: 'center',
    borderRadius: (5 / stHeight) * height,
  },
});
