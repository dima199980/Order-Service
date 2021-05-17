angular
    .module('app')
    .run(run);

function run($rootScope, $http, $location) {
    angular.UTIL = angular.UTIL || {};

    $rootScope.$on('$locationChangeStart', function() {
        $location.path();
    });
}
