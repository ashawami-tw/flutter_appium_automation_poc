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

---

# PactumJS

## Installation

```
npm i
npm run api-test
```

## Dependencies to run API tests

- [Personal Access Token] - create github access token and use as `GITHUB_BEARER_TOKEN` under `.env` file

## Reporting

`report` folder will be generated after running tests which will contain `mochasome-report` and `api-json-report`

## About POC on PactumJS

- [PactumJS] is Free & OpenSource REST API Testing Tool
- Mocha framework is used to write the tests
- It supports
  - CRUD operations
  - Response Schema validation
  - Authentication
  - it uses builder style to write the tests
  - `toss()` function
    - can be used to separate API call and assertions
    - it also returns the response
  - Default headers can be set on test suit level
  - retry mechanism
- Reporting can be done
  - using `pactum-json-reporter` which shows all API calls made
  - using `mochawesome' reporting can be used for number of tests Passed/Failed
- For this POC GitHub REST API are used
  - tests
    - Create new repository
    - Delete repository
    - Get repository details
    - Change repository from public mode to private mode
  - API calls and validations are seperated
  - base test is added which does the setup for all the tests
- [PactumJS GitHub Repository] is maintained, last published 3 months ago
- New if compared with Supertest
- Test Result -<img width="1216" alt="Screenshot 2023-03-13 at 1 04 19 PM" src="https://user-images.githubusercontent.com/87519889/224644782-16222c99-2f76-473c-9df6-ce0ef1d59938.png">


## Next Steps

- Compare with other tools such as `supertest`
- Timeout handling
- Running as part of pipeline
- Decision on creating different framework for API Tests or maintaining them under single framework which contains UI + API tests
  - Impact of maintaining UI + API tests in single framework depends on following criteria
    - duplications of data
    - duplication of services such as SMS service
    - Impact while running tests on BrowserStack
    - Scalability

## Reference Links

- [PactumJS API Doc]
- [PactumJS Comparison with different tools]

[//]: #
[personal access token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
[pactumjs]: https://pactumjs.github.io/
[pactumjs api doc]: https://pactumjs.github.io/api/requests/spec.html
[pactumjs comparison with different tools]: https://dev.to/asaianudeep/api-testing-tools-in-javascript-22d8
[pactumjs github repository]: https://github.com/pactumjs/pactum
