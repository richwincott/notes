const app = angular.module("notes");

app.controller("list.controller", ["$scope", "myService", ($scope, myService) => {
    let vm = this;

    vm.notes = [];
    vm.users = [];

    myService.fetchData().then((response) => {
        vm.notes = response.data.notes;
        vm.users = response.data.users;
        vm.notes.forEach((note) => {
            vm.users.forEach((user) => {
                if (note.authorid == user.id) {
                    note.author = user;
                }
            })                    
        });
    });    
}])