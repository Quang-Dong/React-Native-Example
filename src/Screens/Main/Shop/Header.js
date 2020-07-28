import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';

import ic_menu from '../../../Assets/appIcon/ic_menu.png';
import ic_logo from '../../../Assets/appIcon/ic_logo.png';

const {height, width} = Dimensions.get('window');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
    };
    console.log(`Size màn hình: ` + `Rộng: ` + width + ` Dài: ` + height);
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

const stWidth = 540; //Standard Width
const stHeight = 936; // Standard Height

const styles = StyleSheet.create({
  wrapper: {
    height: (117 / stHeight) * height,
    backgroundColor: '#34B089',
    justifyContent: 'space-around',
    padding: (10 / stWidth) * width,
  },
  header_row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_title: {
    color: 'white',
    fontSize: (25 / stWidth) * width,
    fontFamily: 'Avenir',
  },
  header_txtInput: {
    height: (40 / stHeight) * height,
    backgroundColor: 'white',
    paddingHorizontal: (10 / stWidth) * width,
    paddingVertical: (10 / stHeight) * height,
    color: 'black',
    borderRadius: (5 / stHeight) * height,
  },
  header_icon: {
    width: (40 / stWidth) * width,
    height: (40 / stHeight) * height,
  },
});
