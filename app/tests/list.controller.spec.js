describe('list.controller', function() {
    var scope, listController;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        listController = function() {
            return $controller('list.controller', {
                '$scope': scope
            });
        };
    }));

    it('test', function() {
        // var controller = listController();
        expect(1).toEqual(1);
    });
});