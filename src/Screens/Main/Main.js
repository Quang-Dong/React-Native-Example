import * as React from 'react';

import {View, StatusBar, Dimensions, Image, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import ShopScreen from './Shop/Shop';
import AuthenticationScreen from '../Authentication/Authentication';
import SignInScreen from '../Authentication/SignIn';
import SignUpScreen from '../Authentication/SignUp';
import ChangeInfoScreen from '../ChangeInfo/ChangeInfo';
import OrderHistoryScreen from '../OrderHistory/OrderHistory';

import ProductListScreen from './Shop/ProductList/ProductList';
import ProductDetailScreen from './Shop/ProductDetail/ProductDetail';
import HomeScreen from './Shop/Home/Home';

import ic_logo from '../../Assets/appIcon/ic_logo.png';

const {height, width} = Dimensions.get('window');

const stWidth = 540; //Standard Width
const stHeight = 936;

export default class Main extends React.Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />

        <Stack.Navigator initialRouteName="Shop">
          <Stack.Screen
            name="Authentication"
            component={AuthenticationScreen}
            options={{
              title: 'Wearing a Dress',
              headerTintColor: '#FFF',
              headerRight: () => (
                <Image
                  source={ic_logo}
                  style={{
                    width: (40 / stWidth) * width,
                    height: (40 / stHeight) * height,
                    marginRight: (20 / stHeight) * height,
                  }}
                />
              ),
              headerStyle: {
                backgroundColor: '#34B089',
                elevation: 0,
              },
              headerTitleAlign: 'center',

              headerTitleStyle: {
                fontSize: (25 / stHeight) * height,
              },
            }}
          />
          <Stack.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfoScreen} />
          <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={{
              title: '',
              headerStyle: {elevation: 0},
            }}
          />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </View>
    );
  }
}
