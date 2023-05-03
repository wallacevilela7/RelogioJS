let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function UpdateClock() {
    //FUNCIONAMENTO RELOGIO DIGITAL
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    digitalElement.innerHTML = `${FixZero(hour)}:${FixZero(minute)}:${FixZero(second)}`;



    //FUNCIOMENTO RELOGIO ANALOGICO
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function FixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(UpdateClock, 1000);
UpdateClock();