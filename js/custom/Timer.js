import {
    Component,
} from 'react';

export default class Timer extends Component {
    componentDidMount() {
        this.timer = setTimeout(function() {
            console.log('把一个定时器挂在了this上');
        }, 500);
    }
    componentWillUnmount() {
        //卸载组件前，一定要注意清除定时器
        this.timer && clearTimeout(this.timer);
    }
}