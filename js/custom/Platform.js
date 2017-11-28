import {Platform, StyleSheet} from 'react-native';
//特定平台代码
var styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'blue'
            }
        })
    }
});

var Component = Platform.select({
    ios: () => require('ComponentIOS'),
    android: () => require('ComponentAndroid'),
})();

<Component/>

//Platform.OS在iOS上会返回ios，而在Android设备或模拟器上则会返回android。
styles = StyleSheet.create({
    height: (Platform.OS === 'ios') ? 200 : 100,
})
/*检测版本 
ios 是-[UIDevice systemVersion]的返回值
android 是一个数字 表示Android的api level
*/
var version = Platform.Version;