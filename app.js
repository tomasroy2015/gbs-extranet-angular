/**
 * Created by Tomas on 25-Jun-16.
 */
var gbsApp = angular.module("gbsApp",["ngRoute","ui.materialize"]);
gbsApp.config(function($routeProvider,$locationProvider){

    $routeProvider.when('/',{templateUrl: 'Views/Accounts/login.html',controller: 'loginController'}).
        when('/login-en',{templateUrl: 'Views/Accounts/login-en.html',controller: 'loginController'}).
        when('/login-fr',{templateUrl: 'Views/Accounts/login-fr.html',controller: 'loginController'}).
        when('/login-ar',{templateUrl: 'Views/Accounts/login-ar.html', controller: 'loginController'}).
        when('/login-de',{templateUrl: 'Views/Accounts/login-de.html',controller: 'loginController'}).
        when('/login-ru',{ templateUrl: 'Views/Accounts/login-ru.html',controller: 'loginController'}).
        when('/login-es', {templateUrl: 'Views/Accounts/login-es.html',controller: 'loginController'}).
        when('/login-gr',{ templateUrl: 'Views/Accounts/login-gr.html', controller: 'loginController'}).
        when('/login-it',{templateUrl: 'Views/Accounts/login-it.html',controller: 'loginController'}).
        when('/login-ja',{ templateUrl: 'Views/Accounts/login-ja.html', controller: 'loginController'}).
        when('/login-zh', {templateUrl: 'Views/Accounts/login-zh.html',controller: 'loginController'}).
        when('/login-pl',{templateUrl: 'Views/Accounts/login-pl.html',controller: 'loginController'}).
        when('/login-pt',{ templateUrl: 'Views/Accounts/login-pt.html',controller: 'loginController'}).
        when('/login-nr', {templateUrl: 'Views/Accounts/login-nr.html',controller: 'loginController'}).
        when('/login-tr',{ templateUrl: 'Views/Accounts/login-tr.html',controller: 'loginController'}).
        when('/ResetPassword', {
            templateUrl: 'Views/Accounts/forgot_password.html',
            controller: 'resetPasswordController'
        }).
        when('/resetPassword-en',{
            templateUrl: 'Views/Accounts/forgot_password-en.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-fr',{
            templateUrl: 'Views/Accounts/forgot_password-fr.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-ar', {
            templateUrl: 'Views/Accounts/forgot_password-ar.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-de',{
            templateUrl: 'Views/Accounts/forgot_password-de.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-ru', {
            templateUrl: 'Views/Accounts/forgot_password-ru.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-tr', {
            templateUrl: 'Views/Accounts/forgot_password-tr.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-es',{
            templateUrl: 'Views/Accounts/forgot_password-es.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-gr', {
            templateUrl: 'Views/Accounts/forgot_password-gr.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-it',{
            templateUrl: 'Views/Accounts/forgot_password-it.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-ja', {
            templateUrl: 'Views/Accounts/forgot_password-ja.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-zh',{
            templateUrl: 'Views/Accounts/forgot_password-zh.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-pl', {
            templateUrl: 'Views/Accounts/forgot_password-pl.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-nr',{
            templateUrl: 'Views/Accounts/forgot_password-nr.html',
            controller: 'resetPasswordController'
        }).when('/resetPassword-pt',{
            templateUrl: 'Views/Accounts/forgot_password-pt.html',
            controller: 'resetPasswordController'
        });
        $locationProvider.html5Mode(true);
});
/* Application Constants
 ======================================================*/
gbsApp.constant("appSettings", {
    //API_BASE_URL: 'https://192.168.255.40/actionhtml5/api/',
    API_BASE_URL : 'http://localhost:6424/',
//        API_BASE_URL: 'https://actionhtml5.itsat.com/api/',
    //API_BASE_URL: 'https://actionclient.itsat.com/api/',
    APPLICATION_VERSION: '1.0.0'

});

/* Notification Constants
 ======================================================*/
gbsApp.constant("Notify", {
    DATA_READY: "dataFactory::dataReady",
    ATTRIBUTE_DATA_READY: "dataFactory::attributeDataReady",
    ATTRIBUTE_WITH_FILTER_DATA_READY: "dataFactory::Attribute with filter data ready",
    SERVICE_AREA_CHANGED: "dataFactory::serviceAreaChanged",
    SERVICE_AREA_QUESTION_CHANGED: "dataFactory::serviceAreaQuestionSelectionChanged",
    LOGIN_SUCCESSFUL: "accountFactory::loginSuccessful",
    LOGIN_UNSUCCESSFUL: "accountFactory::loginUnSuccessful",
    LOGOUT_SUCCESSFUL: "accountFactory::logoutSuccessful"

});
gbsApp.constant("LanguageType", {
    English: "en",
    Español:"es",
    Deutsch: "de",
    Français: "fr",
    Português:"pt",
    Ελληνικά:"gr",
    Русский:"ru",
    Italiano:"it",
    Japanese:"ja",
    Chinese:"zh",
    Türkçe:"tr",
    Polski:"pl",
    Arabian: "ar",
    Nederlands:"nr"
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
          $location.path("/login-"+currentLanguage);
            //window.location = "/login-"+currentLanguage;
        },
        RedirectToResetPassword:function(){
            $location.path("/resetPassword-"+currentLanguage);
          //  window.location = "/resetPassword-"+currentLanguage;
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
    $scope.forgotPass = function () {
        accountFactory.RedirectToResetPassword();
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

gbsApp.controller("resetPasswordController",function($scope,$location, accountFactory){
    $scope.sendEmail = function(){
        $scope.isInvalidInput= false;
        $scope.isResetBtnClicked = true;

        var isInvalid =  $scope.validateInput();
        if(isInvalid)
            return;

        var email = {
            Email   : $scope.Email
        };
        // accountFactory.SendEmail(email);
    };
    $scope.validateInput = function(){
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if($scope.Email === "" || typeof $scope.Email === "undefined") {
            $scope.isInvalidInput= true;
            $scope.isInvalidEmail = false;
            return $scope.isInvalidInput;
        }
        if (!filter.test($scope.Email)) {
            $scope.isInvalidEmail = true;
            $scope.isInvalidInput= false;
            return $scope.isInvalidEmail;
        }
    };
    $scope.goBack = function(){
        accountFactory.RedirectToLogin();
    };
});