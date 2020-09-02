import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Left, Right } from 'native-base';
import React from 'react';
import { View, NativeEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';

const Layout = (navigation) => {

        return (
            <Container >
                <Header style={{ alignItems: 'center', backgroundColor: '#3a455c', height: 50 }}>
                    <Left style={{ flexDirection: 'row' }}>
                        <MaterialIcon style={{ color: 'white', marginRight: 10 }} onPress={ () => navigation.navigation.dispatch(DrawerActions.openDrawer()) } size={30} color="black" name= 'menu' />
                    </Left>
                    <Icon onPress={ () => navigation.navigation.navigate('Home') } size={20} style={{marginTop: 4, marginLeft: 100}} color="white" name= 'home' />
                    <Right style={{ flexDirection: 'row' }}>
                        <Icon onPress={ () => navigation.navigate('Index') } size={20} style={{marginTop: 4}} color="green" name= 'user' />
                    </Right>
                </Header>
                <Content >
                    <View>
                        {navigation.children}
                    </View>
                </Content>
            </Container>
        );
}

export default Layout;