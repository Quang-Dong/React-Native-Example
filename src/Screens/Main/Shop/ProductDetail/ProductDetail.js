import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import sp4 from '../../../../Assets/temp/sp4.jpeg';
import sp5 from '../../../../Assets/temp/sp5.jpeg';
import {wp, hp} from '../../../../lib/responsive';

import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {containter} = styles;
    const url = 'http://192.168.0.104:3000/images/product/';
    const {
      name,
      price,
      material,
      description,
      color,
      image1,
      image2,
    } = this.props.route.params.data;
    return (
      <View style={containter}>
        <ScrollView
          horizontal={true}
          style={{
            height: hp(160),
            width: '95%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'purple',
              width: wp(190),
              height: '100%',
              marginRight: wp(10),
            }}>
            <Image
              source={{uri: `${url}${image1}`}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View
            style={{
              backgroundColor: 'orange',
              width: wp(190),
              height: '100%',
              marginRight: wp(10),
            }}>
            <Image
              source={{uri: `${url}${image2}`}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </ScrollView>
        <View
          style={{
            height: hp(50),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp(10),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: wp(20), fontWeight: 'bold'}}>
              {name.toUpperCase()}
            </Text>
            <Text style={{fontSize: wp(20), color: '#9A9A9A'}}> / </Text>
            <Text style={{fontSize: wp(20), color: '#9A9A9A'}}>{price}$</Text>
          </View>

          <Icon name={'cart-outline'} size={wp(35)} color={'#35B089'} />
        </View>
        <ScrollView
          style={{
            backgroundColor: 'white',
            height: hp(90),
            paddingHorizontal: wp(10),
          }}>
          <Text style={{color: '#A8A8A8', fontSize: wp(20)}}>
            {description}
          </Text>
        </ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            height: hp(110),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(10),
          }}>
          <Text style={{color: '#CD5D84', fontSize: wp(20)}}>
            Material {material}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'baseline',
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                color: '#CD5D84',
                fontSize: wp(20),
                paddingHorizontal: wp(5),
              }}>
              Color {color}
            </Text>
            <View
              style={{
                width: wp(20),
                height: wp(20),
                borderRadius: wp(20),
                backgroundColor: color.toLowerCase(),
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {flex: 1, backgroundColor: '#FFF', flexDirection: 'column'},
});
