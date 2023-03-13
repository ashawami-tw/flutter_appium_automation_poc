# Flutter Appium

## Installation

- For Appium Setup
  - Node.js
  - Appium
  - Android Studio
  - Xcode
- For Project Setup
  - `npm i`
  - under `capabilities` add device specifications
  - Run tests for android - `npm run android-test`
  - Run tests for ios - `npm run ios-test`
  - Run tests for appium-flutter-driver - `npm run flutter-test`

## Reporting

`report` folder will be generated after running tests which will contain `allure-results` and `allure-report`

## About POC on Appium using Flutter app

- [Sample Flutter APP] is used to write this tests
- tests are written using appium-flutter-driver under `flutter` folder
- tests are written using UiAutomator2/XCUITest under `test` folder
- reporting is done using allure-report
- tests using appium-flutter-driver

|                                               Pros                                               |                                             Cons                                              |
| :----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: |
| Locators for flutter components are same as locators used in dart language e.g. bySemanticsLabel |             Need to switch between native and flutter driver using Native context             |
|                           Test suite can be run on any apk/ipa version                           |           Appium’s Flutter driver does not support apps built in the release mode.            |
|           NPM package is available for appium flutter driver and appium flutter finder           |                           Does not support finding list of elements                           |
|                 Runs tests faster if compared with UiAutomator2/XCUITest drivers                 |      [Flutter Pre-requisite] need to be updated in code base and then build the apk/ipa       |
|                                                -                                                 | Cannot inspect flutter widget using appium inspector. Need to inspect using flutter inspector |
|                                                -                                                 |                Functionalities such as scroll, swipe etc is tough to implement                |

- tests using UiAutomator2 driver

|                              Pros                              |                                                          Cons                                                           |
| :------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| Locators are same as used for any other apk e.g. id, class etc |              Locator strategy for flutter widget, if accessibility id is not present have to rely on xpath              |
|               Can automate native functionality                |                  have to maintain separate locators for iOS and Android if accessibility id is missing                  |
|            Test suite can be run on any apk version            |                      The way accessibility id, text are reflected on UiAutomator is not consistent                      |
|                    Large community support                     | if from [Flutter Pre-requisite] `enableFlutterDriverExtension()` added in `main.dart` some of the functionality differs |
|            No pre-requisite needed to build the app            |                                                                                                                         |

- tests using XCUITest driver

|                                        Pros                                        |                                                                Cons                                                                 |
| :--------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| Locators are same as used for any other apk e.g. accessibility id, class chain etc |                 Locator strategy for flutter widget, if accessibility id is not present have to rely on class chain                 |
|                         Can automate native functionality                          |                        have to maintain separate locators for iOS and Android if accessibility id is missing                        |
|                      Test suite can be run on any ipa version                      |                   The way accessibility id, visibility of element are reflected on UiAutomator is not consistent                    |
|                              Large community support                               | if from [Flutter Pre-requisite] `enableFlutterDriverExtension()` added in `main.dart` keyboard does not open while sending the text |
|                      No pre-requisite needed to build the app                      |                                                                  -                                                                  |

## Next Steps

- Run tests using browserstack
- Run tests in parallel

## Reference Links

- [Appium Flutter Driver GitHub]
- [How can we automate native + flutter applications]

[//]: #
[sample flutter app]: https://github.com/flutter/samples/tree/main/provider_shopper
[flutter pre-requisite]: https://www.browserstack.com/docs/app-automate/appium/test-hybrid-apps/test-flutter-apps#preprocess-flutter-app-for-testing
[appium flutter driver github]: https://github.com/appium-userland/appium-flutter-driver
[how can we automate native + flutter applications]: https://medium.com/@shoban.manohar/challenges-testing-flutter-mobile-applications-1da67057d72d
