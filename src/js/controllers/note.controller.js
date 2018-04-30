const app = angular.module("notes");

app.controller("note.controller", ["$scope", "$state", "myService", ($scope, $state, myService) => {
    let vm = this;
    
    vm.notes = [];
    vm.users = [];
    vm.note = {};

    myService.fetchData().then((response) => {
        vm.notes = response.data.notes;
        vm.users = response.data.users;
        for (let i = 0; i < vm.notes.length; i++) {
            if (vm.notes[i].id == $state.params.id) {
                vm.note = vm.notes[i];
            }
        }
        vm.note.comments.forEach((comment) => {
            vm.users.forEach((user) => {
                if (comment.authorid == user.id) {
                    comment.author = user;
                }
            })                    
        });
    })

    vm.add = (evt) => {
        if (vm.comment && vm.comment.length > 0) {
            evt.preventDefault();
            const note = {
                "authorid": parseInt(localStorage.getItem("notesuid")),
                "date": new Date().toISOString(),
                "content": vm.comment,
                "comments": []
            }

            vm.note.comments.push(note);

            $state.go("note.default");
        }
    }
}])