import React from 'react';
import { Text, View, ScrollView, NativeEventEmitter, StyleSheet, TextInput } from 'react-native';
import Layout from './layout';
import Icon from 'react-native-vector-icons/AntDesign';

function Settings({ navigation }) {
    const [userName, onChangeUsername] = React.useState('Email');
    const [password, onChangePassword] = React.useState('Password');

    return (
            <ScrollView  style={{ backgroundColor: 'white' }}>
                <Text style={styles.title}>Email</Text> 
                <TextInput
                    style={{ height: 40, width: 250, borderColor: 'black', borderWidth: 3, borderRadius: 9, marginLeft: 20, marginTop: 12, paddingHorizontal: 13 }}
                    onChangeText={text => onChangeUsername(text)}
                    value={userName} />

                <Text style={styles.title}>Password</Text> 
                <TextInput
                    style={{ height: 40, width: 250, borderColor: 'black', borderWidth: 3, borderRadius: 9, marginLeft: 20, marginTop: 12, paddingHorizontal: 13 }}
                    secureTextEntry={true}
                    onChangeText={text => onChangePassword(text)}
                    value={password} /> 

                <Text style={styles.subscription}>Subscriptions</Text>
            </ScrollView>
    );
}

export default Settings;

const styles = StyleSheet.create({
    hashtags: {
        fontSize: 20, 
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-light',
        marginTop: 10,
        marginLeft: 12
    },
    subscription: {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 12
    }
})