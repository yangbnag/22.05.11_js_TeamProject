


// 시작일 계산 함수

function getDday (start, end){
    const startDate = new Date(start);
    const endDate = new Date(end);

    const calDate = endDate.getTime() - startDate.getTime();

    const DdayDate = Math.abs(calDate / (1000 * 3600 * 24));
};

getDday($startDay , end);

//입력받은 날짜 잡기!!
const $startDay = document.getElementById('startDay').value;
console.log($startDay);





//==================================

const $addbtn = document.getElementById('addDate');
