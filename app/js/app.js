'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'facebook',
    'ui.router',
    'myApp.routes',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
])
    .config(['FacebookProvider',function(FacebookProvider){
        FacebookProvider.init('229902130507040');
    }])


    .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope,$state, $stateParams) {

                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.FacebookData = {};
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }])