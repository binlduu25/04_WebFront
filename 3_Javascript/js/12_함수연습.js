// ----------------- 1번
function p1 (name){
    console.log(`hello, ${name}!`);
}
document.getElementById("btn1").addEventListener("click",function(){
    const name = "dd";
    p1(name);
});

// ----------------- 2번
function p2(a,b){
    console.log(`${a}와 ${b}의 합은 ${a+b}!`);
};
document.getElementById("btn2").addEventListener("click", function(){
    const a = Math.floor((Math.random() * 8) + 1);
    const b = Math.floor((Math.random() * 8) + 1);
    p2(a,b);
});

// ----------------- 3번


document.getElementById("btn3").addEventListener("click", () => {

});