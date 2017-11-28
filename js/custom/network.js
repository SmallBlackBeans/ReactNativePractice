import React, {Component} from 'react'
import {AppState, View} from 'react-native'

export default class NetFetchBasics extends Component {

    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((responseJson) => {
            return responseJson.movies;
        }).catch((error) => {
            console.error(error);
        });
    }
    //ES7标准
    async getMoviesFromApi() {
        try {
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let responseJson = response.json();
            return responseJson.movies;
        } catch (error) {
            console.error(error);
        }
    }

    //XMLHttpRequest 不包含jQuery
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        if (request.readyState != 4) {
            return;
        }
        if (request.readyState == 200) {
            console.log('success', request.responseText);
        } else {
            console.warn('error');
        }
    }
    request.open('GET', 'https://www.baidu.com');
    request.send();

    //WebSocket 支持
    var ws = new WebSocket('ws://host.com/path');
    ws.onopen = () => {
        //打开一个链接
        ws.send('something'); //发送一些消息
    };
    ws.onmessage = (m) => {
        //接受一个消息
        console.log(m.data);
    };
    ws.onerror = (e) => {
        console.error(e.message);
    };

    ws.onclose = (e) => {
        console.info(e.code, e.reason);
    };
}