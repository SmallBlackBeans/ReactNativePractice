import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Image,
    ImageBackground
} from 'react-native';

export default class Bannas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Image
                    source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
                    method: 'GET',
                    headers: {
                        Pragma: 'no-cache'
                    },
                    body: 'Your Body goes here',
                    cache: 'force-cache'
                }}
                    style={{
                    width: 400,
                    height: 400
                }}/>
                <Image
                    source={pic}
                    style={{
                    width: 193,
                    height: 110
                }}/>
            </View >
        );
    }
}