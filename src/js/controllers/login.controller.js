const app = angular.module("notes");

app.controller("login.controller", ["$scope", "$rootScope", "$state", "myService", ($scope, $rootScope, $state, myService) => {
    let vm = this;
    
    vm.error = null;
    vm.users = [];

    myService.fetchData().then((response) => {
        vm.users = response.data.users;
    });

    localStorage.removeItem("notesuid");

    vm.login = (evt) => {
        if (vm.username && vm.username.length > 0 && vm.password && vm.password.length > 0) {
            evt.preventDefault();
            vm.users.forEach((user) => {
                if (user.username == vm.username) {
                    if (user.password == vm.password) {
                        // success
                        localStorage.setItem("notesuid", user.id);
                        $state.go("list");
                    }
                    else {
                        // wrong password
                        vm.error = "Wrong password";
                    }
                }
                else {
                    // unknown username
                    vm.error = "Unknown username";
                }   
            });
        }
    }
}])