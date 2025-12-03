// window.setTimeout()
document.getElementById("btn1").addEventListener("click", () => {
    window.setTimeout( () => {
        alert("1.5초 후 출력됨");
    } , 1500);
});

//-----------------------------------------------------------------
// window.setInterval()

// 현재시간을 문자열로 반환하는 역할의 함수 
function currentTime(){
    const now = new Date();
    // Date = 현재 시간 날짜에 대한 내장 객체

    let hour = now.getHours(); 
    let min = now.getMinutes(); 
    let sec = now.getSeconds();

    // 이까지 세팅했을 때 1의 자리 시간은 1자리만 나오기 때문에
    // 디지털 시계 양식에 따라 01, 02 ,03 등의 형식으로 바꾼다.
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}

let interval; // setInterval 을 저장하기 위한 변수

function clockFn(){
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    interval = setInterval(function(){
        clock.innerText = currentTime();
        
    }, 1000);
}

clockFn(); // 실행

// window.clearInterval()
document.getElementById("stop").addEventListener("click", () => {
    
    window.clearInterval(interval);
})
