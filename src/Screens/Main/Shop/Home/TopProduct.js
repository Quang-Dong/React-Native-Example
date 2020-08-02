import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {wp, hp} from '../../../../lib/responsive';
const {width, height} = Dimensions.get('window');

export default class TopProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsData: [],
      ip1: '192.168.0.104',
      ip2: '10.82.185.40',
    };
  }

  componentDidMount() {
    fetch(`http://${this.state.ip1}:3000/api/products`)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({productsData: resJson});
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {navigation} = this.props;
    const {productsData, ip1, ip2} = this.state;
    const url = `http://${ip1}:3000/images/product/`;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View style={styles.header_view}>
          <Text style={styles.header_title}>TOP PRODUCT</Text>
        </View>
        <View style={styles.body_view}>
          {/* <FlatList
            data={productsData}
            renderItem={({item}) => {
              <TouchableOpacity
                key={item.id}
                style={styles.body_product}
                onPress={() => navigation.navigate('ProductDetail', {item})}>
                <Image
                  resizeMode="contain"
                  source={{uri: `${url}${item.image1}`}}
                  style={styles.body_img}
                />
                <Text style={styles.body_title}>{item.name.toUpperCase()}</Text>
                <Text style={styles.body_price}>{item.price}$</Text>
              </TouchableOpacity>;
            }}
            keyExtractor={(item) => item.id}
          /> */}

          {productsData.map((data) => (
            <TouchableOpacity
              key={data.id}
              style={styles.body_product}
              onPress={() => navigation.navigate('ProductDetail', {data})}>
              <Image
                resizeMode="contain"
                source={{uri: `${url}${data.image1}`}}
                style={styles.body_img}
              />
              <Text style={styles.body_title}>{data.name.toUpperCase()}</Text>
              <Text style={styles.body_price}>{data.price}$</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: hp(7),
    borderRadius: wp(5),
  },
  header_view: {
    height: hp(30),
    justifyContent: 'center',
    paddingVertical: hp(6),
  },
  header_title: {
    fontSize: wp(20),
    color: '#A9A9A9',
    marginLeft: wp(10),
  },
  body_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  body_product: {
    height: hp(300),
    width: (width - wp(45)) / 2,
    alignItems: 'center',
    marginTop: hp(10),
  },
  body_img: {
    height: hp(225),
    width: '100%',
    alignSelf: 'center',
    borderRadius: wp(5),
  },
  body_title: {
    height: hp(30),
    fontSize: wp(20),
    color: '#A9A9A9',
  },
  body_price: {
    fontSize: wp(20),
    color: '#D1527F',
  },
});
