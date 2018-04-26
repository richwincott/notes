app.controller("note.controller", function ($scope, $state, myService) {
    let vm = this;
    
    vm.notes = [];
    vm.users = [];
    vm.note = {};

    myService.fetchData().then(function (response) {
        vm.notes = response.data.notes;
        vm.users = response.data.users;
        for (let i = 0; i < vm.notes.length; i++) {
            if (vm.notes[i].id == $state.params.id) {
                vm.note = vm.notes[i];
            }
        }
        vm.note.comments.forEach(function(comment) {
            vm.users.forEach(function(user) {
                if (comment.authorid == user.id) {
                    comment.author = user;
                }
            })                    
        });
    })

    vm.add = function(evt) {
        if (vm.comment && vm.comment.length > 0) {
            evt.preventDefault();
            var note = {
                "authorid": parseInt(localStorage.getItem("notesuid")),
                "date": new Date().toISOString(),
                "content": vm.comment,
                "comments": []
            }

            vm.note.comments.push(note);

            $state.go("note.default");
        }
    }
})