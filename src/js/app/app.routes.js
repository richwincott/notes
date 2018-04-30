const app = angular.module("notes");

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'login.controller',
            controllerAs: "vm",
            templateUrl: 'partials/login/login.html'
        })
        .state('list', {
            url: '/',
            controller: 'list.controller',
            controllerAs: "vm",
            templateUrl: 'partials/list/list.html'
        })       
        .state('new', {
	        url: '/new',
            controller: 'new.controller',
            controllerAs: "vm",
	        templateUrl: 'partials/new/new.html'
	    })
        .state('note', {
            url: '/note/:id',
            controller: 'note.controller',
            controllerAs: "vm",
            templateUrl: 'partials/note/note.html'
        })
	    .state('note.default', {
    	    url: '/',
            controller: 'note.controller',
            controllerAs: "vm",
    	    templateUrl: 'partials/note/partials/default/default.html'
    	})
    	.state('note.comment', {
    	    url: '/comment',
            controller: 'note.controller',
            controllerAs: "vm",
    	    templateUrl: 'partials/note/partials/comment/comment.html'
    	})
    $locationProvider.hashPrefix('');
}]);