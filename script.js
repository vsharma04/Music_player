const music = document.querySelector("audio")
const play = document.getElementById('play')
const img = document.querySelector('img')

const songName = document.getElementById('songName')
const artistName = document.getElementById('artistName')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

const songs = [
    {
        id:'Song-1',
        songName: 'Lost Control Again',
        artistName: 'Alan Walker'
    },
    {
        id:'Song-2',
        songName: 'Alone',
        artistName: 'Alan Walker'
    },
    {
        id:'Song-3',
        songName: 'Perfect',
        artistName: 'Ed Sheeran'
    },
    {
        id:'Song-4',
        songName: 'Faded',
        artistName: 'Alan Walker'
    },
]

let isAudioPlaying = false;

const playTheMusic = ()=>{
    isAudioPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("rotateAnime")
}



const pauseTheMusic = ()=>{
    isAudioPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("rotateAnime")
}

play.addEventListener("click",()=>{
    isAudioPlaying ? pauseTheMusic() : playTheMusic()
})

const loadTheSong = (songs)=>{
    songName.textContent = songs.songName
    artistName.textContent = songs.artistName
    music.src = './music/' + songs.songName + ".mp3";
    img.src = "./images/" + songs.id + ".jpg"
}

songIndex = 0;
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
}

const prevSong = ()=>{
    songIndex = (songIndex - 1) % songs.length;
    loadTheSong(songs[songIndex])
    playTheMusic();
}

next.addEventListener("click", nextSong)
prev.addEventListener("click", prevSong)