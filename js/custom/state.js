/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Image, Text, View} from 'react-native';

class Blink extends Component {
    /**需要在constructor中初始化state（
    译注：这是ES6的写法，
    早期的很多ES5的例子使用的是getInitialState方法来初始化state，这一做法会逐渐被淘汰）
    */
    constructor(props) {
        super(props)
        this.state = {
            showText: true
        }
        setInterval(() => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                }
            })
        }, 1000);
    }

    render() {
        let display = this.state.showText
            ? this.props.text
            : ' ';
        return (
            <Text>{display}</Text>
        )
    }

}