'use strict';
import React, {Component} from 'react';
import {AppRegistry, View, Image} from 'react-native';

/* 
NSArray *imageList = @[@"http://foo.com/bar1.png",
                  @"http://foo.com/bar2.png"];

NSDictionary *props = @{@"images" : imageList};

RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                      moduleName:@"ImageBrowserApp"
                                     initialProperties:props];
*/
export default class ImageBrower extends Component {
    renderImage(imgURI) {
        return (<Image source={{
            uri: imgURI
        }}/>);
    }

    render() {
        return (
            <View>
                {this.props.images.map(this.renderImage)}
            </View>
        )
    }
}
