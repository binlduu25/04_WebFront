document.querySelector("#btn1").addEventListener("click", () => {
    // 정규표현식 객체 생성
    
    // 방식1.
    const regExp1 = new RegExp("script");
    // "script" 와 일치하는 문자열이 있는지 검사 목적의 정규표현식

    // 방식2.
    const regExp2 = /java/;
    // "java" 와 일치하는 문자열이 있는지 검사 목적의 정규표현식

    // 확인하기 
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "jsp(java server page)도 공부 예정";
    const str3 = "java, java, java";

    console.log(regExp1.test(str1));
    console.log(regExp1.test(str2));
    console.log(regExp1.test(str3));
    console.log(regExp1.exec(str1));
    console.log(regExp1.exec(str2));
    console.log(regExp1.exec(str3));
    console.log("----------------");
    console.log(regExp2.test(str1));
    console.log(regExp2.test(str2));
    console.log(regExp2.test(str3));
    console.log(regExp2.exec(str1));
    console.log(regExp2.exec(str2));
    console.log(regExp2.exec(str3));
});

//-----------------------------------------------------

document.querySelector("#btn2").addEventListener("click",function(){

    // [abcd]
    const regExp1 = /[abacd]/;
    console.log(regExp1.test("apple"));
    console.log(regExp1.test("ssbss"));
    console.log(regExp1.test("qwerwt"));

    // ^ 캐럿
    const regExp2 = /^group/; // 문자열 시작이 group 인지 확인
    console.log(regExp2("group100"));

    // $ 달러
    const regExp3 = /group$/; // 문자열 끝이이 group 인지 확인

});

//-----------------------------------------------------

document.getElementById("inputName").addEventListener("keyup", (e) => {
    const span = document.getElementById("InputNameResult");
    const regExp = /^[ㄱ-힣]{2,5}$/;

    if(e.target.value.length == 0){
        span.innerText ="";
        return;
    }
    if(regExp.text(e.target.value)){ // 한글 2~5 글자 유효한 값을 작성한 경우
        span.innerText("유효한 이름");
        span.style.color = "green";
        span.style.fontWeight = "bold";
    }else { // 유효하지 않은 값 작성한 경우
        span.innerText("유효하지 않은 이름");
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }

});

// 생년월일(숫자 6자리) - 고유번호(숫자 7자리)
document.getElementById("inputPno").addEventListener("keyup", (e) => {
    
    const span = document.getElementById("inputPnoResult");
    
    if(e.target.value.length == 0){
        span.innerText = "주민번호 작성 필요";
        span.classList.remove("error", "confirm");
        return;
    }

    const regExp = /^\d{6}-\d{7}$/;
    //const regExp2 = /^[0-9]{6}-[0-9]{7}$/;

    if(regExp.test(e.target.value)){
        span.innerText = "유효한 주민등록 형식"
        span.classList.add("confirm");
        span.classList.remove("error");

    }else{
        span.innerText = "유효하지 않은 주민등록 형식"
        span.classList.add("error");
        span.classList.remove("confirm");
    }
});


