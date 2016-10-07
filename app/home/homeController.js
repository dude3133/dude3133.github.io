(function () {
    'use strict';

    angular
        .module('App')
        .controller('homeController', homeController);

    homeController.$inject = ['menuService'];

    function homeController(menuService) {
        var vm = this;

        activate();

        function activate() {
            //menuService.setMenu([{ title: "First from home", url: "#/home", active: true, disabled: false }]);
        }
    }
})();