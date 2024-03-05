console.log("Joshua Merrell");

const playBtn = document.getElementById("play-btn");
const audioObj = document.querySelector("audio");
let playing = false;
playBtn.onclick = function(ev) {
    if(playing) {
        console.log("Stopping audio");
        audioObj.pause();
    } else {
        console.log("Playing audio");
        audioObj.play();
    }
    audioObj.fastSeek(0);
    playing = !playing;
};