/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

import sp1 from '../../../../Assets/temp/sp1.jpeg';
import {wp, hp, width, height} from '../../../../lib/responsive';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Cart extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <View
          style={{
            height: '90%',
            width: '100%',
            alignItems: 'center',
          }}>
          {/* Item - START */}
          <View
            style={{
              backgroundColor: 'white',
              width: width - wp(20),
              height: hp(150),
              flexDirection: 'row',
              marginVertical: wp(10),
              borderRadius: wp(10),
            }}>
            <View
              style={{
                height: '100%',
                width: '30%',
                padding: wp(10),
              }}>
              <Image
                source={sp1}
                resizeMode="contain"
                style={{width: '100%', height: '100%', borderRadius: wp(10)}}
              />
            </View>
            <View
              style={{
                height: '100%',
                width: '40%',
                justifyContent: 'space-between',
                padding: wp(10),
              }}>
              <Text style={{fontSize: wp(20)}}>BLACK OF THE</Text>
              <Text style={{fontSize: wp(20), color: '#BB4D7A'}}>100$</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity>
                  <Text style={{fontSize: wp(30)}}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize: wp(20)}}>3</Text>
                <TouchableOpacity>
                  <Text style={{fontSize: wp(30)}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: '100%',
                width: '30%',
                justifyContent: 'flex-end',
                paddingBottom: wp(10),
              }}>
              <TouchableOpacity>
                <Text style={{color: '#BB4D7A'}}>SHOW DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Item - END */}
        </View>
        <View
          style={{
            height: '10%',
            width: '90%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#35B089',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: wp(20)}}>
              TOTAL 100$ - CHECK OUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
