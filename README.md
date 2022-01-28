Cypress example project
=======================
This is an example project of using Cypress framework on StudySmarted
demo site.

Prerequisites
-------------
In order to execute tests, following components are needed:
- npm (https://www.npmjs.com/)
- Chrome (https://www.google.com/chrome/), or other compatible

Requirements
------------
Access to StudySmarted Demo site:
- https://demo.studysmarter.de/

Setup
-----
In order to prepare Cypress framework, open console in project directory,
and run following:
```
$ npm install cypress --save-dev
```

Execution
---------
Before executing tests, initial test account needs to be defined. To
achieve this, edit please edit file:
```
fixtures/registration.json
```
and update 'email' with desired, unique value.

In order to update test endpoint, please update **baseUrl** value in:
```
cypress.json
```

Once done, tests can be executed using regular Cypress framework steps,
by opening console in project directory, and running:
```
$ ./node_modules/.bin/cypress open
```

Contact
-------
In case of any questions or issues regarding this software, please contact:
szymon.andruczyk@gmail.com
