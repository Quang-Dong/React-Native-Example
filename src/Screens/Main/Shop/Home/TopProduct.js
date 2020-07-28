import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import sp1 from '../../../../Assets/temp/sp1.jpeg';
import sp2 from '../../../../Assets/temp/sp2.jpeg';
import sp3 from '../../../../Assets/temp/sp3.jpeg';
import sp4 from '../../../../Assets/temp/sp4.jpeg';

export default class TopProduct extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View style={styles.header_view}>
          <Text style={styles.header_title}>TOP PRODUCT</Text>
        </View>
        <View style={styles.body_view}>
          <TouchableOpacity
            style={styles.body_product}
            onPress={() => navigation.navigate('ProductDetail')}>
            <Image source={sp1} style={styles.body_img} />
            <Text style={styles.body_title}>BLACK OFF THE</Text>
            <Text style={styles.body_price}>124$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.body_product}
            onPress={() => navigation.navigate('ProductDetail')}>
            <Image source={sp2} style={styles.body_img} />
            <Text style={styles.body_title}>CONTRATS EMBRO</Text>
            <Text style={styles.body_price}>121$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.body_product}
            onPress={() => navigation.navigate('ProductDetail')}>
            <Image source={sp3} style={styles.body_img} />
            <Text style={styles.body_title}>BLACK OFF THE</Text>
            <Text style={styles.body_price}>124$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.body_product}
            onPress={() => navigation.navigate('ProductDetail')}>
            <Image source={sp4} style={styles.body_img} />
            <Text style={styles.body_title}>CONTRATS EMBRO</Text>
            <Text style={styles.body_price}>121$</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const stWidth = 540;
const stHeight = 936;

const imgWidth = (width - (45 / stWidth) * width) / 2;
const imgHeight = (imgWidth / 361) * 452; //361 và 452 là kích thước gốc CỦA ẢNH.

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginVertical: (7 / stHeight) * height,
    borderRadius: (5 / stHeight) * height,
  },
  header_view: {
    flex: (0.7 / stHeight) * height,
    justifyContent: 'center',
    paddingVertical: (6 / stHeight) * height,
  },
  header_title: {
    fontSize: (20 / stHeight) * height,
    color: '#A9A9A9',
    marginLeft: (10 / stWidth) * width,
  },
  body_view: {
    flex: (4.3 / stHeight) * height,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  body_product: {
    width: imgWidth,
    alignItems: 'center',
  },
  body_img: {
    height: imgHeight,
    width: imgWidth,
    alignSelf: 'center',
    borderRadius: (5 / stHeight) * height,
  },
  body_title: {
    fontSize: (20 / stHeight) * height,
    color: '#A9A9A9',
  },
  body_price: {
    fontSize: (20 / stHeight) * height,
    color: '#D1527F',
    marginBottom: (10 / stWidth) * width,
  },
});
