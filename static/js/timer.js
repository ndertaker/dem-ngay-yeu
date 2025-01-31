"use strict";
const startTime = new Date("2024-7-7 19:30:00");
timer();
setInterval(timer, 1000);

// Hàm đếm thời gian
function timer() {
    var totalSeconds = (new Date() - startTime) / 1000;
    var years = Math.floor(totalSeconds / 60 / 60 / 24 / 365);
    var days = Math.floor(totalSeconds / 60 / 60 / 24 % 365);
    var hours = Math.floor(totalSeconds / 60 / 60 % 24);
    if (hours < 10) {
        hours = "0" + hours;
    }
    var minutes = Math.floor(totalSeconds / 60 % 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var seconds = Math.floor(totalSeconds % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("years").textContent = years;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Hàm chọn ngẫu nhiên 1 câu
fetch('static/data/messages.json')
    .then(response => response.json())
    .then(data => {
        const messages = data.messages;
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.querySelector('.content p:nth-of-type(2)').textContent = randomMessage;
    })
    .catch(error => console.error('Lỗi khi tải file JSON:', error));
