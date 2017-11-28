
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    Text,
    View,
    TextInput,
    AppState,
    StyleSheet
} from 'react-native';

class PizzaTranslator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text1: '',
            haha:''
        }
    }
    render() {
        return (
            <View style={{
                padding: 10
            }}>
                <TextInput
                    style={{
                    height: 40
                }}
                    placeholder='type here to translator'
                    onChangeText={(text) => this.setState({text1:text})}/>
                <Text
                    style={{
                    padding: 10,
                    fontSize: 42
                }}>
                    {this
                        .state
                        .text1
                        .split(' ')
                        .map((word) => word && '🐂')
                        .join(' ')}
                </Text>
            </View>
        )
    }
}