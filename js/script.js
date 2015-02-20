function checkLength(clave){
	if(clave.length>8){
		return true;
	}else{
		return false;
	};
}
function checkUpper(clave){
	if(/[A-Z]/.test(clave)){
		return true;
	}else{
		return false;
	};
}
function checkLower(clave){
	if(/[a-z]/.test(clave)){
		return true;
	}else{
		return false;
	};
}
function checkNumber(clave){
	if(/\d/.test(clave)){
		return true;
	}else{
		return false;
	};
}
//Starting parse
Parse.initialize("o738tDIjX7Oq1jSB1PtSG6LfVeZqOgpaKH0pK3dt", "p7JfKdqPlYwWoenFcH1pnxR73YDzNaHAjz6iAwhq");
//Starting angular and setting routes

(function(){
var pokemonModule = angular.module('pokemonModule', ["ngRoute"]).config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'login.html'
	})
	.when('/paginaInicio', {
		templateUrl: 'paginaInicio.html'
	})
	.when('/FirstGeneration', {
		templateUrl: 'FirstGeneration.html'
	})
	.when('/SecondGeneration', {
		templateUrl: 'SecondGeneration.html'
	})
	.when('/ThirdGeneration', {
		templateUrl: 'ThirdGeneration.html'
	})
		.when('/FourthGeneration', {
		templateUrl: 'FourthGeneration.html'
	})
		.when('/FifthGeneration', {
		templateUrl: 'FifthGeneration.html'
	})
		.when('/SixthGeneration', {
		templateUrl: 'SixthGeneration.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

	pokemonModule.controller("pokeDex",function($scope,$http){
$scope.listPokemonFirstGeneration=[];
$scope.listPokemonSecondGeneration= [];
$scope.listPokemonThirdGeneration= [];
$scope.listPokemonFourthGeneration = [];
$scope.listPokemonFifthGeneration = [];
$scope.listPokemonSixthGeneration = [];
    /*for para llamar todos los links de cada pokemon*/
/**************************************************************/

    for(x=1;x<=151;x++)
        {
        /*llamar link que retorna json de pokemon*/
    
        $http.get("http://pokeapi.co/api/v1/pokemon/"+x+"/").success(function(data)
            {
            $scope.pokeInfo=data;
            $scope.listPokemonFirstGeneration.push($scope.pokeInfo);

            });
        };
/*---------------------------------------Second Generation------------------------------------------*/
        for(x=152;x<=251;x++)
        {
        /*llamar link que retorna json de pokemon*/
    
        $http.get("http://pokeapi.co/api/v1/pokemon/"+x+"/").success(function(data)
            {
            $scope.pokeInfo=data;
            $scope.listPokemonSecondGeneration.push($scope.pokeInfo);

            });
        };

        /***************Third Generation*****************/
        for(x=252;x<=386;x++)
        {
        /*llamar link que retorna json de pokemon*/
    
        $http.get("http://pokeapi.co/api/v1/pokemon/"+x+"/").success(function(data)
            {
            $scope.pokeInfo=data;
            $scope.listPokemonThirdGeneration.push($scope.pokeInfo);

            });
        };
/*****************************************************************************/
/****************************fourth Generation****************************************/
        for(x=387;x<=494;x++)
        {
        /*llamar link que retorna json de pokemon*/
    
        $http.get("http://pokeapi.co/api/v1/pokemon/"+x+"/").success(function(data)
            {
            $scope.pokeInfo=data;
            $scope.listPokemonFourthGeneration.push($scope.pokeInfo);

            });
        };
/***********************************************************/
/****************************Fifth Generation*********************************/
       for(x=495;x<=649;x++)
        {
        /*llamar link que retorna json de pokemon*/
    
        $http.get("http://pokeapi.co/api/v1/pokemon/"+x+"/").success(function(data)
            {
            $scope.pokeInfo=data;
            $scope.listPokemonFifthGeneration.push($scope.pokeInfo);

            });
        };

/*******************************************************************************/
/********************************sixth Generation***********************************************/
       for(x=650;x<=718;x++)
        {
        /*llamar link que retorna json de pokemon*/
    
        $http.get("http://pokeapi.co/api/v1/pokemon/"+x+"/").success(function(data)
            {
            $scope.pokeInfo=data;
            $scope.listPokemonSixthGeneration.push($scope.pokeInfo);

            });
        };

/*******************************************************************************************/
	});
/**************************************************************/

pokemonModule.filter("soloUrl", function(){
	return function(item){
		//var id = (JSON.stringify(item)).slice(16,-2);
		if (String(item).length==1){
			var pokemonImage = "http://assets2.pokemon.com/assets/cms2/img/pokedex/detail/00"+item+".png";
		}else if(String(item).length==2){
			var pokemonImage = "http://assets2.pokemon.com/assets/cms2/img/pokedex/detail/0"+item+".png";
		}else{
			var pokemonImage = "http://assets2.pokemon.com/assets/cms2/img/pokedex/detail/"+item+".png";
		};
		
		return pokemonImage;
	};
});


pokemonModule.run(['$rootScope', "$location", function($scope, $location) {
	$scope.scenario = 'Sign up';
	$scope.currentUser = Parse.User.current();

	$scope.passLength = false;
	$scope.passUpper = false;
	$scope.passLower = false;
	$scope.passNumber = false;

	$scope.signUp = function(form, newPath) {
		//check if password is longer than 8
		$scope.passLength = checkLength(form.password);
		//check if password has uppercase
		$scope.passUpper = checkUpper(form.password);
		//check if password has lowercase
		$scope.passLower = checkLower(form.password);
		//check if password has digits
		$scope.passNumber = checkNumber(form.password);
		if($scope.passLength && $scope.passUpper && $scope.passLower && $scope.passNumber){
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
document.getElementById('poison').style.background='red';
})();

