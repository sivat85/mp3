const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    muteUnmuteBtn = wrapper.querySelector(".mute-unmute"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    audio = document.getElementById("main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar"),
    musicList = wrapper.querySelector(".music-list"),
    moreMusicBtn = wrapper.querySelector("#more-music"),
    currentTrack = wrapper.querySelector("#current-track"),
    totalTrack = wrapper.querySelector("#total-track"),
    closemoreMusic = musicList.querySelector("#close"),
    vprogressbar = document.getElementById("vprogressbar"),
    vprogressed = document.getElementById("vprogressed"),
    vpersentage = document.getElementById("vpersentage"),
    options = document.querySelector('.options'),
    btnMute = document.getElementById("btnMute");

let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);  // Set random index for the starting song
let isMusicPaused = true;  // Track if the music is paused

// Ensuring the button shows the correct state based on music play/pause
function updatePlayPauseButton() {
    const isMusicPlay = !audio.paused;
    if (isMusicPlay) {
        playPauseBtn.querySelector("i").innerText = "pause";
        wrapper.classList.add("paused");  // Music is playing
    } else {
        playPauseBtn.querySelector("i").innerText = "play_arrow";
        wrapper.classList.remove("paused");  // Music is paused
    }
}

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    playMusic();  // Start music on page load
    playingSong();  // Update song playing state
    updatePlayPauseButton();  // Ensure button reflects the correct state
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = allMusic[indexNumb - 1].img;  // Online image
    mainAudio.src = allMusic[indexNumb - 1].src;  // Online audio
    currentTrack.innerText = [indexNumb];
    totalTrack.innerText = (allMusic.length);
}

// Play music function
function playMusic() {
    mainAudio.play();
    updatePlayPauseButton();  // Ensure button reflects the correct state
}

// Pause music function
function pauseMusic() {
    mainAudio.pause();
    updatePlayPauseButton();  // Ensure button reflects the correct state
}

// Previous music function
function prevMusic() {
    musicIndex--; // Decrement of musicIndex by 1
    if (musicIndex < 1) musicIndex = allMusic.length; // Wrap to last song
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

// Next music function
function nextMusic() {
    musicIndex++; // Increment of musicIndex by 1
    if (musicIndex > allMusic.length) musicIndex = 1; // Wrap to first song
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

// Play or pause button event
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        playMusic();  // Play music if currently paused
    } else {
        pauseMusic();  // Pause music if currently playing
    }
    playingSong();
});

// Previous music button event
prevBtn.addEventListener("click", () => {
    prevMusic();
});

// Next music button event
nextBtn.addEventListener("click", () => {
    nextMusic();
});

// Update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; // Getting playing song current time
    const duration = e.target.duration; // Getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration");
    
    mainAudio.addEventListener("loadeddata", () => {
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) { // If sec is less than 10, add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });

    // Update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) { // If sec is less than 10, add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// Update playing song current time according to the progress bar width
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth; // Getting width of progress bar
    let clickedOffsetX = e.offsetX; // Getting offset X value
    let songDuration = mainAudio.duration; // Getting song total duration
    
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); // Calling playMusic function
    playingSong();
});

// Handle repeat button click
const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", () => {
    let getText = repeatBtn.innerText; // Getting this tag innerText
    switch (getText) {
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
            break;
        case "repeat_one":
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffled");
            break;
        case "shuffle":
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title", "Playlist looped");
            break;
    }
});

// Code for what to do after song ended
mainAudio.addEventListener("ended", () => {
    let getText = repeatBtn.innerText; // Getting this tag innerText
    switch (getText) {
        case "repeat":
            nextMusic(); // Calling nextMusic function
            break;
        case "repeat_one":
            mainAudio.currentTime = 0; // Setting audio current time to 0
            loadMusic(musicIndex); // Calling loadMusic function with argument, in the argument there is an index of the current song
            playMusic(); // Calling playMusic function
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1); // Generating random index/numb with max range of array length
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex); // This loop runs until the next random number won't be the same as the current musicIndex
            musicIndex = randIndex; // Passing randomIndex to musicIndex
            loadMusic(musicIndex);
            playMusic();
            playingSong();
            break;
    }
});

// Show music list onclick of music icon
moreMusicBtn.addEventListener("click", () => {
    musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", () => {
    moreMusicBtn.click();
});

// Ensure correct music list element
const ulTag = wrapper.querySelector(".music-list ul");
ulTag.innerHTML = '';  // Clear any existing list items

// Insert music items dynamically
allMusic.forEach((music, index) => {
    let liTag = `
        <li li-index="${index + 1}">
            <div class="row">
                <span>${music.name}</span>
                <p>${music.artist}</p>
            </div>
            <span id="${music.src}" class="audio-duration">3:40</span>
            <audio class="${music.src}" src="${music.src}"></audio>
        </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag);  // Add each song to the list
});

// Update the duration for each song after loading
const allLiTag = ulTag.querySelectorAll("li");
allLiTag.forEach((li) => {
    let liAudioDuartionTag = li.querySelector(".audio-duration");
    let liAudioTag = li.querySelector("audio");
    liAudioTag.addEventListener("loadeddata", () => {
        let duration = liAudioTag.duration;
        let totalMin = Math.floor(duration / 60);
        let totalSec = Math.floor(duration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;
        liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
        liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
    });
});

// Play particular song from the list onclick of li tag
function playingSong() {
    const allLiTag = ulTag.querySelectorAll("li");
    for (let j = 0; j < allLiTag.length; j++) {
        let audioTag = allLiTag[j].querySelector(".audio-duration");
        if (allLiTag[j].classList.contains("playing")) {
            allLiTag[j].classList.remove("playing");
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;
        }
        // If the li tag index is equal to the musicIndex, then add the playing class to it
        if (allLiTag[j].getAttribute("li-index") == musicIndex) {
            allLiTag[j].classList.add("playing");
            audioTag.innerText = "Playing";
        }
        allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
}

// Particular li clicked function
function clicked(element) {
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; // Updating current song index with clicked li index
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

// Mute/Unmute functionality
btnMute.addEventListener("click", (e) => {
    if (audio.volume) {
        lastVolume = audio.volume;
        audio.volume = 0;
        btnMute.classList.add('muted');
        vprogressed.style.width = 0;
        vpersentage.innerHTML = `${audio.volume.toFixed(1) * 100}%`;
        btnMute.innerHTML = "volume_off";
    } else {
        audio.volume = lastVolume;
        btnMute.classList.remove('muted');
        vprogressed.style.width = `${lastVolume.toFixed(1) * 100}%`;
        vpersentage.innerHTML = vprogressed.style.width;
        if (lastVolume > 0.5) {
            btnMute.innerHTML = "volume_up";
        } else if (lastVolume < 0.5 && lastVolume > 0) {
            btnMute.innerHTML = "volume_down";
        } else if (audio.muted) {
            audio.volume = 0.2;
            audio.muted = false;
            btnMute.classList.remove('muted');
            vprogressed.style.width = `${audio.volume.toFixed(1) * 100}%`;
            vpersentage.innerHTML = `${audio.volume.toFixed(1) * 100}%`;
            btnMute.innerHTML = "volume_down";
        }
    }
});

// Volume control bar
vprogressbar.addEventListener("click", (e) => {
    audio.muted = false;
    btnMute.classList.remove('muted');
    let volume = e.offsetX / vprogressbar.offsetWidth;
    volume < 0.1 ? volume = 0 : volume = volume;
    vprogressed.style.width = `${volume.toFixed(1) * 100}%`;
    vpersentage.innerHTML = vprogressed.style.width;
    audio.volume = volume;
    if (volume > 0.5) {
        btnMute.classList.add('loud');
        btnMute.innerHTML = "volume_up";
    } else if (volume < 0.7 && volume > 0) {
        btnMute.classList.remove('loud');
        btnMute.innerHTML = "volume_down";
    } else if (volume == 0) {
        btnMute.classList.add('muted');
        btnMute.innerHTML = "volume_off";
        audio.muted = true;
    }
    lastVolume = volume;
});

// Sidebar toggle function
function sidebar() {
    options.classList.toggle('active');
}

// Keyboard controls
document.addEventListener("keydown", e => {
    switch (e.key.toLowerCase()) {
        case "k":
            playMusic();
            break;
        case " ":
            pauseMusic();
            break;
        case "p":
            prevMusic();
            break;
        case "n":
            nextMusic();
            break;
    }
});
