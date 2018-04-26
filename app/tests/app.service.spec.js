describe('app.service', function() {
    describe('myService', function() {
        var myService;

        var hardcoded = {};

        // Before each test load the notes module
        beforeEach(angular.mock.module('notes'));

        // Before each test set our injected myService service (_myService_) to our local myService variable
        beforeEach(inject(function(_myService_) {
            myService = _myService_;
        }));

        // A simple test to verify the myService service exists
        it('should exist', function() {
            expect(myService).toBeDefined();
        });

        // A set of tests for the myService.fetchData() method
        describe('.fetchData()', function() {
            var data;

            beforeEach(function (done) {
                myService.fetchData().then(function (response) {
                    data = response.data;
                    done();
                })
            })

            // A simple test to verify the method fetchData exists
            it('should exist', function() {
                expect(myService.fetchData).toBeDefined();
            });

            it('the result of function equal the hardcoded data ', function() {
                expect(data).toEqual(hardcoded)
            })
        });
    });
});