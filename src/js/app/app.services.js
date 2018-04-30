const app = angular.module("notes");

app.service('myService', ["$http", "$q", ($http, $q) => { 
   let _notes = null;
   let _users = null;

   this.fetchData = () => {
        let deferred = $q.defer();
        if (_notes == null && _users == null) {
                  
            $http.get("db.json")
                .then((response) => {
                    _users = response.data.users;
                    _notes = response.data.notes;            
                    deferred.resolve(response);          
                })
                .catch((response) => {
                    deferred.reject(response);
                });
            
        }
        else {
            deferred.resolve({
                data: {
                    users: _users,
                    notes: _notes
                }
            });
        }
        return deferred.promise;
   }
}]);