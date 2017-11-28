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
    ScrollView,
    AppState,
    StyleSheet
} from 'react-native';
export default class IScrolledDownAndWhatHappenedNextShockedMe extends React.Component {
    render() {
        return (
            //ScrollView适合用来显示数量不多的滚动元素
            <ScrollView>
                <Text style={{
                    fontSize: 96
                }}>Scroll me plz</Text>
                <Image source={require('../../res/jxlx_guide1.jpg')}/>
                <Image source={require('../../res/jxlx_guide2.jpg')}/>
                <Image source={require('../../res/jxlx_guide3.jpg')}/>
                <Image source={require('../../res/jxlx_guide4.jpg')}/>
                <Image source={require('../../res/jxlx_guide5.jpg')}/>
                <Text style={{
                    fontSize: 96
                }}>If you like</Text>
                <Image source={require('../../res/jxlx_guide1.jpg')}/>
                <Image source={require('../../res/jxlx_guide2.jpg')}/>
                <Image source={require('../../res/jxlx_guide3.jpg')}/>
                <Image source={require('../../res/jxlx_guide4.jpg')}/>
                <Image source={require('../../res/jxlx_guide5.jpg')}/>
                 <Text style={{
                    fontSize: 80
                }}>React Native</Text>
            </ScrollView>
        );
    }
}
