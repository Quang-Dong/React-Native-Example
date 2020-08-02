import React, {Component} from 'react';
import {View, Text, StatusBar, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Home/Home';
import CartScreen from './Cart/Cart';
import SearchScreen from './Search/Search';
import ContactScreen from './Contact/Contact';
import HeaderScreen from './Header';

import {wp, hp} from '../../../lib/responsive';

import Icon_Ion from 'react-native-vector-icons/Ionicons';
import Icon_Ant from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

function IconWithBadge({name, badgeCount, size, color}) {
  return (
    <View>
      <Icon_Ion name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            right: wp(-10),
            top: hp(-4),
            backgroundColor: '#00a8ff',
            borderRadius: wp(15),
            width: wp(15),
            height: hp(15),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: 'white',
              fontSize: wp(14),
              fontWeight: 'bold',
            }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function CartIconWithBadge(props) {
  return <IconWithBadge {...props} badgeCount={3} />;
}

export default class Shop extends React.Component {
  _openMenu = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <HeaderScreen openMenu={() => this._openMenu()} />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({size1 = wp(35), color}) => {
              if (route.name === 'Cart') {
                return (
                  <CartIconWithBadge
                    name="md-cart"
                    size={size1}
                    color={color}
                  />
                );
              } else if (route.name === 'Contact') {
                return <Icon_Ant name="user" size={size1} color={color} />;
              } else if (route.name === 'Home') {
                return <Icon_Ion name="md-home" size={size1} color={color} />;
              } else if (route.name === 'Search') {
                return <Icon_Ion name="md-search" size={size1} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            labelStyle: {fontSize: wp(10)},
            labelPosition: 'below-icon',
            activeTintColor: '#34B089',
            inactiveTintColor: 'gray',
            style: {height: hp(65)},
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </View>
    );
  }
}
