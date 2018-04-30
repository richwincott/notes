const app = angular.module("notes", ['ui.router']);

app.run(["$rootScope", "$state", ($rootScope, $state) => {
    $rootScope.$on('$stateChangeStart', 
    (event, toState, toParams, fromState, fromParams) => {
        if (!localStorage.getItem("notesuid"))
            window.location = "#/login";
    });
}]);