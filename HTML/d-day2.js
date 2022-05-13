const remainTime = document.querySelector("#remain-time");
let dDay = document.querySelector(".d-day");
const $dDayContainer = document.querySelector('.d-day-container');

function diffDay() {
    const dDay2 = new Date("2022-12-31");
    const day2 = new Date();

    const diff = dDay2 - day2;
    // Math.floor()함수는 주어진 수의 같거나 작은 정수 중 큰 수를 반환
    // 간단하게 말하면 소수 부분을 버린다
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const dDay2year = dDay2.getFullYear();
    const dDay2month = dDay2.getMonth() + 1;
    const dDay2Date = dDay2.getDate();


    remainTime.textContent = `D-${diffDay}`;
    dDay.textContent = `endday : ${dDay2year}-${dDay2month}-${dDay2Date}`;
}

// 새로운 할 일을 화면에 랜더링하는 함수

function renderNewToDo() {
    const $newDiv = document.createElement('div');
    $newLi.dataset.id = newToDo.id;
    $newLi.classList.add('container');

    $newLi.innerHTML = `
        <h1 id="remain-time"></h1>
        <h2>D-Day</h2>
        <p class="d-day"></p>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
    `;

    const $dDayContainer = document.querySelector('.d-day-Container');
    $dDayContainer.appendChild($newDiv)
}

// 삭제 처리
function removeDday($targetdiv) {
    //1. 화면처리 : 삭제버튼이 선택된 container태그를 d-day-container에서 제거
    $dDayContainer.removeChild($targetdiv)
    //2. 데이터 처리: 배열에서 제거된 container에 매칭하는 객체를 삭제


}

$dDayContainer.addEventListener('click', e => {
    if (e.target.matches('.remove span')) {
        //if (confirm('정말로 삭제할까요')) {
        removeDday(e.target.parentElement.parentElement);
        //}
    }
})

diffDay();
setInterval(diffDay, 1000);