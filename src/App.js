import 'react-native-gesture-handler';
import * as React from 'react';

import {View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import MainScreen from './Screens/Main/Main';
import AuthenticationScreen from './Screens/Authentication/Authentication';
import SignInScreen from './Screens/Authentication/SignIn';
import SignUpScreen from './Screens/Authentication/SignUp';
import ChangeInfoScreen from './Screens/ChangeInfo/ChangeInfo';
import OrderHistoryScreen from './Screens/OrderHistory/OrderHistory';
import Menu from './Screens/Main/Menu';

import HeaderScreen from './Screens/Main/Shop/Header';

export default class App extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name="Main" component={MainScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
