import React from 'react';
import Category from './components/Category';
import { NavigationContainer } from '@react-navigation/native';
import Newsletter from './components/Newsletter';
import Home from './components/Home';
import TopNav from './components/TopNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

export default function App() {

  const Drawer = createDrawerNavigator();
  return <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Newsletter" component={Newsletter} />
                <Drawer.Screen name="Hashtags" component={TopNav} />
            </Drawer.Navigator>
         </NavigationContainer>
}