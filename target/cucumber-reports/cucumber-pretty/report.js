$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/addCustomer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Created by nththuy at 1/3/20"
    }
  ],
  "line": 2,
  "name": "Add Customer",
  "description": "In order to store user information, I want to have the adding customer feature so that I can add customer easily",
  "id": "add-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as \u003cfullname\u003e successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 13,
      "id": "add-customer;add-customer-sucessfully;;1"
    },
    {
      "cells": [
        "thuy",
        "nguyen",
        "55000",
        "thuy nguyen"
      ],
      "line": 14,
      "id": "add-customer;add-customer-sucessfully;;2"
    },
    {
      "cells": [
        "hoa",
        "hong",
        "55000",
        "hoa hong"
      ],
      "line": 15,
      "id": "add-customer;add-customer-sucessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6428225600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as thuy, last name as nguyen, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as thuy nguyen successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 61
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3385454700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 52826600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thuy nguyen",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 3432958000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #userSelect\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027PNVD039\u0027, ip: \u002710.211.1.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 71.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191202093317, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 6472, moz:profile: C:\\Windows\\Temp\\rust_mozpro..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: df27ab22-1ea7-4c97-908f-4ea97ff06dca\n*** Element info: {Using\u003did, value\u003duserSelect}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.findElements(Unknown Source)\r\n\tat pages.OpenAccountPage.checkUserInformation(OpenAccountPage.java:37)\r\n\tat tests.AddCustomerTest.verifyCustomerAddSuccessfully(AddCustomerTest.java:32)\r\n\tat ✽.Then I verify that system is already added customer as thuy nguyen successfully(src/main/java/features/addCustomer.feature:11)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3029247400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as hoa, last name as hong, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as hoa hong successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hoa",
      "offset": 21
    },
    {
      "val": "hong",
      "offset": 39
    },
    {
      "val": "55000",
      "offset": 58
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3220608600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 44885300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hoa hong",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 3200173400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as \u003cfullname\u003e unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 22,
      "id": "add-customer;add-customer-unsucessfully;;1"
    },
    {
      "cells": [
        "thuy",
        "null",
        "55000",
        "thuy"
      ],
      "line": 23,
      "id": "add-customer;add-customer-unsucessfully;;2"
    },
    {
      "cells": [
        "null",
        "nguyen",
        "55000",
        "nguyen"
      ],
      "line": 24,
      "id": "add-customer;add-customer-unsucessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3033083800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as thuy, last name as null, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as thuy unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 21
    },
    {
      "val": "null",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 59
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3188183400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 231982400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 3165965500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3036887500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as null, last name as nguyen, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as nguyen unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 61
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3142528800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 238879900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nguyen",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 3142472300,
  "status": "passed"
});
});