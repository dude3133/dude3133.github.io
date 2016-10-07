(function () {
    'use strict';

    angular
        .module('App')
        .service('menuService', menuService);

    function menuService() {
        var serv = this;
        var menu = [
        { title: "Home", url: "#/home", active: true, disabled: false },
        { title: "HTML course", url: "#/courses/html/1/html1", active: false, disabled: false },
        { title: "Git course", url: "", active: false, disabled: true }];
        serv.setMenuFunction = null;
        serv.setMenu = setMenu;
        serv.getMenu = getMenu;
        return serv;

        function setMenu(items) {
            if (serv.setMenuFunction != null) {
                serv.setMenuFunction(items);
            }
        }
        function getMenu() {
            return menu;
        }
    }
})();