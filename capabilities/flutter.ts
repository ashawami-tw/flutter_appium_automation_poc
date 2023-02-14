export const capabilities = [
  {
    // deviceName: 'Samsung Galaxy S.*',
    'appium:deviceName': 'Pixel',
    'appium:udid': 'emulator-5554',
    // deviceOrientation: 'portrait',
    'appium:platformVersion': '10.0',
    platformName: 'Android',
    'appium:app':
      '/Users/ashawami/workspace/mahindra/poc/samples/provider_shopper/build/app/outputs/flutter-apk/app-debug.apk',
    // appPackage: 'com.aral.aral',
    'appium:autoGrantPermissions': true,
    // appActivity: '.MainActivity',
    // appActivity: '.SplashActivity',
    // commandTimeout: 200,
    'appium:automationName': 'flutter',
    // appWaitActivity: '.MainActivity,.SplashActivity',
    // appWaitDuration: 60000,
  },
];
