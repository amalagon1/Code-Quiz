
/*var questions = [
    {
        question: "what does 'html' stand for?",
        answers: [
            {
                answer: "Answer 1",
                correct: "yes"
            },
            {
                answer: "Answer 2",
                correct: "no"
            }, {
                answer: "Answer 3",
                correct: "no"
            }
        ]
    }
]

var currentQuestion = 0;*/

/*var playerScore = 0;
var startingMinutes = 1;
let time = startingMinutes * 60;



function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    setInterval(updateCountdown, 1000);
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}*/

/*function subtractTimer() {

}*/

function setTimer() {
    var minute = 0;
    var sec = 60;
    setInterval(function () {
        document.getElementById("countdown").innerHTML = minute + " : " + sec;
        sec--;
        if (sec == 00 && minute == 00) {
            window.alert("time's up!")

        }
    }, 1000);
}

function startQuiz() {
    $("#first").hide();
    $("#question1").show();
    setTimer()

}
$("#start").click(startQuiz);

/*function answerQuestion1() {
    alert($(this).attr("data-correct"))
    $("#question1").hide();
    $("#question2").show();
}*/
$("#question1 .answer1").click(answerQuestion1)

function answerQuestion1() {
    var correct = $(this).data("correct");
    if (correct === "yes") {
        alert("correct answer!");
    } else {
        alert("incorrect answer!");
    }
    $("#question1").hide();
    $("#question2").show();
    /*currentQuestion++;*/
    /*displayQUestion();*/
}

$("#question2 .answer2").click(answerQuestion2)
function answerQuestion2() {
    var correct = $(this).data("correct");
    if (correct === "yes") {
        alert("correct answer!");
    } else {
        alert("incorrect answer!");
    }
    $("#question2").hide();
    $("#question3").show();
}

$("#question3 .answer3").click(answerQuestion3)
function answerQuestion3() {
    var correct = $(this).data("correct");
    if (correct === "yes") {
        alert("correct answer!");
    } else {
        alert("incorrect answer!");
    }
    $("#question3").hide();
    $("#question4").show();
}

$("#question4 .answer4").click(answerQuestion4)
function answerQuestion4() {
    var correct = $(this).data("correct");
    if (correct === "yes") {
        alert("correct answer!");
    } else {
        alert("incorrect answer!");
    }
    $("#question4").hide();
    $("#question5").show();
}

$("#question5 .answer5").click(answerQuestion5)
function answerQuestion5() {
    var correct = $(this).data("correct");
    if (correct === "yes") {
        alert("correct answer!");
    } else {
        alert("incorrect answer!");
    }
    $("#question5").hide();
    $("#scoreContainer").show();
}
