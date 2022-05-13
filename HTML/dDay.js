/*
    얻어야하는값
    입력값 - 타이틀
    입력값 - 시작일
    입력값 - 종료일
    계산값 - 디데이 계산값

    *입력값은 다 따로 받음
    쇼쇼속 객체값 뽑아서 함수 넘기기
*/

function makeNewId () {
    //생성한 태그값 받기
    return makeDDay.length > 0 ? makeDDay[makeDDay.length-1].id + 1 : 1; 
}

// 입력한 디데이데이터 추출해서 리턴
function makeDDay() {
    const dateBox = document.querySelector('div.dateInputform');
    const [$dDayName, $startDate, $endDate] = [...dateBox.children];

    const DateObject = {
        id : makeNewId(),
        dayName: $dDayName.value,
        start: $startDate.value,
        end: $endDate.value,
    }
    //return DateObject;


    console.log(DateObject);
    return DateObject;

};

// 디데이 계산 함수
function getDday(){

    const DateObject = makeDDay();

    //Day는 날짜 계산을 위해 날짜 시간값로 변환
    const startDate = Object.values(DateObject)[2];
    const startDay = Date.parse(startDate);

    const endDate = Object.values(DateObject)[3];
    const endDay = Date.parse(endDate);

    const calDate = endDay - startDay;
    const DdayDate = Math.abs(calDate / (1000 * 3600 * 24));
    return DdayDate;
};


//계산한 객체합쳐서 출력하기?
function addDday() {
    const dDayObj = makeDDay();
    dDayObj.dday = getDday();

    console.log('완성객체:', dDayObj);
    return dDayObj;
}




//==================================

const $addbtn = document.getElementById('addDate');
$addbtn.addEventListener('click', e => {
    e.preventDefault();

    addDday();

    //화면에 결과를 렌더링하는 함수 - 받기
    //renderDDayDate(dateObj);
    //renderNewToDo(dDayObj);


});