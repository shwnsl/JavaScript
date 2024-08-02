// const x = document.forms[0].id;
// console.log(x)
// document.getElementById('show').innerHTML = x

function getInput() {
    const x = document.forms['form1'];
    let text = '';
    for (let i = 0; i < x.length; i++) 
        text += x.elements[i].value + '<br>'        
    document.getElementById('show').innerHTML = text;
}

function myFn() {
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;

    if (password.length < 1) {
        document.getElementById('show').innerHTML = '비번 입력'
    } else if (password.length > 10) {
        document.getElementById('show').innerHTML = '10자이상 성정'
    } else {
        document.getElementById('show').innerHTML = '입력 완료'
    }

    if (id.length < 1) {
        document.getElementById('show').innerHTML = '아이디 입력'
    } else if (id.length > 10) {
        document.getElementById('show').innerHTML = '10자이상 성정'
    } else {
        document.getElementById('show').innerHTML = '입력 완료'
    }
    ['id','password'].forEach(field => document.getElementById(field).value = '')

    setTimeout(() => {
        document.getElementById('show').innerHTML =''
    }, 2000);
}