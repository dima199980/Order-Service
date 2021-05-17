angular
    .module('app')
    .controller('adminCtrl', adminCtrl);

function adminCtrl() {
    (function () {
        'use strict';

        window.addEventListener('load', function () {
            const forms = document.getElementsByClassName('needs-validation');

            // Loop over them and prevent submission
            Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        }, false)
    })();
}
