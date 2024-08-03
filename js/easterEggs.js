function playWiggle() {
    var audio = new Audio('./assets/sounds/выгу выгу выгу.mp3');
    audio.play();
    document.getElementById("name").textContent = "выгу выгу выгу";
    console.log("выгу выгу выгу")
    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        document.getElementById("name").textContent = "mrksbgg";
   });
}

function playMarat() {
    var audio = new Audio('./assets/sounds/марат.mp3');
    audio.play();
}