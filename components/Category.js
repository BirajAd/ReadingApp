import React from 'react';
import { Text, View, ScrollView, NativeEventEmitter, StyleSheet } from 'react-native';
import Layout from './layout';
import Icon from 'react-native-vector-icons/AntDesign';

function Category({ navigation }) {
    return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                    {/* <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View ><Text style={styles.title}>Notes</Text></View>
                        <View ><Text style={styles.title}>Categories</Text></View>
                        <View><Icon name="setting" size={30} color='black'/></View>
                    </View> */}
                <View style={{ marginLeft: 15, marginTop: 15}}>
                    <Text style={styles.hashtags} onPress={() => navigation.navigate('Detail', { name: '#DataScience' })}>#DataScience</Text>
                    <Text onPress={() => navigation.navigate('Detail', { name: '#Mind-Mapping' })} style={styles.hashtags}>#Mind-Mapping</Text>
                </View>
            </ScrollView>
    );
}

export default Category;

const styles = StyleSheet.create({
    hashtags: {
        fontSize: 20, 
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 15,
        color: '#32CD32'
    }
})