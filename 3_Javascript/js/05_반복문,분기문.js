function check1(){
    const gimbap = 3000;
    const ramen = 3500;
    const donga = 5000;

    // 주문 개수 카운트
    letgCount = 0;
    letrCount = 0;
    letdCount = 0;  

    // prompt 값 저장할 변수
    // 처음엔 undefined
    let input;

    // 비교연산자
        // == : 값이 동일한 경우
        // === : 값과 자료형 모두 동일 (js만 있음)
        // '1' == 1 : true
        // '1' === 1 : true
        // undefined == null : true
        // undefined === null : true
        // undefined(자료형), null(객체)
        // === : 값, 자료형이 모두 같은 경우 true
        // !== : 값, 자료형이 모두 다른경우 true

    // 따라서 prompt 에서 '취소' 버튼을 누르는 것과
    // 값을 입력하지 않은 것은 다름
    // 아래 while 문에서 취소 버튼 눌렀을 시 멈춤
    // 취소 시, null
    // 값을 입력하지 않았을 시, undefined
    // 따라서 !== 사용해야 한다
    while(input !== null){
        input = prompt("메뉴 번호를 입력하세요!");

        switch(input) {
        case "1" : gCount++; break;
        case "2" : rCount++; break;
        case "3" : dCount++; break;
        case null : alert("주문 완료!"); break;
        default: alert("메뉴에 작성된 번호만 입력하세요!");
        }
    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
    alert(`총 가격: ${sum} 원`);
}

    //-------------------------------------------------------------------------

//up,down
function startGame(){

    const answer = Math.floor(Math.random() * 200) + 1;
    let count = 0; // 정답 시도 횟수 세기 위한 변수 선언
    
    //prompt 에 출력할 문자열
    // 1. 문자열 변수 선언
    let str = "1부터 200사이 숫자 입력";

    // 2. 반복문 설정
    while(true){

        // prompt 입력값 저장할 변수 선언
        let input = prompt(str);
        
        if(input === null){ // 취소 클릭 시
            alert("게임 포기");
            break;
        }

        // 입력받은 값 숫자로 변환
        const value = Number(input);
        
        // Number() 내의 변수가 숫자가 아닌 경우 숫자로 변환 했을 때
        // NaN 값 발생
        // 숫자가 아닌 문자열이 입력된 경우
        // NaN : Not a number
            // isNaN(값) : 값이 NaN(숫자가 아니면)이면 true, 아니면 false

        if(isNaN(value)){ // 숫자가 아닐 때
            alert("숫자만 입력하세요");
            continue; // 아래 코드 발생시키지 않고 반복문으로 돌아감
        }

        if(value < 1 || value > 200){
            alert("1~200 사이 숫자만 입력하세요");
            continue;
        }

        // 정답인 경우
        if(value === answer){
            alert(` 정답 : ${answer} / 시도 횟수 : ${count}`);
        }

        // 정답 아닐 때
        
    }
}
