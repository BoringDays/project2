$(document).ready(function () {
    setTimeout(function () {
        document.querySelector('#money-total .odometer').innerHTML = '500000000';

        document.getElementById('number1').innerHTML = '5800000';
        document.getElementById('number2').innerHTML = '2000';
    }, 1000);

    $('#modal_1').modal('show');
});
