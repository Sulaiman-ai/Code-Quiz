function addQuestion (key, question, options, answer){
    window.localStorage.setItem(key, 
        JSON.stringify({
            question: question,
            options: options,
            answer: answer,
        }))
};

question = "How which of these is used to reference a JS file in a HTML file?"
options = [
    "src",
    "href",
    "link",
    "ref"
]
answer = 1

addQuestion(5, question, options, answer)