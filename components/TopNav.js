import React from 'react';
import { Text, View, ScrollView, NativeEventEmitter, StyleSheet } from 'react-native';
import Layout from './layout';
import Icon from 'react-native-vector-icons/AntDesign';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Detail from './Detail';
import Newsletter from './Newsletter';
import { NavigationContainer } from '@react-navigation/native';
import Category from './Category';
import Settings from './Settings'
import Notes from './Notes';
import StackNav from './StackNav';

function TopNav({ navigation }) {
    const Nav = createMaterialTopTabNavigator();
    return (
        <Layout navigation={navigation}>
            <Nav.Navigator
                initialRouteName="Categories"
                tabBarOptions={{
                    scrollEnabled: false,
                    showIcon: true,
                    activeTintColor: 'green',
                    indicatorStyle: { backgroundColor: 'white' },
                    labelStyle: { fontSize: 15, textTransform: 'capitalize', fontWeight:'bold' },
                    style: { justifyContent: 'center', marginTop: -10, height: 40, backgroundColor:'white', elevation:0 }
                }}> 
                <Nav.Screen name="Categories" component={StackNav}  options={{ tabBarLabel: 'Category' }} /> 
                <Nav.Screen name="Notes" component={Notes}  options={{ tabBarLabel: 'Notes' }} /> 
                <Nav.Screen name="setting" component={Settings}  options={{ tabBarLabel: 'Settings', tabBarIcon: ({ tintColor }) => (
        <Icon name="setting" size={25} color={tintColor}/> 
      ) }} />
            </Nav.Navigator>
        </Layout>
    );
}

export default TopNav;