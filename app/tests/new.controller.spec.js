describe('new.controller', function() {
    var scope, newController;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        newController = function() {
            return $controller('new.controller', {
                '$scope': scope,
                'vm': this
            });
        };
    }));

    describe(".add()", function () {
        vm.notes = [];

        vm.title = "Test title";
        vm.content = "Test content";

        // test to check if the .add() method exists
        it('should exist', function() {
            expect(vm.add).toBeDefined();
        });

        it('calling the .add() method actually adds a new item to the note array', function() {
            vm.add();
            expect(vm.notes.length).toEqual(1);
        });
    });
});