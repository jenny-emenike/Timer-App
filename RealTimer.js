let start = document.querySelector("#start");
let reset = document.querySelector("#reset");

let h = document.querySelector("#hour");
let m = document.querySelector("#min");
let s = document.querySelector("#sec");

var startTimer = null;

function timer(){

if(h.value == 0 && m.value == 0 && s.value == 0){
h.value = 0;
m.value = 0;
s.value = 0;


}
else if(s.value !=0 ){
    s.value --;
}
else if(m.value != 0 && s.value ==0){
    m.value --;
    s.value = 59;
}
else if(h.value !=0 && m.value == 0){
    h.value --;
    m.value = 59;
}


}

function timerStop(){
    clearInterval(startTimer)
}



start.onclick = function start(){

startTimer = function(){

    startInterval = setInterval(function(){
        timer();
    }, 1000)
}

startTimer();

}

reset.onclick = function reset(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    timerStop();
}