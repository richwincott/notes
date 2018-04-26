# notes

## Description
An app for storing and dicussing notes.

Written in `AngularJS`.

Uses `Karma` and `Jasmine` for testing.

## Prerequisites
### App
A web server of your choice to host the html files.

### Tests
`Node` and `NPM` to fetch dependancies and run Karma.

`Karma-cli` to run Karma in a terminal window easily. (Optional)

## Installing
### App
Place files on a webserver in a dir named 'notes'.

### Tests
Open up a terminal window.

Install node and npm if not already done so.

Run npm install to fetch the dependancies.
```
npm install
```
Install Karma-cli. (Optional)
```
npm install karma-cli
```

## Running
### App
Open your favorite browser and point it to the location where you installed the app.
```
e.g. http://localhost/notes
```
App is also hosted on my personal website, link below.
[http://www.richardwincott.co.uk/notes](http://www.richardwincott.co.uk/notes)


### Tests
In a termainal window run the command below to execute the tests.
```
karma start
```
or if you don't have Karma-cli installed run from node_modules.
```
./node_modules/karma/bin/karma start
```
