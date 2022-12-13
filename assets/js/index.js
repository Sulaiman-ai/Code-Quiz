questions = [{
    title: "Which method could you use to select a HTML element?",
    options: ["getElementbyId()",
    "selectElement()",
    "use()",
    "select()"],
    correct_option_index: 0
}]

start_button = document.getElementById("start")
let time_display = document.getElementById("time")
let questions_div = document.getElementById("questions")

function startGame(){
    console.log("start game")
    time_display.innerHTML = 60
    startTimer()
    questions_div.classList.remove("hide")
}

start_button.onclick = function(){startGame()}

function startTimer(){
    setInterval(function(){
        time_display.innerHTML --
    }, 1000)
}

function checkAnswer(question_num, answer){
    if (questions[question_num].correct_option_index == answer){
        return true
    }

}