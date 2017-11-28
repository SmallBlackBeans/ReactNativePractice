import React, {Component} from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LayoutAnimator extends Component {
    state = {
        w: 100,
        h: 100
    };
    _onPress = () => {
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w + 15,
            h: this.state.h + 15
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={[
                    styles.box, {
                        width: this.state.w,
                        height: this.state.h
                    }
                ]}></View>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Press me!
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'green'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        marginTop: 15
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});