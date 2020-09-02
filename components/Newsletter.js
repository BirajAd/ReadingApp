import React, { useState } from 'react';
import { Text, View, Button, ScrollView, NativeEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Layout from './layout';
import { SelectableText } from "@astrocoders/react-native-selectable-text";
import { DrawerActions } from '@react-navigation/native';

function Newsletter({ navigation }) {
        const[favorite, setFavorite] = useState(false);
        return (
            // style={{textAlign: 'right', marginRight: 10, marginTop: -28}}
            <Layout navigation={navigation}>
                <ScrollView style={{ marginTop: 20, marginLeft: 12 }}>
                    <Text style={{fontSize: 24, fontFamily: 'sans-serif-medium', textAlign: 'center', fontWeight: 'bold'}} >Directed Distraction</Text>
                    <View ><Icon onPress={ () => setFavorite(!favorite) } style={{textAlign: 'right', marginRight: 10, marginTop: -28}} size={30} color="yellow" name={ favorite ? 'star': 'star-o' } /></View>
                            <View>
                                <Text selectable={true} selectionColor='orange' style={{ marginTop: 10, fontSize: 18, textAlign: 'left', fontStyle: 'italic' }}>
                                    Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is an engineer, 
                                    industrial designer, technology entrepreneur and philanthropist.
                                    He is a citizen of South Africa, Canada, and the United States.
                                    He is based in the United States, where he immigrated to at age 20 and 
                                    has resided since. He is the founder, CEO and chief engineer designer 
                                    of SpaceX; early investor, CEO and product architect of Tesla, 
                                    Inc.; founder of The Boring Company; co-founder of Neuralink; and 
                                    co-founder and initial co-chairman of OpenAI. He was elected a Fellow of 
                                    the Royal Society (FRS) in 2018. In December 2016, he was ranked 21st 
                                    on the Forbes list of The World's Most Powerful People, and was ranked 
                                    joint-first on the Forbes list of the Most Innovative Leaders of 2019. 
                                    A self-made billionaire, as of July 2020 his net worth was estimated at $44.9
                                    billion and he is listed by Forbes as the 22nd-richest person in the world.
                                    He is the longest tenured CEO of any automotive manufacturer globally.
                                </Text>
                                {/* <Button title="a" onPress={() => navigation.navigate('Detail')}></Button> */}
                            </View>

                            {/* <View>
                                <SelectableText 
                                    menuItems={['Highlight', 'Love']}
                                    value="I crave star"
                                />
                            </View> */}
                </ScrollView>
            </Layout>
    );
}

export default Newsletter;

