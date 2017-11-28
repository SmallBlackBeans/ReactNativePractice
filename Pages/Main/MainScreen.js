import React, {Component} from 'react';
import {View, AppState, Button} from 'react-native';
import {StackNavigator} from 'react-navigation'
class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (<Button
            title="Go to Jane's profile"
            onPress=
            { () => navigate('Profile',{name: 'Jane'}) }/>);
    }
}