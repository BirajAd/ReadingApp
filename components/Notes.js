import React from 'react';
import { Text, View, ScrollView, NativeEventEmitter, StyleSheet } from 'react-native';
import Layout from './layout';
import Icon from 'react-native-vector-icons/AntDesign';

function Notes({ navigation }) {
    return (
            <ScrollView>
                <View>
                    <Text style={styles.title}>Distracted Distraction</Text>
                    <Text style={styles.detail}>
                        But mind wandering can actually be beneficial. In
                        fact, it's essential for our creativity and our
                        productivity. So how does it work? This week, you 
                        will learn about the history andneuroscience of 
                        mind wandering. Then, if like me you are a bit of 
                        a mind explorer, we will also investigate the world 
                        of mental maps, cognitive maps, mind maps, and 
                        concept maps. (so many maps!) Enjoy the read, and 
                        hit reply if you have any questions, feedback, or 
                        want to say hello!
                    </Text>
                </View>

                <View>
                    <Text style={styles.title}>Distracted Distraction</Text>
                    <Text style={{ marginLeft: 2, fontSize: 15, fontFamily: 'sans-serif-medium', color: "red"}}>
                        But mind wandering can actually be beneficial. In
                        fact, it's essential for our creativity and our
                        productivity. So how does it work? This week, you 
                        will learn about the history andneuroscience of 
                        mind wandering.
                    </Text>
                </View>
            </ScrollView>
    );
}

export default Notes;

const styles = StyleSheet.create({
    detail: {
        marginLeft: 2,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        color: "#32CD32"
    },
    title: {
        fontSize: 30,
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold'
    }
})