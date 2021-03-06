describe('app.service', function() {
    describe('myService', function() {
        var scope, myService, httpBackend;

        // Before each test load the notes module
        beforeEach(angular.mock.module('notes'));

        // Before each test set our injected myService service (_myService_) to our local myService variable
        beforeEach(inject(function($rootScope, _myService_, $httpBackend) {
            myService = _myService_;
            httpBackend = $httpBackend;
            scope = $rootScope.$new();
        }));
        
        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        // A simple test to verify the myService service exists
        it('should exist', function() {
            expect(myService).toBeDefined();
        });

        // A set of tests for the myService.fetchData() method
        describe('.fetchData()', function() {
            var data;

            /**beforeEach(function (done) {
                myService.fetchData().then(function (response) {
                    data = response.data;
                    httpBackend.flush();
                    done();
                })
            })*/

            // A simple test to verify the method fetchData exists
            it('should exist', function() {
                expect(myService.fetchData).toBeDefined();
            });

            // This test checkes if the returned value matches the expected outcome
            it('returns expected output', function() {
                httpBackend.expect('GET', 'db.json')
                    .respond({
                        "users": [
                            {
                                "id": 1,
                                "firstname": "Rich",
                                "lastname": "Wincott",
                                "username": "rich",
                                "password": "1234",
                                "avatar": "data:image/jpeg;base64,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"
                            },
                            {
                                "id": 2,
                                "firstname": "Jane",
                                "lastname": "Smith",
                                "username": "jane",
                                "password": "1234",
                                "avatar": "data:image/jpeg;base64,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"

                            },
                            {
                                "id": 3,
                                "firstname": "Tom",
                                "lastname": "Price",
                                "username": "tom",
                                "password": "1234",
                                "avatar": "data:image/jpeg;base64,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"
                            },
                            {
                                "id": 4,
                                "firstname": "Sam",
                                "lastname": "Cooper",
                                "username": "sam",
                                "password": "1234",
                                "avatar": "data:image/jpeg;base64,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"
                            }
                        ],
                        "notes": [
                            {
                                "id": 1,
                                "authorid": 1,
                                "date": "2018-04-25T11:54:35.075Z",
                                "title": "This is a note",
                                "content": "This is the content",
                                "comments": [
                                    {
                                        "authorid": 3,
                                        "date": "2018-04-25T13:04:23.075Z",
                                        "content": "This is the comment content"
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "authorid": 2,
                                "date": "2018-04-24T15:12:35.075Z",
                                "title": "And another...",
                                "content": "The content",
                                "comments": []
                            },
                            {
                                "id": 3,
                                "authorid": 4,
                                "date": "2018-04-22T08:34:35.075Z",
                                "title": "This is another note",
                                "content": "Here is more content",
                                "comments": []
                            }
                        ]
                    });

                scope.$apply(function() {
                    // the call below should return instantly since the data is mocked?
                    myService.fetchData().then(function (response) {
                        data = response.data;
                    })
                });

                httpBackend.flush();

                let keys = [];
                for (let key in data) {
                    keys.push(key);
                }
                expect(keys).toEqual(["users", "notes"])
            })
        });
    });
});