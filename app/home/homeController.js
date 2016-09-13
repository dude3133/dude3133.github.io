(function () {
    'use strict';

    angular
        .module('App')
        .controller('homeController', homeController);

    function homeController() {
        var vm = this;
        vm.test = "test!";

        activate();

        function activate() {
        }
    }
})();