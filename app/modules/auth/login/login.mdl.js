(function() {
    'use strict';

    var FOLDER = 'app/modules/auth/login';

    loginController.$inject = [];
    function loginController() {
        var vm = this;

        function emptyModel() {
            return {
                email: null,
                password: null,
                rememberMe: false
            }
        }
        vm.model = emptyModel();
    }

    angular.module('auth.login', [])
        .component('login', {
            templateUrl: FOLDER + 'login.bs.html',
            controllerAs: 'vm',
            controller: loginController
        });

})();