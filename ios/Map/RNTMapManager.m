//
//  RNTMapManager.m
//  RNDemoProject
//
//  Created by 韩承海 on 2017/11/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import "RNTMap.h"
@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[MKMapView alloc] init];
}
// MARK: - 属性
// MARK: - 禁用捏放
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RNTMap)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

@end
