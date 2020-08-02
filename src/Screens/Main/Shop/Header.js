import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';

import ic_menu from '../../../Assets/appIcon/ic_menu.png';
import ic_logo from '../../../Assets/appIcon/ic_logo.png';

import {wp, hp} from '../../../lib/responsive';

const {height, width} = Dimensions.get('window');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
    };
    console.log('Size màn hình: ' + 'Rộng: ' + width + ' Dài: ' + height);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View style={styles.header_row1}>
          <TouchableOpacity onPress={this.props.openMenu}>
            <Image source={ic_menu} style={styles.header_icon} />
          </TouchableOpacity>
          <Text style={styles.header_title}>Wearing a Dress</Text>
          <Image source={ic_logo} style={styles.header_icon} />
        </View>
        <TextInput placeholder="Search..." style={styles.header_txtInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: hp(100),
    backgroundColor: '#34B089',
    justifyContent: 'space-around',
    paddingHorizontal: wp(10),
    paddingBottom: wp(5),
  },
  header_row1: {
    flexDirection: 'row',
    height: hp(40),
    justifyContent: 'space-between',
  },
  header_title: {
    color: 'white',
    fontSize: wp(25),
    fontFamily: 'Avenir',
  },
  header_txtInput: {
    height: hp(40),
    backgroundColor: 'white',
    padding: wp(10),
    color: 'black',
    fontSize: wp(12),
    borderRadius: hp(5),
  },
  header_icon: {
    width: wp(40),
    height: hp(40),
  },
});
