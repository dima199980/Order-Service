angular
    .module('app.form', [])
    .controller('formCtrl', formCtrl);

function formCtrl($rootScope, $scope, $location, $http) {
    $scope.errPost = false;

    $scope.categoryModel = null;
    $scope.firstNameModel = null;
    $scope.lastNameModel = null;
    $scope.organizationNameModel = null;
    $scope.telephoneNumberModel = null;
    $scope.dateConnectModel = null;
    $scope.emailModel = null;
    $scope.messageModel = null;

    $scope.organizationSet = {organizations: [], organizations1: [], organizations2: []};
    $scope.organizationSet.organizations = [];
    $scope.organizationSet.organizations.push('');

    $scope.checkForm = function checkForm() {

        if ($scope.categoryModel && $scope.firstNameModel && $scope.lastNameModel && $scope.telephoneNumberModel && $scope.emailModel && $scope.organizationSet.organizations1 && $scope.organizationSet.organizations2) {
            $http.post('/form/post?' + $.now(),
                {
                    category: $scope.categoryModel,
                    firstName: $scope.firstNameModel,
                    lastName: $scope.lastNameModel,
                    organizationName: $scope.organizationNameModel,
                    telephoneNumber: $scope.telephoneNumberModel,
                    dateConnect: $scope.dateConnectModel,
                    email: $scope.emailModel,
                    message: $scope.messageModel,
                    organizations: $scope.organizationSet
                })
                .then(getCustomerComplete)
                .catch(getCustomerFailed);

            function getCustomerComplete(data) {
                if (data.data.err === 0) return $('#exampleModal').modal('show');
                else {
                    return $scope.errPost = "Ошибка! Проверьте подключение к интернету и повторите попытку.";
                }
            }

            function getCustomerFailed() {
                alert("При обращении на сервер произошла непредвиденная ошибка.");
            }
        }
    };

    $scope.addNewOrganization = function () {
        if ($scope.organizationSet.organizations.length <= 9) $scope.organizationSet.organizations.push('');
    };

    $scope.removeOrganization = function (z) {
        $scope.organizationSet.organizations.splice(z, 1);
        $scope.organizationSet.organizations1.splice(z, 1);
        $scope.organizationSet.organizations2.splice(z, 1);
    };
}
