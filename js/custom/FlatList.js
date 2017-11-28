import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    Text,
    View,
    FlatList,
    AppState,
    StyleSheet
} from 'react-native';
export default class FlatListBasics extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data
                    ={[
                    {
                        key: '#f0f8ff'
                    }, {
                        key: '#faebd7'
                    }, {
                        key: '#00ffff'
                    }, {
                        key: '#7fffd4'
                    }
                ]}
                    renderItem={({item}) => <View style={{
                    flex: 1
                }}>
                    <Text style={styles.item}>
                        {item.key}
                    </Text>
                </View>}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})