var app = angular.module("notes", ['ui.router']);

app.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){
        if (!localStorage.getItem("notesuid"))
            window.location = "#/login";
    });
})