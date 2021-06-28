getRandomImage();

async function getRandomImage() {
    fetch(`https://source.unsplash.com/1920x1280/?nature`)
        .then((response) => {
            const body = document.getElementsByTagName("BODY")[0]
            body.style.backgroundImage = `url(${response.url})`;
        })
        .catch(err => {
            console.log("err", err)
        })
}

window.onload = function() {
    setInterval(getRandomImage, 5000);
}


const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalMiliSeconds = (newYearsDate - currentDate);

    const days = Math.floor(totalMiliSeconds / 1000 / 60 / 60 / 24);
    const hours = Math.floor((totalMiliSeconds / 1000 / 60 / 60) % 24);
    const mins = Math.floor((totalMiliSeconds / 1000 / 60) % 60);
    const secs = Math.floor((totalMiliSeconds / 1000) % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = mins;
    secondsEl.innerHTML = secs;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000)