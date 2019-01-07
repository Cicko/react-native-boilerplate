/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
} from 'native-base';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        width: '90%',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10,
    },
});


class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            <Text> Show magic </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;
