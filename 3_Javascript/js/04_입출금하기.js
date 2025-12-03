//prompt 연습
/*
function test(){
    const password = prompt("비밀번호 입력");
    console.log(password);
}

test();

// 확인 > 입력한 값 '문자열'로 저장됨
// 취소 > null


*///--------------------------------------------------------------------

const amount = document.getElementById("amount");

let balance = 10000;
document.getElementById("output").innerText = balance;

const password = '0000';

function deposit(){
    const res = balance + Number(amount.value);
    document.getElementById("output").innerText = res;
    alert(Number(amount.value) + "원이 입금되었습니다.");
    balance = res;
    amount.value='';
}

function withdrawal(){
    const pw = prompt("비밀번호 입력");
    if(pw == null){
        alert("출금 불가 : 비밀번호 입력 취소");
        amount.value='';
    }else{
        if(pw == password){
            if(balance >= Number(amount.value)){
                const res = balance - Number(amount.value);
                document.getElementById("output").innerText = res;
                balance = res;
                //alert(Number(amount.value) + "원이 출금되었습니다.");
                alert(`${Number(amount.value)}원이 출금되었습니다. 현재 잔액 : ${balance}원`); // 홑따옴표 아님 1 옆에 `
                // 백틱(``) 사용하여 문자열 감싸고, ${} 변수/값을 넣어 동적으로 문자열 생성 방식
                amount.value='';
            }else{
                alert("출금 불가 : 잔액 부족");
                amount.value='';
            }
        }else{
            alert("출금 불가 : 비밀번호 오입력");
            amount.value='';
        }
    }
}

/* 이하 선생님 부분
const amount = document.getElementById("amount");
const output = document.getElementById("output");

let balance = 10000;
const pw = '1234';
output.innerText = balance;

function deposit(){
    // input 에 입력된 금액 구하기
    // amount.value.length == 0 이면 입력된 값이 없는 것
    if(amount.value.length ==0){
        alert("금액 미입력");
    }else{ // 입력 되었을 때
        // 결과 금액을 잔액에 누적
        balance += Number(amount.value);
        // 화면에 잔액 업데이트
        output.innerText = balance;
        //input에 작성된 값 제거
        amount.value = ''; 
    }
}

function withdrawal(){
    if(amount.value.length ==0){
        alert("금액 미입력");
    }else{
        const password = prompt("비밀번호 입력 : ");
            if(password == null){
                alert("취소됨");
            }else{
                if(password != pw){
                    alert("비밀번호 불일치")
                }else{
                    const money = Number(amount.value);
                    if(money > balance){
                        alert("잔액 부족");
                    }else{
                        balance -= money;
                        output.innerText = balance;
                        amount.value='';
                    }
                }
            }
    }
}

*/