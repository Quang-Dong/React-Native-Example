import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import profile from '../../../Assets/temp/profile.png';
import {wp, hp} from '../../../lib/responsive';
const {height, width} = Dimensions.get('window');

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const {navigation} = this.props;

    const logInJSX = (
      <View style={styles.menu_view}>
        <Text style={styles.header_txt}>Trinh Quang Dong</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('OrderHistory')}
          style={styles.body_item}>
          <Text style={styles.body_item_txt}>OrderHistory</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangeInfo')}
          style={styles.body_item}>
          <Text style={styles.body_item_txt}>ChangeInfo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body_item}>
          <Text style={styles.body_item_txt}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );

    const logOutJSX = (
      <View style={styles.menu_view}>
        <View style={styles.body_view}>
          <TouchableOpacity
            style={styles.body_item}
            onPress={() => navigation.navigate('Authentication')}>
            <Text style={styles.body_item_txt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const menuJSX = this.state.isLoggedIn ? logInJSX : logOutJSX;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <Image source={profile} style={styles.header_img} />
        {menuJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    padding: wp(10),
  },
  menu_view: {
    flex: 1,
  },
  header_img: {
    height: hp(150),
    width: wp(150),
    borderRadius: wp(150),
    alignSelf: 'center',
  },
  header_txt: {
    alignSelf: 'center',
    color: 'white',
    fontSize: hp(23),
    padding: wp(10),
    marginBottom: hp(35),
  },

  body_view: {
    marginTop: hp(35),
  },

  body_item: {
    backgroundColor: 'white',
    marginBottom: hp(10),
    borderRadius: hp(10),
    justifyContent: 'center',
  },
  body_item_txt: {
    color: '#34B089',
    margin: wp(15),
    fontSize: wp(20),
  },
});
