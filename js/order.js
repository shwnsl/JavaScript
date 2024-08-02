let check = document.querySelector('#shippingInfo');
check.addEventListener('click', function () {
    if (check.checked == true) {
        document.querySelector('#shippingName').value = document.querySelector('#billingName').value;
        document.querySelector('#shippingTel').value = document.querySelector('#billingTel').value;
        document.querySelector('#shippingAdress').value = document.querySelector('#billingAdress').value;
    } else {
        document.querySelector('#shippingName').value = '';
        document.querySelector('#shippingTel').value = '';
        document.querySelector('#shippingAdress').value = '';
    }
})

const x = document.getElementById('id');
x.onfocus = function() {changeBgFo()};
x.onblur = function() {changeBgBl()};

function changeBgFo() {
    x.style.backgroundColor = 'pink';
}
function changeBgBl() {
    x.style.backgroundColor = 'gray';
}

const email = document.getElementById('email');
// let txt = '';
// email.addEventListener('keydown', showKey);
// function showKey(e) {
//     txt += e.key;
//     document.getElementById('show').innerHTML = txt;
// }
email.addEventListener('keyup',changeUpper);
function changeUpper() {
    email.value = email.value.toUpperCase();
}

const selectFruits = document.getElementById('select')
selectFruits.addEventListener('change', (e) => {
    document.getElementById('show').innerHTML = '내가 좋아하는' + e.target.value + '이다';
})