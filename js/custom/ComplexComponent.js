import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class ComplexComponent extends Component {

    render() {
        var MyButton = React.createClass({
            setNativeProps(nativeProps) {
                this
                    ._root
                    .setNativeProps(nativeProps);
            },
            render() {
                return (
                    <View ref={component => this._root = component} {...this.props}>
                        <Text>{this.props.label}</Text>
                    </View>
                );
            }
        });

        var Box = React.createClass({
            render() {
                return (
                    <TouchableOpacity>
                        <MyButton label="Press me!jjjjj"></MyButton>
                    </TouchableOpacity>
                );
            }
        });

        return (
            <Box></Box>
        );
    }

}