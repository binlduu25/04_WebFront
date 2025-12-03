// 배열 선언 및 기초 사용법
function check1(){

    // 배열 선언 방법 확인
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과","바나나","딸기"];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

// 배열명.length : 배열 길이
console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log(arr4.length);

// 배열의 index
// 배열명[index]
// -> 배열의 해당 인덱스에 저장된 데이터 반환
console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);

// 배열에 값 대입
// 배열명[index] = 값;
// * JS 배열 특징 : 인덱스별로 자료형 다르게 지정 가능

arr2[0] = 100;
arr2[1] = "가나다";
arr2[2] = true;

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

// 길이 제한 역시 없다
arr1[0] = "하나"
arr1[1] = "ㄹㄹ"
arr1[2] = "ㅎㅎ"
arr1[4] = "ㅋㅋ"

console.log(arr1);
// arr1[3] 은 건너뛰어서 empty 값으로 되고 길이는 총 5개가 됨
// 원하는 index 에 값을 마음대로 추가 가능
}   
//--------------------------------------------------------------------

// 배열과 for문
function check2(){
    // 일반 for 문 이용하여 배열 요소 초기화
    const arr =[];
    for(let i = 0; i <= 3; i++){
        arr[i] = i * 10;
    }
    console.log(arr);

    // for..of문 - 향상된 for문과 비슷
    for(const value of arr){
        console.log(value);
    }

    // forEach문
    arr.forEach( (value, index) => {console.log(index, value)} );
    // => : function() 즉, 익명함수
    // 앞쪽의 소괄호는 매개변수
     // arr에 순차적으로 접근해 현재 index에 해당하는 value 에 접근하여
     // {} 안의 명령 수행 
}






