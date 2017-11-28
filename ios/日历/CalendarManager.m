//
//  CalendarManager.m
//  RNDemoProject
//
//  Created by 韩承海 on 2017/11/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"



@implementation CalendarManager
{
  bool hasListeners;
}
RCT_EXPORT_MODULE(CalendarView);

/**
 桥接到Javascript的方法返回值类型必须是void。
 React Native的桥接操作是异步的，所以要返回结果给Javascript，你必须通过回调或者触发事件来进行
 
 */
RCT_EXPORT_METHOD(addEvent1:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
  NSArray * arr = @[@1,@"nihao"];
}

//我们不能在桥接通道里传递Date对象
RCT_EXPORT_METHOD(addEvent2:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)
{
  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
}

//MARK: - 可以依靠自动类型转换的特性
RCT_EXPORT_METHOD(addEvent3:(NSString *)name location:(NSString *)location date:(NSDate *)date)
{
  // Date is ready to use!
}

//MARK: - 参数越来越多的时候用字典
RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
}

//MARK: - 回调函数
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *events;
  //Node.js的常用习惯：第一个参数是一个错误对象（没有发生错误的时候为null），而剩下的部分是函数的返回值
  callback(@[[NSNull null], events]);
  RCTMakeError(@"错了呀", nil, @{});
}



//MARK: - Promises
RCT_REMAP_METHOD(findEvents,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events = @[];
  NSError * error;
  if (events) {
    resolve(events);
  } else {
    reject(@"500",@"服务器错误",error);
  }
}

//MARK: - 声明当前模块必须执行的队列，对所有方法生效

/**
 注意: 在模块之间共享分发队列
 methodQueue方法会在模块被初始化的时候被执行一次，然后会被React Native的桥接机制保存下来，所以你不需要自己保存队列的引用，除非你希望在模块的其它地方使用它。但是，如果你希望在若干个模块中共享同一个队列，则需要自己保存并返回相同的队列实例；仅仅是返回相同名字的队列是不行的。
 */
- (dispatch_queue_t)methodQueue
{
  return dispatch_queue_create("com.facebook.React.AsyncLocalStorageQueue", DISPATCH_QUEUE_SERIAL);
}

//MARK: - 特别指定某个方法的执行队列
RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    // 在这里执行长时间的操作
    
    // 你可以在任何线程/队列中执行回调函数
    callback(@[]);
  });
}


//MARK: - 导出常量
/**
 原生模块可以导出一些常量，这些常量在JavaScript端随时都可以访问。用这种方法来传递一些静态数据，可以避免通过bridge进行一次来回交互
 仅仅在初始化的时候导出了一次
 */
- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday",
            @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),//枚举
            @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),
            @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide)};
}

//MARK: - 枚举
/**
用NS_ENUM定义的枚举类型必须要先扩展对应的RCTConvert方法才可以作为函数参数传递。
 */
RCT_EXPORT_METHOD(updateStatusBarAnimation:(UIStatusBarAnimation)animation
                  completion:(RCTResponseSenderBlock)callback)
{
  
}


// MARK: - 给Javascript发送事件
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}


// MARK: - 优化无监听处理的事件
// 如果你发送了一个事件却没有任何监听处理，则会因此收到一个资源警告
// 在添加第一个监听函数时触发
-(void)startObserving {
  hasListeners = YES;
  // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  hasListeners = NO;
  // Remove upstream listeners, stop unnecessary background tasks
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  if (hasListeners) { // Only send events if anyone is listening
    [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
  }
}
@end

