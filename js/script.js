(function(){

    var app=angular.module("pokedex",[]);
/***************************************************************/
/******************LLAMADO DE APPI POKEAPI******************/
    app.controller("pokeDex",function($scope,$http)
    {
    /*lista vacia para almacenar todos los json de los pokemon*/
    
    $scope.listapokemon=[];

    /*for para llamar todos los links de cada pokemon*/
/**************************************************************/
    for(x=1;x<=719;x++)
        {
        /*llamar link que retorna json de pokemon*/
    
        $http.get("http://pokeapi.co/api/v1/pokemon/"+x+"/").success(function(data)
            {
            $scope.pokeInfo=data;
            $scope.listapokemon.push($scope.pokeInfo);

            });
        };
/**************************************************************/
/**************************************************************/
    });
app.filter("soloUrl",function(){
        return function(item){
            //var id = (JSON.stringify(item)).slice(16,-2);
            if(item<=9)
                {
                var pokemonImage = "http://assets22.pokemon.com/assets/cms2/img/pokedex/detail/00"+item+".png";
                return pokemonImage;
                }
            else if(item<=99)
                {
                var pokemonImage = "http://assets22.pokemon.com/assets/cms2/img/pokedex/detail/0"+item+".png";
                return pokemonImage;
                }
            else
                {
                var pokemonImage = "http://assets22.pokemon.com/assets/cms2/img/pokedex/detail/"+item+".png";
                return pokemonImage;
                };
            };
        });

/******************************asincronio sincronio************/
/**************************************************************/
   /*$scope.ordenarPor = function(orden) {
      $scope.ordenSeleccionado = orden;
      if (pokemonlist.types == posion) {};
    };

document.getElementsByClassName('poison').style.background='blue';

document.getElementsByClassName('grass').style.background='green';*/
})();
