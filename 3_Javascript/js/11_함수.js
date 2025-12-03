//-----------------------------------------------------------
// 매개변수, 전달인자 예제 확인

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달받아 콘솔로 단순히 출력하는 기능의 함수
function print1(a, b){
    console.log(`${a} 은/는 ${b}입니다`);
}

// btn 클릭 시 input1 값 읽어와 print1() 호출

document.getElementById("btn1").addEventListener("click", function(){
    if(input1.value.length == 0){
        console.log("값 미입력");
        return;
    }
    let result; // 입력값이 0 / 양수 / 음수 여부 저장
    if( Number(input1.value) === 0 ) {result = "0";}
    else if ( Number(input1.value) > 0 ) {result = "양수";}
    else if ( Number(input1.value) < 0 ) {result = "음수";}
    
    print1(input1.value, result);
    // 만약 print1()에 매개변수 및 전달인자를 아무것도 입력하지 않는다면
    // undefined 값이 나온다
    // 위 print1(a,b)에서 이미 선언은 되었지만 전달받은 값이 없기 때문
    // 전달되는 값의 순서 중요

    input1.value = "";
});

//-----------------------------------------------------------
//매개변수로 배열 전달

// 매개변수로 전달받은 배열의 모든 요소 출력
function arrayTest(arr, num){
    for(let i = 0; i <arr.length; i++){
        // arr[i] 값이 사과와 일치하면 해당 요소 값을 수박으로 재대입
        if(arr[i] == '딸기'){
            arr[i] = '멜론';
        }
        num = 100;
        console.log(`${i} 번째 인덱스 값 : ${arr[i]}`);
    }
}

document.getElementById("btn2a").addEventListener("click", function(){
    
    const arr = ["사과", "바나나", "딸기"];
    let x = 0; // 원시타입

    arrayTest(arr, x);

    console.log("arr[0] : ", arr[0]);
    // 1)
    // 왜 딸기가 아니라 멜론일까
    // 배열 > 참조형
    // arrayTest 로 전달인자로 arr 전달하면 arr 의 값이 아닌 '주소'가 넘어감
    // 그때 arrayTest에서 주소를 참조해서 값을 변경함
    // arr에 저장된 주소만 보내서 함수를 수행(얕은 복사)
    
    console.log(x); 
    // 2)
    // 반면 원시타입의 경우에는 x 의 값이 그대로 0임. 왜?
    // 원시타입은 주소값이 아닌 '값' 자체를 전달하기 때문에
    // 위 arrayTest 함수에서 num 값을 변경했을 뿐 x가 변한 건 아니다.
    // 즉 복사본을 변경해도 원본은 변경되지 않음

    // js 원시타입 종류
        // string(자바에선 참조형이지만 js에선 아님), 
        // number, boolean, undefined, bull 
        // 원본 불변
    // 참조형(객체 타입)    
    // object, array, function..
    // 메모리에 저장된 주소 참조(복사본 변경 시 원본도 변경됨)     
});


document.querySelector("#btn2c").addEventListener("click",function(){
    // print2 함수 활용

    // 함수도 변수 저장 가능
    const sumFn = function(a,b){
        return a + b; // 함수 종료 + 값을 가지고 호출한 곳으로 돌아감
    }

    // print2 함수에 전달인자로 sumFn 전달

});


//---------------------------------------------------------------------------

// 화살표 함수
// 클래스가 arrow 인 요소를 모두 얻어와 저장(배열)
const arrowList = document.querySelectorAll(".arrow");

// 화살표 함수 기본 형태
arrowList[0].addEventListener("click", () => {
    alert("화살표 함수 기본 형태 연습");
});

// 매개변수 1개인 경우 : ()생략 가능
arrowList[1].addEventListener("mouseenter", e => {
    e.target.style.backgroundColor = "pink";
    // this.style.backgroundColor = "pink";
    // 화살표 함수에서의 this 는 이벤트가 일어난 대상 객체가 아니라
    // 전역 객체(window)이므로 작동하지 않음
});

// return 한 줄만 작성된 경우
const twoNumberPlus = (otherFn) => { // 변수 twoNumbPlus 에 화살표 함수를 담음
alert(otherFn(1,2));
}; 
arrowList[2].addEventListener("click", () => {
    twoNumberPlus( (a,b) => {return a + b} ); // 전달인자가 화살표 함수임
    // twoNumberPlus( (a,b) => a + b ); // 이렇게 생략 가능
});

// return 한 줄만 있지만 js 객체 return 하는 경우
function printObject(otherFn){
    const obj = otherFn("홍길동", 20);
    console.log(obj);
}

arrowList[3].addEventListener("click", () => {
    printObject( (name, age) => { return{"name":name, "age": age} } );
});
//------------------------------------------------
// 즉시 실행 함수
( () => {
    console.log("테스틑ㅌㅌ");
} )();