#import "MyFirstRNModule.h"
#import <UIKit/UIKit.h>

@implementation MyFirstRNModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(test)
{
  // Your implementation here
  NSLog(@"test");
}

@end
