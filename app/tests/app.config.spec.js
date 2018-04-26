describe('app.config', function() {
    describe('appConfig', function() {
        var appConfig;

        var expectedData = {
            "version": "1.0.0"
        }

        // Before each test load the notes module
        beforeEach(angular.mock.module('notes'));

        // Before each test set our injected myService service (_myService_) to our local myService variable
        beforeEach(inject(function(_appConfig_) {
            appConfig = _appConfig_;
        }));

        // A simple test to verify the myService service exists
        it('should exist', function() {
            expect(appConfig).toBeDefined();
        });

        // A set of tests for the myService.fetchData() method
        describe('expected data', function() {
            // A simple test to verify the method fetchData exists
            it('should be an object with 1 property called version', function() {

                expect(appConfig.version).toEqual("1.0.0");
            });
        });
    });
});