import React from 'react';
import Layout from './layout';
import { Text, View, Button, ScrollView, NativeEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function Detail({ navigation }) {
    return (
        <View>
            <Text>This is just a detail page</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}


export default Detail;