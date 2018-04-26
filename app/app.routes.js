app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'login.controller',
            controllerAs: "vm",
            templateUrl: 'app/views/login/view.html'
        })
        .state('list', {
            url: '/',
            controller: 'list.controller',
            controllerAs: "vm",
            templateUrl: 'app/views/list/view.html'
        })       
        .state('new', {
	        url: '/new',
            controller: 'new.controller',
            controllerAs: "vm",
	        templateUrl: 'app/views/new/view.html'
	    })
        .state('note', {
            url: '/note/:id',
            controller: 'note.controller',
            controllerAs: "vm",
            templateUrl: 'app/views/note/view.html'
        })
	    .state('note.default', {
    	    url: '/',
            controller: 'note.controller',
            controllerAs: "vm",
    	    templateUrl: 'app/views/note/views/default/view.html'
    	})
    	.state('note.comment', {
    	    url: '/comment',
            controller: 'note.controller',
            controllerAs: "vm",
    	    templateUrl: 'app/views/note/views/comment/view.html'
    	})
    $locationProvider.hashPrefix('');
}]);