import 'react-native-gesture-handler';
import * as React from 'react';

import {View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from './Screens/Main/Main';
import Menu from './Screens/Main/Menu/Menu';

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
