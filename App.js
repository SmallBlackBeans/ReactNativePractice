/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import IScrolledDownAndWhatHappenedNextShockedMe from './js/custom/ScrollView'
import SectionListBasics from './js/custom/SectionList'
import FlatListBasics from './js/custom/FlatList'
import Bannas from './js/custom/Image'
import MyButton from './js/custom/button'
import FadeInView from './js/custom/FadeInView'
import LayoutAnimator from './js/custom/LayoutAnimation'
import ComplexComponent from './js/custom/ComplexComponent'
const instructions = Platform.select({
  ios: '我是iOS\n' ,
  android: '我是Android\n',
});

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        times: 0
      };
    }

    ComponentWillMount() {
      console.log('ComponentWillMount')
    }

    ComponentDidMount() {
      console.log('ComponentDidMount')
    }

    shouldComponentUpdate() {
      console.log('shouldComponentUpdate')
      return true
    }

    ComponentWillUpdate() {
      console.log('ComponentWillUpdate')
    }

    ComponentDidUpdate() {
      console.log('ComponentDidUpdate')
    }
    render() {
      console.log('render')
        if (!__DEV__) { //只有debug打印
            global.console = {
                info: () => {},
                log: () => {},
                warn: () => {},
                debug: () => {},
                error: () => {}
            };
        }
        console.warn('我是一个⚠️');
        console.disableYellowBox = true;
        //字符串模板
        var who = 'hanxiaocu';
        var obj = `hellow ${who}`;

        return (
        /* <FadeInView
                style={{
                width: 250,
                height: 50,
                backgroundColor: 'powderblue',
            }}>
                <Text
                    style={{
                    fontSize: 28,
                    color: '#fff',
                    textAlign: 'center',
                    margin: 10
                }}>Fading in</Text>
            </FadeInView> */
        //<LayoutAnimator > </LayoutAnimator>
        //<ComplexComponent > </ComplexComponent>

    Text>li*4

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
