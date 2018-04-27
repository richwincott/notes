describe('app.config', function() {
    describe('appConfig', function() {
        var appConfig;

        // Before each test load the notes module
        beforeEach(angular.mock.module('notes'));

        // Before each test set our injected appConfig factory (_appConfig_) to our local appConfig variable
        beforeEach(inject(function(_appConfig_) {
            appConfig = _appConfig_;
        }));

        // A simple test to verify the appConfig factory exists
        it('should exist', function() {
            expect(appConfig).toBeDefined();
        });

        describe('expected data', function() {
            let i = 0;
            let key = "";
            
            beforeEach(function () {
                for (let _key in appConfig) {
                    i++;
                    key = _key;                  
                }
            });

            it('should be an object with 1 property', function() {
                expect(i).toEqual(1);
            });

            it('the 1 property should be named [version]', function() {
                expect(key).toEqual("version");
            });

            it('value of property version should be of string type', function() {
                expect(typeof(appConfig[key])).toEqual("string");
            });
        });
    });
});