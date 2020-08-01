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

const {height, width} = Dimensions.get('window');

const stHeight = 936;
const stWidth = 540;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    padding: (10 / stWidth) * width,
  },
  menu_view: {
    flex: 1,
  },
  header_img: {
    height: (150 / stHeight) * height,
    width: (150 / stWidth) * width,
    borderRadius: (150 / stWidth) * width,
    alignSelf: 'center',
  },
  header_txt: {
    alignSelf: 'center',
    color: 'white',
    fontSize: (23 / stHeight) * height,
    padding: (10 / stWidth) * width,
    marginBottom: (35 / stHeight) * height,
  },

  body_view: {
    marginTop: (35 / stHeight) * height,
  },

  body_item: {
    backgroundColor: 'white',
    marginBottom: (10 / stHeight) * height,
    borderRadius: (10 / stWidth) * width,
    justifyContent: 'center',
  },
  body_item_txt: {
    color: '#34B089',
    margin: (15 / stWidth) * width,
    fontSize: (20 / stHeight) * height,
  },
});
