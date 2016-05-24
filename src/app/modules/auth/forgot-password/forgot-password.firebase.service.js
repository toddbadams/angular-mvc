(function (Firebase) {
    'use strict';  
    
    forgotPasswordService.$inject = [];
    function forgotPasswordService() {
        // todo: move to app config
        var ref = new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com');

        function reset(email) {            
            return ref.resetPassword({
                email: email
            });
        }

        return {
            reset: reset
        };
    }

    angular.module('auth.forgot-password')
        .factory('forgotPassword', forgotPasswordService);

})(Firebase);