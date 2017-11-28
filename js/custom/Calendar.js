import {NativeEventEmitter, NativeModules} from 'react-native';

var CalendarManager = NativeModules.CalendarView;
let date = Date();
// 把日期以unix时间戳形式传递
CalendarManager.addEvent3('Birthday Party', '4 Privet Drive, Surrey', date.getTime());
// 把日期以ISO-8601的字符串形式传递
CalendarManager.addEvent3('Birthday Party', '4 Privet Drive, Surrey', date.toISOString());
//多参数
CalendarManager.addEvent('Birthday Party', {
    location: '4 Privet Drive, Surrey',
    time: date.toTime(),
    description: '...'
})

//Node.js的常用习惯：第一个参数是一个错误对象（没有发生错误的时候为null），而剩下的部分是函数的返回值
CalendarManager.findEvents((error, events) => {
    if (error) {
        console.error(error);
    } else {
        this.setState({events: events});
    }
})

//Promises
async function updateEvents() {
    try {
        var events = await CalendarManager.findEvents();
        this.setState({events});
    } catch (e) {
        console.error(e);
    }
}

updateEvents();

//公用常量
console.log(CalendarManager.firstDayOfTheWeek);

//创建一个包含你的模块的NativeEventEmitter实例来订阅模块发送给js的事件
const {CalendarManager} = NativeModules;

const calendarManagerEmitter = new NativeEventEmitter(CalendarManager);

const subscription = calendarManagerEmitter.addListener('EventReminder', () => {
    console.log(reminder.name);
});

// 别忘了取消订阅，通常在componentWillUnmount生命周期方法中实现。
subscription.remove();