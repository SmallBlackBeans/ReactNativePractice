import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    Text,
    View
} from 'react-native';


class Greeting extends Component {
    render() {
        return (
            <Text> Hellow {this.props.name}!</Text>
        )
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="haha"/>
                <Greeting name="xiaoheidou"/>
                <Greeting name="帅帅的"/>
            </View>
        )
    }
}