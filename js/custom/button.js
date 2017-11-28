import React, {Component} from 'react';
import {
    View,
    Touchable,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    Text
} from 'react-native';

export default class MyButton extends Component {
    _onPressButton() {
        console.log('韩承海真帅');
    }
    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <Text>Button1</Text>
                </TouchableHighlight>
            </View>
        );
    }
}