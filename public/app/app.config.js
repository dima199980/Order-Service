angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/form/form.html",
            controller: "formCtrl",
            resolve: changeCssMenu(0, '')
        });
}

function changeCssMenu(number, item) {
    return {
        init: function () {
            $('.navbar-left-item').text(item);
            $('header .navbar').css('display', 'none');
        }
    };
}
