var backgroundImages = ["assets/images/dragon1.jpg", "assets/images/dragon2.jpg", "assets/images/dragon3.jpg", "assets/images/dragon4.jpg", "assets/images/dragon5.jpg"]

$(document).ready(function () {

    var wins = 0;
    var loss = 0;
    var userGuess = "";

    var winsP = $("<span>")
    winsP.attr("class", "panel")
    winsP.attr("id", "wins")
    winsP.text("WINS:" + wins)
    $(".score").append(winsP)

    var lossP = $("<span>")
    lossP.attr("class", "panel")
    lossP.attr("id", "loss")
    lossP.text("LOSS:" + loss)
    $(".score").append(lossP)

    var questions = [
        "Which color Dragons are best known for breathing fire?",
        "What can penetrate a Dragon's scales?",
        "Which Dragons commonly take human form?",
        "Where are Dragons weakest?",
        "How old do Dragons usually live?"
    ]

    var question1Answers = [
        "White Dragons",
        "Blue Dragons",
        "Green Dragons",
        "Red Dragons"
    ]

    var question2Answers = [
        "Dwarven Iron",
        "Silver",
        "Adamantium",
        "Nothing"
    ]

    var question3Answers = [
        "Gold Dragons",
        "Red Dragons",
        "Black Dragons",
        "Silver Dragons"
    ]

    var question4Answers = [
        "Head",
        "Limbs",
        "Stomach",
        "Tail"
    ]

    var question5Answers = [
        "Thousands of Years",
        "30 years",
        "200 years",
        "Immortal"
    ]

    $(".questionP").on("click", function(){
        question1()
    })
    
    function question1(){
        wins = 0;
        $("#wins").text("WINS:" + wins)
        loss = 0;
        $("#loss").text("LOSS:" + loss)
        $(".answers").text("")
        $(".questionP").text(questions[0])
        $(".qCounter").html("You have " + "<span id=timer>" + " seconds to answer")
        for (var i = 0; i < question1Answers.length; i++) {
            var answerButton = $("<button>")
            answerButton.addClass("button-color")
            answerButton.attr("data-answer", question1Answers[i])
            answerButton.text(question1Answers[i])
            $(".answers").append(answerButton)
        }

        $("button").on("click", function () {
            if ($(this).attr("data-answer") === "Red Dragons") {
                wins++
                $(".questionP").text("Good Job!")
                $("#wins").text("WINS:" + wins)
                setTimeout(question2, 1500)
                clearInterval(counter)
                console.log(wins)
            } else {
                loss++
                $(".questionP").text("Sorry, Nope!")
                $("#loss").text("LOSS:" + loss)
                setTimeout(question2, 1500)
                clearInterval(counter)
                console.log(loss)
            }
        })

        var countDown = 11;
        var counter = setInterval(timer, 1000)
        function timer() {
            countDown--
            $("#timer").html(countDown + " seconds to answer")
            if (countDown <= 0) {
                clearInterval(counter)
                loss++
                $("#loss").text("LOSS:" + loss)
                $(".qCounter").text("Too Late! Next Question!")
                $(".answers").text("")
                setTimeout(question2, 2000)
                console.log(loss)
            }
        }
    }
    

    function question2() {
        $(".answers").text("")
        $(".questionP").text(questions[1])
        $(".qCounter").html("You have " + "<span id=timer>" + " seconds to answer")

        for (var i = 0; i < question2Answers.length; i++) {
            var answerButton = $("<button>")
            answerButton.addClass("button-color")
            answerButton.attr("data-answer", question2Answers[i])
            answerButton.text(question2Answers[i])
            $(".answers").append(answerButton)
        }

        $("button").on("click", function () {
            if ($(this).attr("data-answer") === "Adamantium") {
                wins++
                $(".questionP").text("Good Job!")
                $("#wins").text("WINS:" + wins)
                setTimeout(question3, 1500)
                clearInterval(counter)
                console.log(wins)
            } else {
                loss++
                $(".questionP").text("Sorry, Nope!")
                $("#loss").text("LOSS:" + loss)
                setTimeout(question3, 1500)
                clearInterval(counter)
                console.log(loss)
            }
        })

        var countDown = 11;
        var counter = setInterval(timer, 1000)
        function timer() {
            countDown--
            $("#timer").html(countDown + " seconds to answer")
            if (countDown <= 0) {
                clearInterval(counter)
                loss++
                $(".qCounter").text("Too Late! Next Question!")
                $("#loss").text("LOSS:" + loss)
                $(".answers").text("")
                setTimeout(question3, 2000)
                console.log(loss)
            }
        }
    }
    function question3() {
        $(".answers").text("")
        $(".questionP").text(questions[2])
        $(".qCounter").html("You have " + "<span id=timer>" + " seconds to answer")

        for (var i = 0; i < question3Answers.length; i++) {
            var answerButton = $("<button>")
            answerButton.addClass("button-color")
            answerButton.attr("data-answer", question3Answers[i])
            answerButton.text(question3Answers[i])
            $(".answers").append(answerButton)
        }

        $("button").on("click", function () {
            if ($(this).attr("data-answer") === "Silver Dragons") {
                wins++
                $(".questionP").text("Good Job!")
                $("#wins").text("WINS:" + wins)
                setTimeout(question4, 1500)
                clearInterval(counter)
                console.log(wins)
            } else {
                loss++
                $(".questionP").text("Sorry, Nope!")
                $("#loss").text("LOSS:" + loss)
                setTimeout(question4, 1500)
                clearInterval(counter)
                console.log(loss)
            }
        })

        var countDown = 11;
        var counter = setInterval(timer, 1000)
        function timer() {
            countDown--
            $("#timer").html(countDown + " seconds to answer")
            if (countDown <= 0) {
                clearInterval(counter)
                loss++
                $(".qCounter").text("Too Late! Next Question!")
                $("#loss").text("LOSS:" + loss)
                $(".answers").text("")
                setTimeout(question4, 2000)
                console.log(loss)
            }
        }
    }
    function question4() {
        $(".answers").text("")
        $(".questionP").text(questions[3])
        $(".qCounter").html("You have " + "<span id=timer>" + " seconds to answer")

        for (var i = 0; i < question4Answers.length; i++) {
            var answerButton = $("<button>")
            answerButton.addClass("button-color")
            answerButton.attr("data-answer", question4Answers[i])
            answerButton.text(question4Answers[i])
            $(".answers").append(answerButton)
        }

        $("button").on("click", function () {
            if ($(this).attr("data-answer") === "Stomach") {
                wins++
                $(".questionP").text("Good Job!")
                $("#wins").text("WINS:" + wins)
                setTimeout(question5, 1500)
                clearInterval(counter)
                console.log(wins)
            } else {
                loss++
                $(".questionP").text("Sorry, Nope!")
                $("#loss").text("LOSS:" + loss)
                setTimeout(question5, 1500)
                clearInterval(counter)
                console.log(loss)
            }
        })

        var countDown = 11;
        var counter = setInterval(timer, 1000)
        function timer() {
            countDown--
            $("#timer").html(countDown + " seconds to answer")
            if (countDown <= 0) {
                clearInterval(counter)
                loss++
                $(".qCounter").text("Too Late! Next Question!")
                $("#loss").text("LOSS:" + loss)
                $(".answers").text("")
                setTimeout(question5, 2000)
                console.log(loss)
            }
        }
    }
    function question5() {
        $(".answers").text("")
        $(".questionP").text(questions[4])
        $(".qCounter").html("You have " + "<span id=timer>" + " seconds to answer")

        for (var i = 0; i < question5Answers.length; i++) {
            var answerButton = $("<button>")
            answerButton.addClass("button-color")
            answerButton.attr("data-answer", question5Answers[i])
            answerButton.text(question5Answers[i])
            $(".answers").append(answerButton)
        }

        $("button").on("click", function () {
            if ($(this).attr("data-answer") === "Thousands of Years") {
                wins++
                $(".questionP").text("Good Job!")
                $("#wins").text("WINS:" + wins)
                setTimeout(finalCount, 1500)
                clearInterval(counter)
                console.log(wins)
            } else {
                loss++
                $(".questionP").text("Sorry, Nope!")
                $("#loss").text("LOSS:" + loss)
                setTimeout(finalCount, 1500)
                clearInterval(counter)
                console.log(loss)
            }
        })

        var countDown = 11;
        var counter = setInterval(timer, 1000)
        function timer() {
            countDown--
            $("#timer").html(countDown + " seconds to answer")
            if (countDown <= 0) {
                clearInterval(counter)
                loss++
                $(".qCounter").text("Too Late! Next Question!")
                $("#loss").text("LOSS:" + loss)
                $(".answers").text("")
                setTimeout(finalCount, 2000)
                console.log(loss)
            }
        }
    }

    function finalCount() {
        if (wins > loss) {
            $(".qCounter").text("Great job! Your knowledge of Dragons is impressive!")
        } else {
            $(".qCounter").text("You need to brush up on your Dragonomics!")
            setTimeout(question1, 1500);
        }
    }
})
