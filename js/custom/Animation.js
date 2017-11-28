import React, {Component} from 'react';
import {Animated, Easing, Text} from 'react-native';

export default class AnimationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        };
    }
    componentDidMount() {}
    //组合动画
    animationGroup() {
        Animated.sequence([ //顺序执行
            Animated.decay(position, { //滑行一段距离后停止
                velocity: { //根据用户手势设置速率
                    x: gestureState.vx,
                    y: gestureState.vy
                },
                deceleration: 0.997
            }),
            Animated.parallel([ //同时执行spring 和 旋转
                Animated.spring(position, { //返回起始点
                    toValue: {
                        x: 0,
                        y: 0
                    }
                }),
                Animated.timing(twirl, {toValue: 360}) //旋转360
            ])
        ]).start(); //执行
    }

    //合成动画值（通过加减乘除及取余运算）
    combineAnimation() {
        const a = Animated.Value(1);
        const b = Animated.divide(1, a);
        Animated
            .spring(a, {toValue: 2})
            .start();
    }
    //插值 (区间映射) interpolate({inputRange: [], outputRange: []})
    interpolateAnimation() {}
    //跟踪动态值
    trackAnimation() {
        const follower = ValueXY({x: 100, y: 200});
        const leader = ValueXY({x: 200, y: 300});
        Animated //追随对象做动画
            .spring(follower, {toValue: leader})
            .start();
        Animated.timing(opacity, {
            toValue: pan //手势在0-300对应的透明度1-0
                .x
                .interpolate({
                    inputRange: [
                        0, 300
                    ],
                    outputRange: [1, 0]
                })
        }).start();
    }

    //使用原生动画驱动
    nativeAnimation() {
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        })
    }

    render() {
        return (
        /*<Animated.View style={{
                ...this.props.style
            }}>
                {this.props.children}
            </Animated.View>
        */ 
        <Animated.ScrollView scrollEventThrottle = {
            1
        }
        onScroll = {
            Animated.event([
                {
                    nativeEvent: {
                        contentOffset: {
                            y: this.state.animatedValue
                        }
                    }
                }
            ], {useNativeDriver: true})
        } > </Animated.ScrollView>);
    }
}