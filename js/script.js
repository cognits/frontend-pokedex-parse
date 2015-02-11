//Starting parse
Parse.initialize("o738tDIjX7Oq1jSB1PtSG6LfVeZqOgpaKH0pK3dt", "p7JfKdqPlYwWoenFcH1pnxR73YDzNaHAjz6iAwhq");
//Starting angular and setting routes
var pokemonModule = angular.module('pokemonModule', ["ngRoute"]).config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'login.html'
  })
  .when('/profile', {
    templateUrl: 'profile.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(['$rootScope', "$location", function($scope, $location) {
  $scope.scenario = 'Sign up';
  $scope.currentUser = Parse.User.current();
  $scope.signUp = function(form, newPath) {
    var user = new Parse.User();
    user.set("email", form.email);
    user.set("username", form.username);
    user.set("password", form.password);
    
    user.signUp(null, {
      success: function(user) {
        $scope.currentUser = user;
        $location.path(newPath);
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });
  };
  
  $scope.logIn = function(form, newPath) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $scope.currentUser = user;
        $location.path(newPath);
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };
  
  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;
    $location.path("/inicio");
  };
}]);


