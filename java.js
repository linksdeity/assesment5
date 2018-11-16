var question1 = {question: "What's the prize for answering correctly?", one: "money", two: "mercy", three: "more questions", answer: 3, correct: "RIGHT! SOUNDS LIKE YOU GET IT!", incorrect: "HAHAHA! YOU WISH! WRONG!"}
var question2 = {question: "What are robots made out of?", one: "sugar and spice", two: "metal and magic", three: "hopes and dreams", answer: 2, correct: "TOO EASY FOR YOU, HUH???????? ", incorrect: "NOPE! TOO BAD ALPHYS CAN'T HELP!"}
var question3 = {question: "Would you smooch a ghost?", one: "heck no", two: "heck no", three: "heck yeah", answer: 4, correct: "GREAT ANSWER! I LOVE IT!!!!!! ", incorrect: "GREAT ANSWER! I LOVE IT!!!!!! "}
var question4 = {question: "How many letters in the name Mettatonnnnnnnnnnnnnnnnnnnnn?", one: "28", two: "30", three: "26", answer: 1, correct: "OF COURSE THAT WAS EASY FOR YOU!", incorrect: "NO NO NO! CAN'T YOU READ!? "}

var questionArray = [question1, question2, question3, question4];

var userChoice;
var answer;
var i = 0;
var speechCount = 0;
var wins = 0;

function setQuestion(i){
document.getElementById("question").innerHTML = questionArray[i].question;
document.getElementById("button1").innerHTML = questionArray[i].one;
document.getElementById("button2").innerHTML = questionArray[i].two;
document.getElementById("button3").innerHTML = questionArray[i].three;
answer = questionArray[i].answer;
}

function inputAnswer(input){
    if(input === answer || answer === 4){
        i++;
        winChecker(i)

    }
    else{
        alert(questionArray[i].incorrect)
        i = 0;
        setQuestion(i);
    }
}

function winChecker(score){
    if(score === questionArray.length)
    {
        alert("YOU WIN!!!!!!")
        wins++;
        i = 0;
        setQuestion(i);
        document.getElementById("talking").classList.remove("hide-me")
        document.getElementById("gameshow").classList.add("hide-me")

    }
    else{
        alert(questionArray[i-1].correct)
        setQuestion(i);
    }
}

function pressContinue(){

    if(i === 0 && speechCount == 0 && wins == 0)
    {
        document.getElementById("quote").innerHTML = "LET'S START WITH AN EASY ONE!!"
        speechCount++
    }
    else if(i === 0 && speechCount == 1)
    {
        document.getElementById("quote").innerHTML = "YOU ARE TODAY'S BIG WINNER!!!!"
        document.getElementById("talking").classList.add("hide-me")
        document.getElementById("gameshow").classList.remove("hide-me")
        speechCount++
    }
    else if(speechCount == 2){
        document.getElementById("quote").innerHTML = "CONGRATS, SO HERE IS YOUR PRIZE...."
        speechCount++
    }
    else if(speechCount == 3){
        document.getElementById("quote").innerHTML = "MORE QUESTIONS!!!!!!"
        speechCount++
    }
    else if(speechCount == 4)
    {
        document.getElementById("talking").classList.add("hide-me")
        document.getElementById("gameshow").classList.remove("hide-me")
        document.getElementById("quote").innerHTML = "YOU JUST KEEP WINNING!!"
        speechCount++;

    }
    else if(speechCount == 5)
    {
        document.getElementById("quote").innerHTML = "TOO BAD YOU DON'T REALLY EXIST!!!"
        speechCount = 4
    }

}


