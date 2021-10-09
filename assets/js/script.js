
var questions = [
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

var currentQuestion = 0;




function startQuiz() {
    $("#first").hide();
    $("#question1").show();
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
    currentQuestion++;
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
function answerQuestion4() {
    var correct = $(this).data("correct");
    if (correct === "yes") {
        alert("correct answer!");
    } else {
        alert("incorrect answer!");
    }
    $("#question3").hide();
    $("#question4").show();
}

$("#question4 .answer4").click(answerQuestion3)
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
