/*
var : 함수형 변수
let : 영역형 변수
const : 영역형변수 상수
*/

//var test : 재선언가능, 업데이트 가능
var hello = "안녕";
var hello = "헬로우";
var cnt =5;

if(cnt<6){
    var hello1 = "say hello~~";
    console.log(hello1);
}
console.log(hello1);
console.log(hello);

//let : 재선언 불가능, 업데이트 가능
let hi = "hi";
hi="하이라고 할게";

let times=5;

if(times>3){
    let hi1="say hi~";
    console.log(hi1);
}
//console.log(hi1);
console.log(hi);

//const :  업데이트 안되고, 재선언 안됨
const hi3 ={
    message:"3th say hi",
    times:4
}
console.log(hi3);

hi3.message="이건 될까";
hi3.times=44;

console.log(hi3);

