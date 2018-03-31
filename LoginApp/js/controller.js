app.controller("initctrl",($scope,$rootScope,$location)=>{
    $scope.submit= ()=>{
        console.log("username",$scope.UserName);
        console.log("password",$scope.Password);
        if($scope.UserName=='admin' && $scope.Password=='admin'){
            $rootScope.loggedIn=true;
            console.log("loggedIn value",$rootScope.loggedIn);
            $location.path('/dashBoard');
        }
        else{
            alert('wrong Id or Password');
        }
    }
})