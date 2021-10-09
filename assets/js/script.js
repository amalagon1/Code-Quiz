

var buttonEl = document.querySelector("#start");
var answerEl = document.querySelector(".answer")





function startQuiz() {
    document.querySelector("#first").style.display = "none";
    document.querySelector("#question1").style.display = "initial";
}

buttonEl.addEventListener("click", startQuiz)

/*function answerQuestion1() {
    document.querySelector("#question1").style.display = "none";
    document.querySelector("#question2").style.display = "initial";
}
answerEl.addEventListener("click", answerQuestion1)*/

function answerQuestion2() {
    document.querySelector("#question2").style.display = "none";
    document.querySelector("#question3").style.display = "initial";
}

function answerQuestion3() {
    document.querySelector("#question3").style.display = "none";
    document.querySelector("#question4").style.display = "initial";
}

function answerQuestion4() {
    document.querySelector("#question4").style.display = "none";
    document.querySelector("#question5").style.display = "initial";
}

function scoreTracker() {

}

let lis = document.querySelectorAll("li.answer1");

let lis_array = Array.from(lis);

lis.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (elem.dataset.correct === "yes") {
            document.querySelector("#question1").style.display = "none";
            document.querySelector("#question2").style.display = "initial";
        }
    })
})

/*function firstQuestion() {
    lis = document.querySelectorAll("li.answer1");

    let lis_array = Array.from(lis);

    lis.forEach(function (elem) {
        elem.addEventListener("click", function () {
            if (elem.dataset.correct === "yes") {
                document.querySelector("#question1").style.display = "none";
                document.querySelector("#question2").style.display = "initial";
            }
        })
    })
}*/

let lis = document.querySelectorAll("li.answer2");

let lis_array = Array.from(lis);

lis.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (elem.dataset.correct === "yes") {
            document.querySelector("#question2").style.display = "none";
            document.querySelector("#question3").style.display = "initial";
        }
    })
})

/*function secondQuestion() {
    let lis = document.querySelectorAll("li.answer2")
    let lis_array = Array.from(lis);
    lis.forEach(function (elem) {
        elem.addEventListener("click", function () {
            if (elem.dataset.correct === "yes") {
                document.querySelector("#question2").style.display = "none";
                document.querySelector("#question3").style.display = "initial";
            }
        })
    })

}*/
