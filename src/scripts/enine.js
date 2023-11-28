const pianoKeys = document.querySelectorAll(".piano-keys .key");
const audio = new Audio("src/tunes/a.wav");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check");
let mapedKeys = [];


const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clikedKey = document.querySelector(`[data-key="${key}"]`);
    clikedKey.classList.add("active");
    setTimeout(() => {
        clikedKey.classList.remove("active");
    }, 150)
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (event) => {
    if (mapedKeys.includes(event.key)) {
        playTune(event.key);
    }
});

const handleVolume = (parm) => {
    audio.volume = parm.target.value;
}

const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide") )
}

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys)
