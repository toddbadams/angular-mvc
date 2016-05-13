(function () {
    'use strict';

    var FOLDER = 'app/modules/auth/forgot-password';

    forgotPasswordController.$inject = ['forgotPassword'];
    function forgotPasswordController(forgotPassword) {
        var vm = this;

        function emptyModel() {
            return {
                email: null
            }
        }

        function successfulReset(response) {
            vm.resetting = false;
            // todo:
        }

        function failedReset(response) {
            vm.resetting = false;
            // todo:
        }

        function requestReset() {
            vm.resetting = true;
            forgotPassword.reset(vm.form.email)
                .then(successfulReset(response), failedReset(response));
        }

        vm.form = emptyModel();
        vm.resetting = false;
        vm.requestReset = requestReset;
    }

    angular.module('auth.forgot-password')
        .component('forgot-password', {
            templateUrl: FOLDER + 'forgot-password.bs.html',
            controllerAs: 'vm',
            controller: forgotPasswordController,
            $routeConfig: [
                { path: '/forgotpassword', component: 'movieOverview', name: 'ForgotPassword' }
            ]
        })
        .component('a-forgot-password', {
            template: '<a ng-link="[\'ForgotPassword\']" translate="AUTH.LINK-FORGOT-PASSWORD.TITLE">Forgot Password?</a>'
        });
})();