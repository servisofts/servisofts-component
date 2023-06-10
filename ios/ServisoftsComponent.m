#import "ServisoftsComponent.h"
#import <UIKit/UIKit.h>

@implementation ServisoftsComponent
{

}
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
 

//export the name of the native module as 'Device' since no explicit name is mentioned
RCT_EXPORT_MODULE(ServisoftsComponent);

- (NSArray<NSString *> *)supportedEvents
{
  return @[];
}

- (NSDictionary *)constantsToExport
{
  return @{ @"listOfPermissions": @[] };
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;  // only do this if your module exports constants or calls UIKit
}

RCT_EXPORT_METHOD(test:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
  resolve(@(true));
}

RCT_EXPORT_METHOD(setSoftInputMode:(NSString *)data
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    NSString *errorMessage = @"[ERROR][setSoftInputMode] Not support platform IOS";
    reject(@"error_code", errorMessage, nil);
}
@end
