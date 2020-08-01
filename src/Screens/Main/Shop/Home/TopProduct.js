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
import {FlatList} from 'react-native-gesture-handler';

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
          {productsData.map((data) => (
            <TouchableOpacity
              key={data.id}
              style={styles.body_product}
              onPress={() => navigation.navigate('ProductDetail', {data})}>
              <Image
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
