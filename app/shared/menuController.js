(function () {
    'use strict';

    angular
        .module('App')
        .controller('menuController', menuController);

    function menuController() {
        var vm = this;

        vm.items =
        [
            { title: "First", active: true, disabled: false }
        ]
        activate();

        function activate() {
        }
    }
})();