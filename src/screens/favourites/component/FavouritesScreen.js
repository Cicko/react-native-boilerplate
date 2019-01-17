/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 07.01.19
 *
 */


import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    Button,
    Text,
} from 'native-base';
import { StoreService } from '../../../lib/services';
import { buttonClick } from '../store/actions';
import { Navigation } from 'react-native-navigation';

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


class FavouritesScreen extends Component {
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
    StoreService.dispatch(buttonClick(), FavouritesScreen.getTrigger('handleClick'));
  };

    render() {
        return (
            <Container>
                <Content>
                    <Text> Profile Screen </Text>
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

export default FavouritesScreen;
