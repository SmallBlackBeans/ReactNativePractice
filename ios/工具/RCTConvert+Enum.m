//
//  RCTConvert+Enum.m
//  RNDemoProject
//
//  Created by 韩承海 on 2017/11/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTConvert+Enum.h"

@implementation RCTConvert (Enum)

@end

@implementation RCTConvert (StatusBarAnimation)
RCT_ENUM_CONVERTER(UIStatusBarAnimation, (@{ @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),
                                             @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),
                                             @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide)}),
                   UIStatusBarAnimationNone, integerValue)


@end
