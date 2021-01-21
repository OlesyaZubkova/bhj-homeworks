const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

image.onclick = function() {
    const touch = clickerCounter.textContent++;
    if (touch % 2 == 0 ) {
        image.width = 250;
    } else {
        image.width = 200;
    };
};
