/*
기억할 것.
Table id : calendar
Table title id : calendarTitle
테이블 초기화시엔 두번째 row까지 남긴다 (타이틀, 요일표시) */

//===============전역변수, 함수정의부 ============//
//달력을 출력하려면 어떤 달력을 출력할지를 알려주는게 우선입니다. Date타입을 사용합니다.
// new Date() 는 함수로 현재 시간을 알려줌.
let today = new Date();
// console.log(today); // 현재 시간(날짜포함)

// const $test = document.getElementById('calendarTitle');
// console.log(document.body);
// const row = null;

// 달력을 생성하는 buildCalendar() 함수입니다.
function buildCalendar() {
    let cnt = 0;




    // 달력을 만들어서 출력할 table 및 tableTitle을 참조

    const $calendarTable = document.getElementById('calendar');
    // console.log($calendarTable); // * 테이블 전체영역

    const $calendarTableTitle = document.getElementById("calendarTitle");
    //console.log($calendarTableTitle); // * yyyy년 m월 영역 td

    $calendarTableTitle.innerHTML = today.getFullYear() + "년" + (today.getMonth() + 1) + "월";
    // console.log(today.getFullYear() + "년" + (today.getMonth() + 1) + "월"); // * 2022년 5월
    // console.log(today.getFullYear()); // 오늘 날짜의 년도
    // console.log(today.getMonth() + 1); // 오늘 날짜의 월( 0 - 11월 까지)
    // today로 현재 연도와 월은 알 수 있으니, 타이틀은 참조와 동시에 입력해줍니다.

    // * 현재 달력의 첫날과 마지막날을 구함

    const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
    // console.log(firstDate); // 현재 시간의 해당월의 첫째 요일 월 년도

    const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    // console.log(lastDate); // 현재 시간의 해당월의 마지막 요일 월 년도 

    // * 작성할 테이블의 초기화


    // console.log($calendarTable.rows.length); 
    while ($calendarTable.rows.length > 2) {
        // console.log('행을 삭제하겠습니다. 작동확인');
        $calendarTable.deleteRow($calendarTable.rows.length - 1);
        // 테이블 전체영역의 행수의 길이 년도와 요일을 남기기 위해 2개만 남긴다.
        //table.rows(-1) = 테이블의 마지막행 삭제
    }

    // * 달의 첫날 앞으로는 빈셀을 생성.

    let $row = $calendarTable.insertRow(); // insertRow : 행을 추가

    // getDay() 는 요일을 출력하는 함수. // 0 = 일 ~ 6 = 토
    // const $dateDay = [...document.querySelector('#calendar tr:nth-child(2)').children];
    // const [$td0, $td1, $td2, $td3, $td4, $td5, $td6] = [$dateDay.children];
    // console.log($dateDay);

    // console.log('1일의 요일:', firstDate.getDay());

    //첫주차만 따로
    let dateCount = 0;
    for (let i = 0; i < 7; i++) {
        // console.log('돌아라!');
        cell = $row.insertCell(); // insertCell 새로추가된 row 변수에 새로운 셀 추가.

        if (i >= firstDate.getDay()) {
            dateCount++;
            cell.setAttribute('id', dateCount);
            cell.innerHTML = dateCount;
            cell.align = "center";
        }

        // cnt += 1; // 왜 들어가 있는거지???
    }
    // * 달력에 날짜 채우기

    const accumDateCnt = dateCount;
    $row = $calendarTable.insertRow();
    //2주차부터
    for (let i = dateCount + 1; i <= lastDate.getDate(); i++) {
        // lastDate의 마지막 날짜 ex)30 or 31
        cell = $row.insertCell();
        cnt++;
        // dateCount++;

        // console.log(`i: ${i}, cnt: ${cnt}`);

        cell.setAttribute('id', i);
        cell.innerHTML = i;
        cell.align = "center";

        /* if (cnt % 7 === 1) {
             cell.innerHTML = "<font color=#F79DC2>" + i + "</font>";
         }*/

        if (cnt % 7 === 0) {

            // cell.innerHTML = "<font color=skyblue>" + i + "</font>";
            $row = $calendarTable.insertRow(); // 행추가
        }
    }
    // * 달력의 마지막날 뒤 빈칸 행으로 채우기 
    /* if (cnt % 7 != 0) {
         for (i = 0; i < 7 - (cnt % 7); i++) {
             cell = row.insertCell();
         }
     } */

}
// 선택한 일자를 출력하기

/*
cell.onclick = function(){
	clickedYear = today.getFullYear();
	clickedMonth = ( 1 + today.getMonth() );
	clickedDate = this.getAttribute('id');
	
	clickedDate = clickedDate >= 10 ? clickedDate : '0' + clickedDate;    
	clickedMonth = clickedMonth >= 10 ? clickedMonth : '0' + clickedMonth;
	clickedYMD = clickedYear + "-" + clickedMonth + "-" + clickedDate;
				
	opener.document.getElementById("date").value = clickedYMD;
	self.close();
}*/



// 이전달 이동
function prevCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar();
    
}

// 다음달 이동
function nextCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    buildCalendar();
}




//========= 메인실행부 ============//

(function () {

    // 달력의 날짜 생성 함수
    buildCalendar();

    //이전달 이동
    const $preBtn = document.getElementById('pre');
    // console.log($preBtn);
    $preBtn.onclick = prevCalendar;

    //다음달 이동
    const $nextBtn = document.getElementById('next');
    // console.log($nextBtn);
    $nextBtn.onclick = nextCalendar;



    //이전달, 다음달 이동

    /*
      - today로부터 연, 월을 불러옵니다
      - 클릭된 cell의 id로부터 일자를 불러옵니다.
      - 연월일을 yyyy-mm-dd로 출력할 수 있게 형식 만듭니다.
      - 부모창에 계산된 일자를 출력하고 현재창은 닫습니다.
*/
    /*
        $toDoList.addEventListener('click', e => {
            if (e.target.matches('.remove span')) {
                // 할 일 삭제 버튼 클릭 이벤트
                // console.log('할 일 삭제!!!');
                
                if (confirm('정말로 삭제할까요??')) {
                    removeToDo(e.target.parentElement.parentElement);
                }
            } else if (e.target.matches('.modify .lnr-undo')) {
                // 할 일 수정모드 진입 클릭 이벤트
                // console.log('수정 모드 진입');
                enterModifyMode(e.target);
            } else if (e.target.matches('.modify .lnr-checkmark-circle')) {
                // 할 일 수정 완료 클릭 이벤트
                // console.log('수정 완료!');
                modifyToDo(e.target);
            }
        });    


    */

})();


/*1. 구조

    ㄱ. HTML
    ㄴ. Java script

2. 날짜를 구하기 위한 준비

3. 달력 구성하기

    ㄱ. 달력을 만들어서 출력할 table 및 tableTitle을 참조
    ㄴ. 현재 달력의 첫날과 마지막날을 구함
    ㄷ. 작성할 테이블을 초기화
    ㄹ. 달의 첫 날까지 빈 셀을 생성합니다.
    ㅁ. 본격적으로 달력에 요일 채우기
    ㅂ. 달력의 마지막날 뒤 빈칸 행으로 채우기

4. 선택한 일자를 출력하기

5. 이전달, 다음달로 이동하기

6. 추가작업*/