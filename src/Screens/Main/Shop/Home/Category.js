import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {wp, hp} from '../../../../lib/responsive';
const {width, height} = Dimensions.get('window');

import Swiper from 'react-native-swiper';

export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typesData: [],
      ip1: '192.168.0.104',
      ip2: '10.82.185.40',
    };
  }

  componentDidMount() {
    fetch(`http://${this.state.ip1}:3000/api/types`)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({typesData: resJson});
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {navigation} = this.props;
    const {typesData, ip1, ip2} = this.state;
    const url = `http://${ip1}:3000/images/type/`;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View
          style={{
            height: hp(30),
            justifyContent: 'center',
          }}>
          <Text style={styles.header_title}>LIST OF CATEGORY</Text>
        </View>
        <Swiper
          containerStyle={{
            alignSelf: 'center',
            width: wp(width - 20),
            height: hp(220),
          }}>
          {typesData.map((data) => (
            <TouchableOpacity
              key={data.id}
              onPress={() => navigation.navigate('ProductList')}>
              <ImageBackground
                source={{uri: `${url}${data.image}`}}
                resizeMode="contain"
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.body_txt}>{data.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: hp(250),
    marginVertical: hp(7),
    borderRadius: wp(5),
  },
  header_title: {
    fontSize: wp(20),
    color: '#A9A9A9',
    marginLeft: wp(10),
  },
  body_txt: {
    fontSize: wp(25),
    color: '#9A9A9A',
  },
});
