start_button = document.getElementById("start")


let time_display = document.getElementById("time")

function startGame(){
    console.log("start game")
    time_display.innerHTML = 60
    startTimer()
}

start_button.onclick = function(){startGame()}

function startTimer(){
    setInterval(function(){
        time_display.innerHTML --
    }, 1000)
}