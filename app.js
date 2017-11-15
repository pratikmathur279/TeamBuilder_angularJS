var app = angular.module('myApp', ['dndLists']);
app.controller('mainController', function ($scope, $http, $log) {
   //retrieve player data from JSON file
    $http.get('http://s3.amazonaws.com/dii-test/data.json').then(function (response) {
        
        //create lists for Players, Team1, Team2, Team3
        $scope.models = {
            selected: null,
            lists: {"Players" : [], "Team1": [], "Team2": [], "Team3": []}
            };
          
        angular.forEach(response.data, function (item) {
             
            first = item.first_name;
            last = item.last_name;
            playerstatus = item.status;
            $scope.models.lists.Players.push({first: item.first_name, last: item.last_name, playerstatus: item.status });
           
       });
        
   });
    
     // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
});
