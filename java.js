var question1 = {question: "What's the prize for answering correctly?", one: "money", two: "mercy", three: "more questions", answer: 3, correct: "You got it!", incorrect: "WRONG!"}
var question2 = {question: "What are robots made out of?", one: "sugar and spice", two: "metal and magic", three: "hopes and dreams", answer: 2, correct: "You got it!", incorrect: "WRONG!"}
var question3 = {question: "Would you smooch a ghost?", one: "heck no", two: "heck no", three: "heck yeah", answer: 3, correct: "You got it!", incorrect: "WRONG!"}
var question4 = {question: "How many letters in the name Mettatonnnnnnnnnnnnnnnnnnnnn?", one: "28", two: "30", three: "26", answer: 1, correct: "You got it!", incorrect: "WRONG!"}

var questionArray = [question1, question2, question3, question4];

var userChoice;
var answer;
var i = 0;

function setQuestion(i){
document.getElementById("question").innerHTML = questionArray[i].question;
document.getElementById("button1").innerHTML = questionArray[i].one;
document.getElementById("button2").innerHTML = questionArray[i].two;
document.getElementById("button3").innerHTML = questionArray[i].three;
answer = questionArray[i].answer;
}

function inputAnswer(input){
    if(input === answer){
        i++;
        winChecker(i)

    }
    else{
        i = 0;
        setQuestion(i);
        alert(questionArray[i].incorrect)
    }
}

function winChecker(score){
    if(score === questionArray.length)
    {
        alert("YOU WIN!!!!!!\nWAY TO GO!!!!")
        i = 0;
        setQuestion(i);
    }
    else{
        alert(questionArray[score].correct)
        setQuestion(i);
    }
}



