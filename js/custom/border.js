/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Image
} from 'react-native';

export default class RNDemoProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <View style={[styles.item, styles.center]}>

                        <Text style={styles.font}>
                            酒店
                        </Text>

                    </View>
                    <View>
                        <View>
                            <Text style={styles.font}>
                                海外酒店
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#FF0067'
    },
    item: {
        flex: 1,
        height: 80
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
        borderRightWidth: 1 / PixelRatio.get()
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    }
});

AppRegistry.registerComponent('RNDemoProject', () => RNDemoProject);