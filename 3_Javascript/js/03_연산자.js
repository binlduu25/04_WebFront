// html 내 input 태그 JS로 가져와서 const 변수에 담기
const number1 = document.getElementById("input1"); // 쌍따옴표 필수
console.log(number1);

const number2 = document.getElementById("input2");
console.log(number2);

const result = document.getElementById("calcResult");
console.log(result);


/** 
* 공통사항 : value 값은 미리 입력되어 있지 않기에
버튼이 눌리는 시점(=함수가 호출되는 시점)에 value값이 정의되어 계산을 수행하여야 한다
따라서 const value1 이 전역변수에 선언된다면 초기값이 이미 설정된 후에 계산을 하는 것으로
코드가 흘러가게 되어 제대로 수행되지 않는다.
따라서 지역변수 내(각각의 함수 기능 내) 변수가 선언되어야 함
*/

function plusFn(){
    // input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;
    console.log(value1,value2);

    console.log(value1 + value2); 
    // input 요소에 작성된 값은 무조건 문자열
    // 이대로 입력하면 value1 과 value2를 문자열로 인식하기 때문에
    // 문자열 이어쓰기 형태로 출력됨
    // 따라서 문자열을 숫자로 변경해야 함
    // Number("") : 문자열을 숫자로 형변환하게 해주는 JS 내장스크립트
    console.log(Number(value1) + Number(value2));

    // 두 수의 합을 result 변수에 내부글자로 대입
    // result 변수(아이디가 calcResult인 span 요소)의
    // 내부글자(innerTextk html 요소의 content)로 대입하기
    result.innerText = Number(value1) + Number(value2);
}

function minusFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) - Number(value2);
}

function multiFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) * Number(value2);
}

function divFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) / Number(value2);
}

function modFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) % Number(value2);
}