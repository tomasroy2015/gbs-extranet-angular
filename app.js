/**
 * Created by Tomas on 25-Jun-16.
 */
var gbsApp = angular.module("gbsApp",["ngRoute","ui.materialize"]);
gbsApp.config(function($routeProvider){
    $routeProvider.when('/',{templateUrl: 'View/Accounts/login.html',controller: 'loginController'}).
        when('/login-en',{templateUrl: 'Views/Accounts/login-en.html',controller: 'loginController'}).
        when('/login-fr',{templateUrl: 'Views/Accounts/login-fr.html',controller: 'loginController'}).
        when('/login-ar',{templateUrl: 'Views/Accounts/login-ar.html', controller: 'loginController'}).
        when('/login-de',{templateUrl: 'Views/Accounts/login-de.html',controller: 'loginController'}).
        when('/login-ru',{
            templateUrl: 'Views/Accounts/login-ru.html',controller: 'loginController'
        }).
        when('/login-es', {
            templateUrl: 'Views/Accounts/login-es.html',
            controller: 'loginController'
        }).
        when('/login-gr',{
            templateUrl: 'Views/Accounts/login-gr.html',
            controller: 'loginController'
        }).
        when('/login-it',{
            templateUrl: 'Views/Accounts/login-it.html',
            controller: 'loginController'
        }).
        when('/login-ja',{
            templateUrl: 'Views/Accounts/login-ja.html',
            controller: 'loginController'
        }).
        when('/login-zh', {
            templateUrl: 'Views/Accounts/login-zh.html',
            controller: 'loginController'
        }).
        when('/login-pl',{
            templateUrl: 'Views/Accounts/login-pl.html',
            controller: 'loginController'
        }).
        when('/login-pt',{
            templateUrl: 'Views/Accounts/login-pt.html',
            controller: 'loginController'
        }).
        when('/login-nr', {
            templateUrl: 'Views/Accounts/login-nr.html',
            controller: 'loginController'
        }).
        when('/login-tr',{
            templateUrl: 'Views/Accounts/login-tr.html',
            controller: 'loginController'
        });
});

gbsApp.factory("accountFactory", function($location) {
    var userData = null;
    var currentLanguage = "en";
    var allCultures = [{"code":"en","name":"English"},
        {"code":"es","name":"Español"},
        {"code":"de","name":"Deutsch"},
        {"code":"fr","name":"Français"},
        {"code":"pt","name":"Português"},
        {"code":"gr","name":"Ελληνικά"},
        {"code":"ru","name":"Русский"},
        {"code":"it","name":"Italiano"},
        {"code":"ja","name":"日本語"},
        {"code":"zh","name":"简体中文"},
        {"code":"tr","name":"Türkçe"},
        {"code":"ar","name":"العربية"},
        {"code":"pl","name":"Polski"},
        {"code":"nr","name":"Nederlands"}];

    return{
        GetLoginData:function(user){
            //accountsService.login(user,onGetLoginData,loginError);
        },
        LogOut:function(user){
           // accountsService.logout(user,onLogout,logoutError);
        },
        UserData:function(){
            return userData;
        },
        CurrentLanguage:function(){
            return currentLanguage;
        },
        SendEmail:function(email){
           // accountsService.resetPassword(email,onResetPassword,resetPasswordError);
        },
        SetUserData:function(val){ /*For By pass Login page to set the user */
            userData = val;
        },
        AllCultures:function(){
            return allCultures;
        },
        SetCurrentLanguage:function(val){
            currentLanguage = val;
        },
        RedirectToLogin:function(){
            window.location = "#/login-"+currentLanguage;
        },
        RedirectToResetPassword:function(){
            window.location = "#/resetPassword-"+currentLanguage;
        }
    };
});

gbsApp.controller("loginController", function($scope,$location, accountFactory) {
    $scope.selectLanguage = "en";
    $scope.selectLanguages=[];
    $scope.selectLanguages = accountFactory.AllCultures();
    $scope.initializeController = function () {
        $scope.Email = "";
        $scope.Password = "";
        var language = accountFactory.CurrentLanguage();
        if(language !== null && !angular.isUndefined(language)){
            $scope.selectLanguage = accountFactory.CurrentLanguage();
        }
    };
    $scope.languageChanged = function(value){
        accountFactory.SetCurrentLanguage(value);
        accountFactory.RedirectToLogin();
    };
    $scope.loginOK = function () {
        $rootScope.IsloggedIn = false;
        $scope.isInvalidInput = false;

        var isInvalid =  $scope.validateInput();
        if(isInvalid)
            return;

        $rootScope.isNeedToShowLoading = true;
        $rootScope.loadTitle = "Log in";
        var user = $scope.createLoginCredentials();
        accountFactory.GetLoginData(user);
    };
});