const beginButton = document.getElementById('begin-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')

let shuffleQuestions, currentQuestionIndex

beginButton.addEventListener('click', beginGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion
})

function beginGame(){
    beginButton.classList.add('hidden')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hidden')
    nextQuestion

}

function nextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}
*
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hidden')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hidden')
    } else {
        beginButton.innerText = 'Restart'
        beginButton.classList.remove('hidden')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<script>', correct: true},
            {text: '<javascript>', correct: false},
            {text: '<js>', correct: false},
            {text: '<scripting>', correct: false}
        ]
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
        answers: [
            {text: '#demo.innerHTML = "Hello World!";', correct:false},
            {text: 'document.getElementById("demo").innerHTML = "Hello World!";', correct: true},
            {text: 'document.getElement("p").innerHTML = "Hello World!";', correct: false},
            {text: 'document.getElementByName("p").innerHTML = "Hello World!";'}
        ]
    },
]