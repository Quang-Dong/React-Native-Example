import 'react-native-gesture-handler';
import * as React from 'react';

import {View, StatusBar} from 'react-native';

import MainScreen from './Screens/Main/Main';
import Menu from './Screens/Main/Menu/Menu';
import {wp, hp} from './lib/responsive';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

export default class App extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#34B089" />
        <NavigationContainer>
          <Drawer.Navigator
            drawerStyle={{width: wp(300)}}
            drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name="Main" component={MainScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
