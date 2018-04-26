app.service('myService', function($http, $q) { 
   let _notes = null;
   let _users = null;

   this.fetchData = function() {
        let deferred = $q.defer();
        if (_notes == null && _users == null) {
                  
            $http.get("db.json")
                .then(function(response) {
                    _users = response.data.users;
                    _notes = response.data.notes;            
                    deferred.resolve(response);          
                })
                .catch(function(response) {
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
});