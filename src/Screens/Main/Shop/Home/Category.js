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

import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');

const stWidth = 540;
const stHeight = 936;

export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typesData: [],
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.104:3000/api/types')
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({typesData: resJson});
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {navigation} = this.props;
    const {typesData} = this.state;
    const url = 'http://192.168.0.104:3000/images/type/';
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View
          style={{flex: (0.7 / stHeight) * height, justifyContent: 'center'}}>
          <Text style={styles.header_title}>LIST OF CATEGORY</Text>
        </View>
        <View style={{flex: (4.3 / stHeight) * height, alignItems: 'center'}}>
          <Swiper width={width - (20 / stWidth) * width}>
            {typesData.map((data) => (
              <TouchableOpacity
                key={data.id}
                onPress={() => navigation.navigate('ProductList')}>
                <ImageBackground
                  source={{uri: `${url}${data.image}`}}
                  style={styles.body_banner}>
                  <Text style={styles.body_txt}>{data.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </Swiper>
        </View>
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body_txt: {
    fontSize: (25 / stWidth) * width,
    color: '#9A9A9A',
  },
});
