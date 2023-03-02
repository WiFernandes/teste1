var sec = 0;
var min = 0;
var hrs = 0;
var interval;

const startCronometro = document.querySelector('.start');
startCronometro.addEventListener('click', start);

const pauseCronometro = document.querySelector('.pause');
pauseCronometro.addEventListener('click', pause);

const stopCronometro = document.querySelector('.stop').addEventListener('click', stop)
function start(){
    interval = setInterval(watch, 10);
    startCronometro.disabled = true;
}

function pause(){
    clearInterval(interval);
    startCronometro.disabled = false;
}
function stop(){
    clearInterval(interval);
}
function watch(){
    sec++
    if(sec === 60){
        min += 1;
        sec = 0;
    }
    if(min === 60){
        hrs += 1;
        min = 0;
    }
    let seg = document.querySelector('.seg');
    seg.innerHTML = sec;
    let minutos = document.querySelector('.min');
    minutos.innerHTML = min;
    let horas = document.querySelector('.hrs');
    horas.innerHTML = hrs;
}

