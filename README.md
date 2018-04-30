# notes
version 2.0

## Description
An app for storing and dicussing notes.

Written in `AngularJS`.

Uses `Karma` and `Jasmine` for testing.

And `Babel` to compile ES6 code.

Login system does not use a back-end at present. Authentication checks are done with basic string matching. Keeping track of logged in user is done using HTML5LocalStorage.

Since the app has no back-end or database notes are only save per page lifecyle. Refreshing you browser will reset back to the template data.

## Running the app
The app uses Gulp, so to run the development server..
```
gulp start
```
and to create production build
```
gulp build
```
The app is also hosted on my personal website, link below.

[http://www.richardwincott.co.uk/notes](http://www.richardwincott.co.uk/notes)

## Testing
Install Karma-cli. (Optional)
```
npm install karma-cli
```

In a termainal window run the command below to execute the tests.
```
karma start
```
or if you don't have Karma-cli installed run from node_modules.
```
./node_modules/karma/bin/karma start
```
