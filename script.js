var btn = document.querySelector("audio");
let myButtons = document.querySelectorAll(".btn");

function play(event) {
    const val = event.target;
    btn.src = (`sounds/${val.textContent}.mp3`);
    btn.play();
}

function stop() {
    btn[0].pause();
}

myButtons.forEach(button => {
    button.addEventListener('click', play);
});
document.querySelector(".stop").addEventListener("click", stop);