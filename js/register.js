let userId =  document.querySelector('#email');
let userPw =  document.querySelector('#password');
let userPwChk =  document.querySelector('#passwordchk');

userId.onchage = checkId;
userPw.onchage = checkPw;
userPwChk.onchage = comparePw;

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 사용하세요.")
        userId.select();
    }
}

function checkPw() {
    if(userPw.value.length < 8) {
        alert('비밀번호는 8자 이상')
        userPw.value = '';
        userPw.focus();
    }
}

function comparePw() {
    if (userPw.value != userPwChk.value) {
        alert('암호가 다름')
    }
}