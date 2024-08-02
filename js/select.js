// function opt() {
//     const majors = document.querySelector('#major option:checked').value;
//     alert(majors);
// }
// major.onchange = opt;

// const radios = document.querySelectorAll('input[type=radio][name=subject]');
// function radio() {
//     const radio = document.querySelector('input[type=radio][name=subject]:checked').value;
//     alert(radio);
// }
// radios.forEach(rrr => {
//     rrr.onchange = radio;
// });

// const chkBoxs = document.querySelectorAll('input[type=checkbox]');
// function checks() {
//     const chkbox = document.querySelector('input[type=checkbox]:checked').value;
//     alert(chkbox);
// }
// chkBoxs.forEach(rrr => {
//     rrr.onchange = checks;
// });

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    const userName = document.getElementById('userName').value;
    const majorSel = document.getElementById('major');
    const selectMajor = majorSel.value || "선택되지 않음";
    const selectSub = document.querySelector('input[name="subject"]:checked');
    const selectedSub = selectSub.value ? selectSub.value : '선택되지 않음';
    const selectStudy = document.querySelector('input[name="study"]:checked');
    const selectedStudy = selectStudy.value ? selectStudy.value : '선택되지 않음';

    document.querySelector('.show').innerHTML = `${userName},${selectMajor},${selectedSub},${selectedStudy}`
})

