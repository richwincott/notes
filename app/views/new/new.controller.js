app.controller("new.controller", function ($scope, $state, myService) {
    let vm = this;

    vm.notes = [];

    myService.fetchData().then(function (response) {
        vm.notes = response.data.notes;
    })

    vm.add = function(evt) {   
        if (vm.title && vm.title.length > 0 && vm.content && vm.content.length > 0) {
            evt.preventDefault();
            var note = {
                "id": vm.notes.length + 1,
                "authorid": parseInt(localStorage.getItem("notesuid")),
                "date": new Date().toISOString(),
                "title": vm.title,
                "content": vm.content,
                "comments": []
            }

            vm.notes.push(note);

            $state.go("list");
        }
    }
})