console.log("Joshua Merrell");

const playBtn = document.getElementById("play-btn");
const audioObj = document.querySelector("audio");

playBtn.onclick = function(ev) {
    audioObj.fastSeek(0);
    if(audioObj.paused) {
        console.log("Playing audio");
        audioObj.play();
    } else {
        console.log("Stopping audio");
        audioObj.pause();        
    }
};