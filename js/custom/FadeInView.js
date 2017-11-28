import React, {Component} from 'react';
import {Animated, Easing, Text} from 'react-native';

export default class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        };
    }
    componentDidMount() {
        Animated
            .timing(this.state.fadeAnim, {
            toValue: 1,
            easing: Easing.linear,
            duration: 5000,
        })
            .start();
    }
    componentWillReceiveProps() {
        
    }
    render() {
        return (
            <Animated.View
                style={{
                ...this.props.style,
                opacity: this.state.fadeAnim
            }}>
                {this.props.children}
            </Animated.View>
        );
    }
}