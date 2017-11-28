import React, { Component, PropTypes } from 'react';
import {NavgatorIOS, Text, TouchableHignlight, View} from 'react-native';

class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string,isRequired,
        navigator: PropTypes.object.isRequired,
    }
    constructor(props, context) {
        super(props, context);
        this._onFprword = this._onFprword.bind(this);
    }

    _onFprword() {
        this.props.navigator.push({
            title: 'Scene' + nextIndex,
        });
    }

    render() {
        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>
                <TouchableHignlight onPress={this._onFprword}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHignlight>
            </View>
        )
    }
}