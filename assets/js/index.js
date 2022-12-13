// questions = [{
//     title: "Which method could you use to select a HTML element?",
//     options: ["getElementbyId()",
//     "selectElement()",
//     "use()",
//     "select()"],
//     correct_option_index: 0
// }]

start_button = document.getElementById("start")
let time_display = document.getElementById("time")
let questions_div = document.getElementById("questions")
let question_display = document.getElementById("question-title")
let choices_display = document.getElementById("choices")

let button1 = document.getElementById("1")
let button2 = document.getElementById("2")
let button3 = document.getElementById("3")
let button4 = document.getElementById("4")
let button_list = [button1, button2, button3, button4]

let q_key = 1
let current_question = getQuestion(q_key)
let score = 0

function startGame(){
    console.log("start game")
    time_display.innerHTML = 60
    startTimer()
    addChoiceListeners()
    questions_div.classList.remove("hide")
    displayQuestion(getQuestion(1))
}

start_button.onclick = function(){startGame()}

function startTimer(){
    setInterval(function(){
        time_display.innerHTML --
    }, 1000)
}

function checkAnswer(choiceIndex, answerIndex){
    if (choiceIndex == answerIndex){
        return true
    }
    return false
    // if (questions[question_num].correct_option_index == answer){
    //     return true
    // }

}

function getQuestion(key){
    return JSON.parse(localStorage.getItem(key))
}

function displayQuestion(q_obj){
    question_display.innerHTML = q_obj.question;
    button_list.forEach(function(button, index){
        button.textContent = q_obj.options[index]
    })
    // choices_display.innerHTML = q_obj.options;
}

function handleButton(buttonIndex){
    if (q_key == 5){
        
    }
    console.log("handling")
    correct = checkAnswer(buttonIndex, current_question.answer)
    q_key++;
    current_question = getQuestion(q_key)
    displayQuestion(current_question)
    if (correct){
        score++
    } else {
        time_display.innerHTML -= 10;
    }
}

function addChoiceListeners(){
    console.log("listen")
    button_list.forEach((button, index) => {
        console.log(button)
        button.addEventListener('click', () =>{handleButton(index)})
    })
}

// click button
// call function
// pass in which button
// compare button index against correct answer index
// if answer is correct move to next question
// if answer is wrong decrease time left by 10 seconds