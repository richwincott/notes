app.controller("list.controller", function ($scope, myService) {
    let vm = this;

    vm.notes = [];
    vm.users = [];

    myService.fetchData().then(function (response) {
        vm.notes = response.data.notes;
        vm.users = response.data.users;
        vm.notes.forEach(function(note) {
            vm.users.forEach(function(user) {
                if (note.authorid == user.id) {
                    note.author = user;
                }
            })                    
        });
    });    
})