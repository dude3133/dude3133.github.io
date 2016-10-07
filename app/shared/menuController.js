(function () {
    'use strict';

    angular
        .module('App')
        .controller('menuController', menuController);

    menuController.$inject = ['menuService'];

    function menuController(menuService) {
        var vm = this;

        vm.items = menuService.getMenu();
        menuService.setMenuFunction = itemChanged;
        //[
        //    { title: "First",url:"#/home" , active: true, disabled: false }
        //];
        vm.activeMenuItem = 'Home';

        function itemChanged(item) {
            vm.items = item
        }
    }
})();