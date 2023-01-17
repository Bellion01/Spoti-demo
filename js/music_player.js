import { author_musics } from './data.js'
let music_name = document.querySelector('.music_name')
let author_name = document.querySelector('.author_name')
let musicPlace = document.querySelector('.musicss')
let button_next = document.querySelector('.buttonNext')
let button_prev = document.querySelector('.button_prev')
let play = document.querySelector(".play");
let button_next1 = document.querySelector('.buttonNext1')
let button_prev1 = document.querySelector('.button_prev1')
let play1 = document.querySelector(".play1");
let counter = 0
let i = 0
function init() {
    musicPlace.innerHTML = ''
    let audio = document.createElement('audio')
    let source = document.createElement('source')
    source.setAttribute('src', './Music/' + author_musics[counter].name + '.mp3')
    source.setAttribute('type', 'audio/mpeg')
    audio.setAttribute('controls', 'controls')
    author_name.innerHTML = author_musics[counter].author
    music_name.innerHTML = author_musics[counter].songs_name
    if (i == 0) {
        audio.pause()
        i++
    } else if (i == 1) {
        audio.setAttribute('autoplay', 'autoplay')
    }
    audio.append(source)
    audio.style.display = 'none'
    musicPlace.append(audio)
    function pausePlay() {
        if (audio.paused) {
            audio.play();
        } else if (audio.played) {
            audio.pause();
        }
    }
    play.onclick = () => {
        pausePlay()
    }
    play1.onclick = () => {
        pausePlay()
    }
    button_next.onclick = () => {
        next()
    }
    button_next1.onclick = () => {
        pausePlay()
        next()
    }
}
let next = () => {
    init()
    counter++
    if (counter == author_musics.length) {
        counter = 0
    }

}
function prevTrack() {
    init()
    counter--;
    if (counter < 0) {
        counter = author_musics.length - 1;
    }
}
button_prev.onclick = () => {
    prevTrack()
}
button_prev1.onclick = () => {
    prevTrack()
}
init()








