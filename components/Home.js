import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, RCTNativeAppEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Layout from './layout';

const Home = ({navigation}) => {
        const[favorite, setFavorite] = useState(false);
        const[favorite1, setFavorite1] = useState(false);
        const[favorite2, setFavorite2] = useState(false);
        const[sort_asc, setSort_asc] = useState(true);
        return (
            <Layout navigation={navigation}>
                    <ScrollView style={{marginLeft: 1, marginRight: 3 }}>
                        <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height:30, width: 150, fontSize: 60 }}><Text style={{ color: 'brown'}}>Unread only</Text></View>
                            <View style={{ height:30, width: 130, fontSize: 60 }}><Text style={{ color: 'brown'}}>Starred</Text></View>
                            <View style={{ height:30, width: 140, fontSize: 60 }}><Text onPress={ () => setSort_asc(!sort_asc) } style={{ color: 'green'}}>Latest <Icon style={{ marginLeft: 25 }} size={14} color="black" name={ sort_asc ? 'sort-amount-asc': 'sort-amount-desc' } /></Text></View>
                        </View> 

                        <View style={{ textAlign: 'justify' }}> 
                            <Text style={styles.hugeTitle} onPress={ () => navigation.navigate('Newsletter') }>A Big Title </Text>
                            <View ><Icon onPress={ () => setFavorite(!favorite) } style={ styles.icons } size={30} color="yellow" name={ favorite ? 'star': 'star-o' } /></View>
                            <Text style={styles.normal}>
                                Signature. Elon Reeve Musk is an engineer, industrial designer, technology entrepreneur and philanthropist.
                                He is a citizen of South Africa, Canada, and the United States. He is based in the United States, where he immigrated to at age 20 and has 
                                resided since then.
                            </Text>

                            <Text style={styles.hugeTitle} onPress={ () => navigation.navigate('Newsletter')}>A Small Title</Text> 
                            <View ><Icon onPress={ () => setFavorite1(!favorite1) } style={ styles.icons } size={30} color="yellow" name={ favorite1 ? 'star': 'star-o' } /></View>
                            <Text style={styles.normal}>
                            Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.
                            The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through
                            its acquisition of SolarCity, solar panel and solar roof tile manufacturing.
                            </Text>

                            <Text style={styles.hugeTitle}>A Huge Title</Text>
                            {/* <View ><Icon onPress={ () => this.setState({ favorite2: !this.state.favorite2 }) } style={ styles.icons } size={30} color="yellow" name={ this.state.favorite2 ? 'star': 'star-o' } /></View> */}
                            <Text style={styles.normal}>
                                    Space Exploration Technologies Corp., trading as SpaceX, is an American aerospace manufacturer and space transportation services company
                                    headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to 
                                    enable the colonization of Mars.
                            </Text>
                        </View>
                    </ScrollView>
            </Layout>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50
    },
    title: {
    marginTop: 2,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
    },
    hugeTitle: {
    marginTop: 2,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "left",
    fontSize: 40,
    fontWeight: "bold"
    }, 
    normal: {
    paddingVertical: 8,
    marginLeft: 2,
    marginRight: 9,
    padding: 2,
    color: "green",
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: 'center'
    },
    icons: {
    width: 30,
    height: 30, 
    marginLeft: 310, 
    marginTop: -45
    }
})