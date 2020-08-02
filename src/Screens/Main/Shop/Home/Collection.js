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

import {wp, hp} from '../../../../lib/responsive';
const {width, height} = Dimensions.get('window');

export default class Collection extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View
          style={{
            height: hp(30),
            justifyContent: 'center',
          }}>
          <Text style={styles.header_title}>SPRING COLLECTION</Text>
        </View>
        <TouchableOpacity
          style={{
            height: hp(220),
            width: wp(width - wp(20)),
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate('ProductList')}>
          <Image
            source={banner}
            resizeMode="contain"
            style={styles.body_banner}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: hp(250),
    marginVertical: hp(5),
    borderRadius: wp(5),
  },
  header_title: {
    fontSize: wp(20),
    color: '#A9A9A9',
    marginLeft: wp(10),
  },
  body_banner: {
    height: '100%',
    width: '100%',
    borderRadius: wp(5),
  },
});
