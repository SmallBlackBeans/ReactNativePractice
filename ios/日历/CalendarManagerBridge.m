//
//  CalendarManagerBridge.m
//  RNDemoProject
//
//  Created by 韩承海 on 2017/11/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManagerBridge.h"

@implementation CalendarManagerBridge

@end

@interface RCT_EXTERN_MODULE(CalendarSwiftManager, NSObject)
RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end
