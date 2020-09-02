import React from 'react';
import { Text, View, ScrollView, NativeEventEmitter, StyleSheet } from 'react-native';
import Layout from './layout';
import Icon from 'react-native-vector-icons/AntDesign';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Detail from './Detail';
import Newsletter from './Newsletter';
import { NavigationContainer } from '@react-navigation/native';
import Category from './Category';
import Settings from './Settings'

function StackNav() {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator>
                <Stack.Screen name="Category" component={Category} options={{ headerShown: false }}/>
                <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.name })}/>
            </Stack.Navigator>
    );
}

export default StackNav;