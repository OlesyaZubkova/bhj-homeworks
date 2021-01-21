const timeOff = function() {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        alert ("Вы победили в конкурсе!");
        clearInterval(int);
    }; 
};

const int = setInterval(timeOff, 1000);
