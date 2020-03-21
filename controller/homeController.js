crud.controller('homeController',['$scope',function($scope){
    $scope.title = 'Titulo';

    $scope.users = objUsuario;

    $scope.id = 0;
    $scope.nombre = '';
    $scope.apellido = '';
    $scope.email = '';


    $scope.agregarUsuario = function(){
        let user = {
            id: generateUUID(),
            nombre: $scope.nombre,
            apellido: $scope.apellido,
            email: $scope.email
        }


        $scope.users.push(user);

        $scope.id = 0;
        $scope.nombre = '';
        $scope.apellido = '';
        $scope.email = '';

        $('#registerUser').modal('hide');
        
    }


    $scope.modificarUsuario = function(user){
        $('#exampleModal').modal('show');
        $scope.userModify = user;
        console.log(user)
    }


    $scope.saveModify = function(){
        $scope.users.forEach(element => {
             if(element.id == $scope.userModify){
                 element = $scope.userModify;
             }
        });

        $('#exampleModal').modal('hide');
        console.log($scope.users)
    }

    $scope.eliminarUsuario = function(user){
        removeItemFromArr( user );
        console.log(user)
    }

    function removeItemFromArr (item ) {
        var i = $scope.users.indexOf( item );
     
        if ( i !== -1 ) {
            $scope.users.splice( i, 1 );
        }
    }


    $scope.openModal = function(modal){
        $('#' + modal).modal('show')
    }
     
    
}])