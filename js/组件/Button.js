const React = require('react');
const ReactNative = require('react-native');
const {
    Alert,
    Button,
    View,
} = ReactNative;

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

exports.displayName = 'ButtonExample';