(function () {
    'use strict';

    angular
        .module('App')
        .controller('menuController', menuController);

    function menuController() {
        var vm = this;

        vm.items =
        [
            { title: "First",url:"#/home" , active: true, disabled: false }
        ];
        vm.activeMenuItem = 'Home';
    }
})();