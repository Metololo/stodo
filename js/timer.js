var seconds = 1500;
let interval = null;
var intervalID

function startTimer(){
   intervalID = setInterval(incrementTimer,10)
}

function incrementTimer(){

    const timer = document.getElementById('time')
    seconds--
    if(seconds === 0){
        clearInterval(intervalID)
        const audio = new Audio('../assets/audio/finish.wav')

        audio.play()
    }

    let secs= seconds%60
    console.log(secs)
    let mins = Math.floor(seconds/60)

    if(secs < 10){
        secs = '0'+secs
    }

    if(mins < 10){
        mins = '0'+mins
    }

    timer.innerHTML = mins+':'+secs
}