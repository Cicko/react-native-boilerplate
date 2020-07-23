/**
 *
 * @author Rudolf Cicko
 * @email rudolfcickodev@gmail.com
 * @date 04.01.19
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    Button,
    Text,
} from 'native-base';
import { Navigation } from 'react-native-navigation';
import { StoreService } from '../../../lib/services';
import { buttonClick } from '../store/actions';

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

    static propTypes = {
        text: PropTypes.string,
    };

    /**
     * Simple constructor where also the screen is bind to the Navigation lifecycle.
     * @param props
     */
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    static getTrigger(functionName) {
        return `App/Src/Screens/Home/Component/HomeScreen.${functionName}`;
    }

    handleClick = () => {
        StoreService.dispatch(buttonClick(), HomeScreen.getTrigger('handleClick'));
    };

    render() {
        return (
            <Container>
                <Content>
                    <Text> Home Screen </Text>
                    <Text> {this.props.text} </Text>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} onPress={this.handleClick}>
                            <Text> Show magic </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;
