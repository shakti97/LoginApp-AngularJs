var app=angular.module("myapp",['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : '../Route/HomePage.html'
    })
    .when('/dashBoard',{
        resolve :{
            "check": function($location,$rootScope){
                console.log("hey I m in the when of dashboard")
                if(!$rootScope.loggedIn){
                    console.log("hey the condition not met")
                    $location.path('/')
                }
            }
        },
        templateUrl : '../Route/dashboard.html'
        
    })
    .otherwise({
        redirectTo : '/'
    })
})