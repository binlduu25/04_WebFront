//console.log(값);

    //브라우저 콘솔창에 괄호 내부의 값 출력
    //함수안에서 호출한 게 아닌 전역에서 호출됨
    //브라우저 console 창에서 확인 가능

    console.log(1234); 
    console.log("문자열 테스트.문자열은 양쪽에 쌍따옴표 작성");
    console.log('홑따옴표도 문자열로 취급됨');

//---------------------------------------------------------

// 변수의 선언
    // 메모리에 값을 저장할 공간 만들고 이름 붙이기
    // [작성법]
    // 변수종류 변수명;

    var number1; // 지금 단계에서는 undefined 상태

    // 초기화(변수에 값 할당)
    // [작성법]
    // 변수명=값;

    number1 = 9999;
    console.log(number1);

    // 변수 선언 + 초기화
    var number2 = 5959;
    console.log(number2);

    // 연산 가능
    console.log(number1 + number2);

    // 변수에 대입한 값 변경하기
    number1 = 300;
    console.log(number1);

    // 문자열과 함께 출력
     // 1)문자열 + 문자열/숫자/변수 = 이어쓰기
    console.log("number1의 값 : " + number1);
    // 2) 괄호 내부에 , 작성
    // -> 각각 값을 독립적으로 출력
    // 형변환 없이 출력되어 문자열로 출력
    console.log("number1 : " , number1);

//------------------------------------------------------------

// var, let, const 차이점

// 1. var(변수, 변수 선언 시 중복되는 변수명으로 선언 가능)
    // -> 먼저 선언된 변수에 나중에 선언된 변수가 덮어씌워짐

    var menu = "삼겹살";
    console.log("menu: " + menu);

    var menu = "초밥";
    console.log("menu: " + menu);
    // 자바에서 이렇게 하면 에러남
    // 중복되는 변수명으로 선언이 가능하다(덮어씌워짐)
    // > 이전에 저장해놓은 변수값 쓸 수 없으니 주의
    // > 이런 문제 때문에 var 는 잘 안 쓰는 추세

// 2. let(변수, var의 변수명 중복문제 해결

    let number3 = 25;
    // let number3 = 55; -> 변수명 중복 선언 불가
    
    number3 = 500;

// 3. const(상수, constant, 항상 같은 수)
    // 한번 값이 대이되면 새로운 값 대입 불가

    const PI = 3.141592;
    // 해당 값 선언 후 재대입 불가

    // const test; 
    // 상수는 선언만 하는 것 불가, 선언과 동시에 초기화 필요

// ------------------------------------------------------

// 블록 레벨 scope // 함수 레벨 scope

// 1. 블록 레벨 scope(let, const)
    // let 과 const 로 선언된 변수는 변수가 선언된 블록(중괄호{}) 내부에서만 유효함을 의미
    // 즉, 코드블록 내부에서 선언한 변수(let, const)는 해당 블록 외부에서 접근 불가

    let foo1 = 123; // 전역 변수
    const foo2 =346; // 전역 변수(상수)

    {// 중괄호 안 블록 레벨
        let num1 = 890; // 지역 변수
        const num2 = 0; // 지역 변수(상수)   
    }

    console.log(foo1);
    console.log(foo2);
    // console.log(num1);
    // console.log(num2);
    // num1 과 num2 는 중괄호 밖에서 접근불가(블록레벨 스코프)

    //if, for, while, switch, try{} 등 > 블록레벨 스코프

// 2. 함수레벨 스코프(var)
    // var 로 선언된 변수는 함수 내 어디서든 접근 가능
    // if, for 등 일반블록은 무시하고, var로 선언된 변수가 있는 함수 전체에서 유효

    var test1 = 123; 
    {
        var test2 = 456;
    }

    console.log(test1);
    console.log(test2);
    // 둘 다 오류 안 남
    // 함수레벨 스코프 var 는 일반 블록은 무시

    function example(){ // 함수레벨 스코프
        var test3 = 5555;
    }
    // console.log(test3); 
    // test3 는 함수레벨 스코프 밖에서 접근 불가
    // var 는 일반 블록레벨만 무시

    // 함수 내 test4 를 밖에서 불러오고 싶다면, 함수 내에서 콘솔창 출력 코드 입력 후
    // 밖에서 해당 함수 불러와야 함
    function example(){ // 함수레벨 스코프
        var test4 = 66555;
        console.log(test4);
    }
    example();

    // 아래 역시 정상 작동
    function example2(){
        if(true){
            var x = 10;
        }
        console.log(x);
    }
    example2();

// -------------------------------------------------------------------------
// 호이스팅(hoisting)

    // 1. var의 호이스팅
    // : var로 선언된 변수는 선언만 해당 스코프의 최상단으로 
    // 호이스팅 됨. 초기화는 원래 코드 위치에서 수행된다

    // 에러가 안나고 undefined 가 찍힘.
    // -> 호이스팅 되어 var a; 선언부는 최상단으로 올라감.
    // -> 선언은 되어있으나 a에 값이 대입되진 않았기 때문에
    // undefined 가 되는 것.

    // 내부적으로 var a; 이렇게 선언만 된 상태
    console.log(a); // undefined

    var a = 10; // 전역 스코프에 선언 + 초기화 

    console.log(a);

    // 2. let / const 의 호이스팅
    // : let/const로 선언된 변수는 선언만 해당 스코프의 
    // 최상단으로 호이스팅됨.
    // var와 달리, let/const로 선언된 변수는 초기화가 
    // 이루어지기 전에는 사용될 수 없음.

    // TDZ(Temporal Dead Zone) : 시간적으로 죽은 구역..
    // 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미함.
    // -> Javascript에서 let/const 키워드로 선언된 변수가
    // 초기화되기 전까지 접근할 수 없는 구간을 말함.

    // 내부적으로 let x; 선언은 끌어올려진 상태
    // -> x의 선언이 호이스팅됨.
    // 그러나 TDZ에 놓여 초기화 전까지 접근 불가
    // -> 초기화가 이루어지기 전까지 해당 변수는 TDZ에 놓이며, 
    // 이 기간동안 변수에 접근하려고 하면 
    // Cannot access 'x' before initialization 라는 에러 발생.

    // console.log(x); 
    // ReferenceError: Cannot access 'x' before initialization

    let x = 50;

    console.log(x);

    // -> 이러한 특성때문에 let/const는 var 보다
    //  예측 가능한 코드를 작성할 수 있음 (오늘날 지향)



// -----------------------------

// JS 자료형 확인하기
// type of 연산자 : 변수/값의 자료형을 출력하는 연산자

// undefined : 정의되지 않은 변수 / 값이 아직 대입되지 않음
let undef; // 변수선언
console.log("undef: ", undef, typeof undef);

// string(문자열) : "" 또는 ''로 작성된 값
const userName = "홍길동";
console.log("userName: ", userName, typeof userName);

const phone = '010101010101'
console.log("phone: ", phone, typeof phone);

const gender ='M'; // 홑따옴표에 한글자만 작성해도 string임
console.log("gender: ", gender, typeof gender);

// number (정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 150.5;
const eyesight = -5;
console.log("age: ", age, typeof age);
console.log("height: ", height, typeof height);
console.log("eyesight: ", eyesight, typeof eyesight);

// boolean (논리값 t/f)

const isTrue = true;
const isFalse = false;

console.log("isTrue: ", isTrue, typeof isTrue);
console.log("isFalse: ", isFalse, typeof isFalse);

// object(객체)
// 값을 여러 개 저장할 수 있는 형태

    // 1) 배열
    const numbers = [10,20,30];
    console.log("numbers: ", numbers, typeof numbers);
    console.log("numbewrs 배열 값 중 0번째 : ", numbers[0], typeof numbers[0]);
    // 만약 배열 범위 외 값을 조회한다면?
    console.log("numbewrs 배열 값 중 3번째 : ", numbers[3], typeof numbers[3]);
    // -> undefined

    // 또한 JS 에서 배열은 값 추가 및 삭제 가능 (컬렉션과 비슷)
    // 크기가 고정되지 않고 필요에 따라 자동으로 늘어나거나 줄어든다

    // 2) JS 객체
    // 값을 K:V (Map) 형식으로 여러 개 저장하는 형태
    // -> { K:V, K:V, K:V, ......}
     // K(Key) : 값을 구분하는 이름(변수명과 비슷(고유식별자))
     // V(value) : k에 대응되는 값(변수에 대입되는 값과 비슷)
        const user = { id: "user01", pw: "pass01", userName : "홍길동", age:20};
        console.log("user", user, typeof user);
    // 객체에 존재하는 값 하나씩 얻어오기
        // 방법 1. 변수명['key']
        console.log(user['id']);
        // 방법 2. 변수명.key
        console.log(user.id, user.pw, user.userName, user.age);

    // 3) 함수(function)
    // 작성법
    // const 변수명 = function(){};
        // (변수명 = 함수명)
        const sumFn = function(a,b){return a+b}; 
        // 익명함수
        // 매개변수로 a와 b를 받아 a+b 반환
        /*
        위 코드는 아래 함수와 동일하다

        function sumFn(a,b){
            return a+b
        }
        */

        console.log(typeof sumFn);

        console.log(sumFn(5,4));
        // 콘솔창에서 9를 출력하고 싶다면
        
